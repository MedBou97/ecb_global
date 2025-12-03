import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  'International credit determination and evaluation',
  'Analysis of foreign financing options and recommendations',
  'Preparation and follow-up of loan applications',
  'Negotiating loan agreements',
  'Managing risk management and reporting processes after loan disbursement',
  'Ensuring that financial performance complies with international standards',
];

export default function InternationalLoansPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmb3JlaWduJTIwZnVuZHN8ZW58MHx8fHwxNzY1MTEzODc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="International Credit Counseling"
          fill
          className="object-cover"
          priority
          data-ai-hint="international finance"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            International Credit Counseling
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-12 text-center">
              We offer expert consulting services to meet companies' international financing needs and support their international investments. Our international credit consulting provides guidance to our clients on selecting the right credit products in global financial markets, optimizing their financial structures, and improving their risk management.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Services Include:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {services.map((service) => (
                    <li key={service} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mt-12 text-center">
              Proper financing strategies and comprehensive risk management are crucial for achieving success in global business. Our expert team in international credit consulting is here to support you in these areas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
