import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ClipboardCheck,
  FileText,
  MessageSquareQuote,
  ShieldCheck,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    title: 'Hermes Loan Assessment',
    description:
      "Assess your company's potential to utilize Hermes loans for international trade projects. Determine which projects qualify for this type of loan.",
    icon: ClipboardCheck,
  },
  {
    title: 'Application Preparation',
    description:
      'Preparation and management of the Hermes loan application process. Gathering the required documents, creating the application file, and monitoring the application process.',
    icon: FileText,
  },
  {
    title: 'Negotiation and Communication',
    description:
      'Negotiating Hermes loan agreements and ensuring communication between your company and financial institutions.',
    icon: MessageSquareQuote,
  },
  {
    title: 'Risk Management',
    description:
      'Managing financial and commercial risks that may arise from Hermes loans. Analyzing project and transaction risks and determining appropriate risk management strategies.',
    icon: ShieldCheck,
  },
  {
    title: 'International Legal and Financial Consulting',
    description:
      'Consulting services on international legal and financial matters related to Hermes loans. Legal review of loan agreements and the development of strategies to protect your company\'s interests.',
    icon: Briefcase,
  },
  {
    title: 'Reporting and Tracking',
    description:
      'Managing the reporting and tracking processes after the Hermes loan is disbursed. Monitoring the loan repayment plan and preparing the necessary reports.',
    icon: TrendingUp,
  },
];

export default function HermesLoansPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1561464363-39458c035a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBleHBvcnR8ZW58MHx8fHwxNzY1Mzg5NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hermes Loans"
          fill
          className="object-cover"
          priority
          data-ai-hint="german export"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Hermes Loans
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Hermes loans are a financing tool backed by the German government and used in international trade transactions. These loans typically represent financing provided by exporting companies to their buyers abroad.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Advisory Services for Hermes Loans</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {services.map((service) => (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/20 text-accent">
                      <service.icon className="h-6 w-6 " />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mt-12 text-center">
              These consulting services ensure financial success and reliability by ensuring your company makes the most of Hermes loans in its international trade projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
