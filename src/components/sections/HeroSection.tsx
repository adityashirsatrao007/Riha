
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-purple-100 dark:bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-slide-in-up">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Find Your Dream Wedding Dress
            </h1>
            <p className="text-lg sm:text-xl text-foreground mb-8">
              Explore our exquisite collection of Indian wedding dresses,
              meticulously crafted for your special day. From traditional
              elegance to modern chic, find the perfect ensemble that reflects
              your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group shadow-lg transform hover:scale-105 transition-transform">
                <Link href="/dresses">
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl animate-fade-in">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Indian Wedding Scene"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint="indian wedding"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
