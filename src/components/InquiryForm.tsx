"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';


const inquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  dressName: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type InquiryFormData = z.infer<typeof inquiryFormSchema>;

export function InquiryForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
  });

  useEffect(() => {
    const dressQueryParam = searchParams.get('dress');
    if (dressQueryParam) {
      setValue('dressName', dressQueryParam);
    }
  }, [searchParams, setValue]);


  const onSubmit: SubmitHandler<InquiryFormData> = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Inquiry Data:", data);
    setIsLoading(false);
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
      variant: "default", 
    });
    reset();
    // Clear dressName from URL if needed, or handle as desired
    const currentDressParam = searchParams.get('dress');
    if (currentDressParam) {
        // This would ideally navigate without the param, but for simplicity we'll just clear the field
        setValue('dressName', ''); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" {...register("name")} placeholder="e.g. Priya Sharma" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" {...register("email")} placeholder="e.g. priya@example.com" />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input id="phone" type="tel" {...register("phone")} placeholder="e.g. +91 98765 43210" />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
      </div>
      
      {searchParams.get('dress') && (
        <div>
            <Label htmlFor="dressName">Regarding Dress</Label>
            <Input id="dressName" {...register("dressName")} readOnly className="bg-muted/50"/>
        </div>
      )}

      <div>
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" {...register("message")} rows={5} placeholder="Tell us about your dream dress or ask any questions..." />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-accent hover:bg-accent/80 text-accent-foreground">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Send Inquiry
          </>
        )}
      </Button>
    </form>
  );
}
