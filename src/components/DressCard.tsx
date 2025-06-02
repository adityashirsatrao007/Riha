import Image from 'next/image';
import Link from 'next/link';
import type { Dress } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface DressCardProps {
  dress: Dress;
}

export function DressCard({ dress }: DressCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/dresses/${dress.slug}`} aria-label={`View details for ${dress.name}`}>
          <div className="aspect-[3/4] relative w-full">
            <Image
              src={dress.images[0]}
              alt={dress.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={dress.aiHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-xl mb-1 truncate" title={dress.name}>
          <Link href={`/dresses/${dress.slug}`} className="hover:text-primary transition-colors">
            {dress.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-10 overflow-hidden text-ellipsis">
          {dress.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors">
          <Link href={`/dresses/${dress.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
