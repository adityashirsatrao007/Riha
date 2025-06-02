
import { SignUpForm } from '@/components/SignUpForm';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md space-y-8">
       <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-headline text-3xl font-bold text-primary">Riha Boutique</span>
        </Link>
      <SignUpForm />
    </div>
  );
}
