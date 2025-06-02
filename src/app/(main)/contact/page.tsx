import { InquiryForm } from '@/components/InquiryForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <header className="mb-10 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          We'd love to hear from you! Visit our boutique or send us a message.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Our Boutique</h3>
                  <p className="text-muted-foreground">123 Bridal Lane, Fashion City, Mumbai, MH 400001, India</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <a href="tel:+912221234567" className="text-muted-foreground hover:text-accent transition-colors">+91 22 2123 4567</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a href="mailto:hello@rihaboutique.com" className="text-muted-foreground hover:text-accent transition-colors">hello@rihaboutique.com</a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-muted-foreground">Monday - Saturday: 11:00 AM - 8:00 PM</p>
              <p className="text-muted-foreground">Sunday: By Appointment Only</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <InquiryForm />
          </CardContent>
        </Card>
      </div>
       <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-64 md:h-96 w-full">
            {/* Replace with actual map embed or image of map */}
            <Image 
                src="https://placehold.co/1200x400.png" 
                alt="Map to Riha Boutique" 
                fill 
                className="object-cover"
                data-ai-hint="map location"
            />
          </div>
        </div>
    </div>
  );
}
