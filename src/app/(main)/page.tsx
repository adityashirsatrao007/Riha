import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedDresses } from '@/components/sections/FeaturedDresses';
// import { AiRecommenderCta } from '@/components/sections/AiRecommenderCta'; // Removed AI CTA
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AboutUsSection = () => (
  <section className="py-12 md:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">
            Welcome to Riha Boutique
          </h2>
          <p className="text-lg text-foreground mb-4">
            At Riha Boutique, we believe every bride deserves to feel like royalty on her special day. Our curated collection of Indian wedding dresses blends timeless tradition with contemporary elegance. Each piece is crafted with passion, using the finest fabrics and intricate embellishments.
          </p>
          <p className="text-lg text-foreground mb-6">
            From majestic lehengas to graceful sarees and chic gowns, we offer a diverse range to suit every taste and occasion. Let us help you find the dress that tells your unique story.
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/contact">
              Visit Our Boutique
            </Link>
          </Button>
        </div>
        <div className="relative aspect-video md:aspect-[5/4] rounded-lg overflow-hidden shadow-lg">
           <Image
              src="https://placehold.co/600x450.png"
              alt="Riha Boutique Interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint="boutique interior"
            />
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
 <section id="testimonials" className="py-12 md:py-20 bg-primary/5 dark:bg-primary/3">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
        What Our Brides Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Priya S.", quote: "Riha Boutique made my dream wedding dress a reality! The quality and design were exceptional.", imageHint: "happy bride" },
          { name: "Aisha K.", quote: "Found the most stunning Saree for my reception. The team was so helpful and patient.", imageHint: "smiling woman" },
          { name: "Meera P.", quote: "Their AI stylist was surprisingly accurate! It helped me narrow down my choices and I loved the final pick.", imageHint: "elegant woman" },
        ].map((testimonial, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={`https://placehold.co/100x100.png`} alt={testimonial.name} data-ai-hint={testimonial.imageHint} fill className="object-cover"/>
                </div>
                <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);


const FaqSection = () => (
  <section id="faq" className="py-12 md:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
        Frequently Asked Questions
      </h2>
      {/* TODO: Implement Accordion for FAQs if needed, or simple Q&A list */}
      <div className="space-y-6">
        <div>
          <h3 className="font-headline text-xl font-semibold text-foreground mb-2">Do you offer custom designs?</h3>
          <p className="text-muted-foreground">Yes, we specialize in custom bridal wear. Please schedule a consultation to discuss your dream dress.</p>
        </div>
        <div>
          <h3 className="font-headline text-xl font-semibold text-foreground mb-2">What is the average turnaround time?</h3>
          <p className="text-muted-foreground">For custom orders, the average turnaround time is 8-12 weeks. Ready-to-wear pieces may be available sooner.</p>
        </div>
        <div>
          <h3 className="font-headline text-xl font-semibold text-foreground mb-2">Do you ship internationally?</h3>
          <p className="text-muted-foreground">Yes, we offer international shipping. Please contact us for rates and details.</p>
        </div>
      </div>
    </div>
  </section>
);


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <FeaturedDresses />
      {/* <AiRecommenderCta /> // Removed AI CTA */}
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
