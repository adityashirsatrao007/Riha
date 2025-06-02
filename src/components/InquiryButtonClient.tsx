
"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

interface InquiryButtonClientProps {
  dressName: string;
}

export function InquiryButtonClient({ dressName }: InquiryButtonClientProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking auth status (e.g., from localStorage)
    if (typeof window !== 'undefined') {
      const mockToken = localStorage.getItem('mockAuthToken');
      if (mockToken === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handleInquiry = useCallback(() => {
    const contactUrl = `/contact?dress=${encodeURIComponent(dressName)}`;
    if (isAuthenticated) {
      router.push(contactUrl);
    } else {
      // If not authenticated, redirect to signup, then to contact page
      const signupRedirectUrl = `/signup?redirect=${encodeURIComponent(contactUrl)}`;
      router.push(signupRedirectUrl);
    }
  }, [isAuthenticated, router, dressName]);

  return (
    <Button 
      onClick={handleInquiry} 
      size="lg" 
      className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground group"
    >
      <Mail className="mr-2 h-5 w-5" /> Inquire About This Dress
    </Button>
  );
}
