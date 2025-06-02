import Image from 'next/image';
import Link from 'next/link';
import { dresses, type Dress } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Mail } from 'lucide-react';
import { notFound } from 'next/navigation';

interface DressDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return dresses.map((dress) => ({
    slug: dress.slug,
  }));
}

export default function DressDetailPage({ params }: DressDetailPageProps) {
  const dress = dresses.find((d) => d.slug === params.slug);

  if (!dress) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/dresses">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Collection
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src={dress.images[0]} // Main image
              alt={dress.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint={dress.aiHint}
            />
          </div>
          {dress.images.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {dress.images.slice(1, 4).map((imgSrc, index) => ( // Show up to 3 thumbnails
                <div key={index} className="relative aspect-square rounded overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={`${dress.name} - view ${index + 2}`}
                    fill
                    sizes="30vw"
                    className="object-cover"
                    data-ai-hint={dress.aiHint}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dress Details */}
        <div>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-3">{dress.name}</h1>
          <p className="text-2xl text-accent font-semibold mb-4">{dress.price}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{dress.category.style}</Badge>
            <Badge variant="secondary">{dress.category.color}</Badge>
            <Badge variant="secondary">{dress.category.fabric}</Badge>
          </div>

          <Separator className="my-6" />
          
          <h2 className="font-headline text-xl font-semibold text-foreground mb-2">Description</h2>
          <p className="text-foreground/80 mb-6 whitespace-pre-line">{dress.longDescription}</p>

          <h2 className="font-headline text-xl font-semibold text-foreground mb-2">Materials</h2>
          <ul className="list-disc list-inside text-foreground/80 mb-6">
            {dress.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
          
          <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground group">
            <Link href={`/contact?dress=${encodeURIComponent(dress.name)}`}>
              <Mail className="mr-2 h-5 w-5" /> Inquire About This Dress
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
