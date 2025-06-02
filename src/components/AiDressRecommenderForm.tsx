"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2 } from 'lucide-react';
import type { DressRecommendationInput, DressRecommendationOutput } from '@/ai/flows/dress-recommendation';
import { dressRecommendation } from '@/ai/flows/dress-recommendation'; // Ensure this path is correct
import Image from 'next/image';
import { bodyTypes, eventThemes, dressCategories } from '@/lib/data';

const formSchema = z.object({
  bodyType: z.string().min(1, "Body type is required"),
  eventTheme: z.string().min(1, "Event theme is required"),
  color: z.string().min(1, "Preferred color is required"),
});

type FormData = DressRecommendationInput;

export function AiDressRecommenderForm() {
  const [recommendations, setRecommendations] = useState<DressRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const result = await dressRecommendation(data);
      setRecommendations(result);
    } catch (e) {
      console.error("AI Recommendation Error:", e);
      setError("Failed to get recommendations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center">
            <Wand2 className="mr-2 h-6 w-6 text-primary" />
            AI Dress Stylist
          </CardTitle>
          <CardDescription>
            Tell us your preferences, and our AI will suggest some beautiful Indian wedding dresses for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="bodyType">Body Type</Label>
               <Controller
                name="bodyType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="bodyType">
                      <SelectValue placeholder="Select your body type" />
                    </SelectTrigger>
                    <SelectContent>
                      {bodyTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.bodyType && <p className="text-sm text-destructive mt-1">{errors.bodyType.message}</p>}
            </div>

            <div>
              <Label htmlFor="eventTheme">Event Theme</Label>
              <Controller
                name="eventTheme"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="eventTheme">
                      <SelectValue placeholder="Select the event theme" />
                    </SelectTrigger>
                    <SelectContent>
                       {eventThemes.map(theme => <SelectItem key={theme} value={theme}>{theme}</SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.eventTheme && <p className="text-sm text-destructive mt-1">{errors.eventTheme.message}</p>}
            </div>

            <div>
              <Label htmlFor="color">Preferred Color</Label>
               <Controller
                name="color"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="color">
                      <SelectValue placeholder="Select your preferred color" />
                    </SelectTrigger>
                    <SelectContent>
                       {dressCategories.color.map(color => <SelectItem key={color} value={color}>{color}</SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.color && <p className="text-sm text-destructive mt-1">{errors.color.message}</p>}
            </div>

            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-accent hover:bg-accent/80">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Recommendations...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" /> Get Recommendations
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {recommendations && recommendations.dressRecommendations && recommendations.dressRecommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="font-headline text-2xl font-bold text-primary mb-6 text-center">Our AI Recommends:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.dressRecommendations.map((rec, index) => (
              <Card key={index} className="overflow-hidden shadow-lg h-full flex flex-col">
                <CardHeader className="p-0">
                    <div className="aspect-[3/4] relative w-full">
                    <Image
                        src={rec.imageUrl || 'https://placehold.co/600x800.png'}
                        alt={rec.dressName}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        data-ai-hint="dress style" // Generic hint for AI generated images
                    />
                    </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="font-headline text-xl mb-1">{rec.dressName}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{rec.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
       {recommendations && recommendations.dressRecommendations && recommendations.dressRecommendations.length === 0 && !isLoading &&(
         <p className="text-center text-muted-foreground mt-6">No recommendations found for your criteria. Try adjusting your preferences.</p>
       )}
    </div>
  );
}
