import { AiDressRecommenderForm } from '@/components/AiDressRecommenderForm';

export default function AiRecommenderPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          AI Wedding Dress Stylist
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Let our AI help you discover the perfect Indian wedding dress.
        </p>
      </header>
      <AiDressRecommenderForm />
    </div>
  );
}
