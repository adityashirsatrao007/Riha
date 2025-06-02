import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react'; // Using Wand2 for AI/magic feel

export function AiRecommenderCta() {
  return (
    <section className="py-12 md:py-20 bg-primary/10 dark:bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Wand2 className="h-12 w-12 text-accent mx-auto mb-4" />
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
          Need Help Choosing?
        </h2>
        <p className="text-lg text-foreground max-w-2xl mx-auto mb-8">
          Our AI Stylist can help you find the perfect dress based on your body type, event theme, and color preferences. Give it a try!
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group shadow-lg transform hover:scale-105 transition-transform">
          <Link href="/ai-recommender">
            Try AI Stylist <Wand2 className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
