import Link from 'next/link';
import { Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-2">
              <Sparkles className="h-7 w-7" />
              <span className="font-headline text-2xl font-bold">Riha Boutique</span>
            </Link>
            <p className="text-sm text-center md:text-left">Exquisite Indian wedding dresses for your special day.</p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/dresses" className="hover:text-accent transition-colors">Browse Collection</Link></li>
              {/* <li><Link href="/ai-recommender" className="hover:text-accent transition-colors">AI Stylist</Link></li> // Removed AI Stylist Link */}
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/#faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-headline text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={24} /></Link>
              <Link href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={24} /></Link>
            </div>
             <p className="text-sm mt-4">&copy; {currentYear} Riha Boutique. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
