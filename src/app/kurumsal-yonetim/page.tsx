
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase,
  Scale,
  Activity,
  Award,
} from 'lucide-react';

const services = [
  {
    title: 'Kurumsal Yönetim Danışmanlığı',
    description: 'Stratejik planlama, risk yönetimi, iç kontrol sistemleri gibi kurumsal yönetim süreçlerinde danışmanlık hizmetleri.',
    icon: Briefcase,
  },
  {
    title: 'Kurumsal Yönetişim İlkeleri',
    description: 'Ulusal ve uluslararası kurumsal yönetişim ilkelerine uyum sağlama ve en iyi uygulamaların belirlenmesi.',
    icon: Scale,
  },
  {
    title: 'Yönetişim Değerlendirme ve Geliştirme',
    description: 'Mevcut yönetişim yapılarının değerlendirilmesi ve iyileştirme önerileri.',
    icon: Activity,
  },
  {
    title: 'Kurumsal Yönetim Eğitimleri',
    description: 'Çalışanlarınıza ve yöneticilerinize yönelik kurumsal yönetim eğitimleri ve seminerleri.',
    icon: Award,
  },
];

export default function CorporateGovernancePage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlfGVufDB8fHx8MTc2NTM4OTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kurumsal Yönetim"
          fill
          className="object-cover"
          priority
          data-ai-hint="corporate governance"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            ECB Global Kurumsal Yönetim Danışmanlığı
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              ECB Global olarak, şirketlerin kurumsal yönetim alanındaki ihtiyaçlarına çözüm odaklı danışmanlık hizmetleri sunuyoruz. İşletmenizin yönetişimini güçlendirerek sürdürülebilir başarıya ulaşmanızı sağlıyoruz.
            </p>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Hizmetlerimiz</CardTitle>
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

          </div>
        </div>
      </section>
    </>
  );
}
