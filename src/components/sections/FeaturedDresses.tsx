
import { DressCard } from '@/components/DressCard';
import { dresses, type Dress } from '@/lib/data';

export function FeaturedDresses() {
  const featured = dresses.filter((dress) => dress.featured).slice(0, 4); // Show up to 4 featured dresses

  if (featured.length === 0) {
    return null; // Don't render if no featured dresses
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((dress) => (
            <DressCard key={dress.id} dress={dress} />
          ))}
        </div>
      </div>
    </section>
  );
}
