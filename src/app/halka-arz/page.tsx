
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TrendingUp,
  Landmark,
  ShieldCheck,
  Zap,
  PiggyBank,
  Users,
  Award,
  BookUser,
  GitMerge,
  FileSignature,
  Presentation,
  CheckCircle,
  CircleDollarSign,
  GanttChartSquare,
} from 'lucide-react';

const advantages = [
    { title: "Geri Ödemesiz Finansman İmkanı", description: "Şirket ve ortakları için geri ödemesiz finansman sağlama.", icon: PiggyBank },
    { title: "Kurumsallaşma ve Büyüme", description: "Sürdürülebilir büyüme için gerekli altyapıyı oluşturma.", icon: Landmark },
    { title: "Fon Toplama ve Hızlı Büyüme", description: "Şirketin büyümesi için fon toplama ve hızlı büyüme fırsatları.", icon: Zap },
    { title: "Sağlıklı Finansal Yapı", description: "Şirket borcunu azaltarak sağlıklı bir finansal yapı oluşturma.", icon: ShieldCheck },
    { title: "Şahsi Kefaletin Kalkması", description: "Ortakların şahsi kefalet yükümlülüğünün ortadan kalkması.", icon: Users },
    { title: "Yatırımları Nakde Çevirme", description: "Ortakların yatırımlarını kısmen nakde çevirme fırsatı.", icon: CircleDollarSign },
    { title: "Tanınırlık ve Prestij", description: "Yurt içinde ve yurt dışında yaygın tanınırlık ve prestij kazanma fırsatı.", icon: Award },
    { title: "Artan Kredibilite", description: "Şirketin kredibilitesinin artması.", icon: BookUser },
    { title: "Likidite ve İkincil Halka Arz", description: "Likidite ve ikincil halka arz imkanı sağlayarak uzun ömürlülük.", icon: GitMerge },
];

const processSteps = [
    { title: "Çalışma Grubunun Kurulması", description: "Halka arz sürecini yönetecek iç çalışma grubunun oluşturulması.", icon: Users },
    { title: "Finansal Tablolar ve Denetim", description: "Finansal tabloların hazırlanması ve bağımsız denetim sürecinin başlatılması.", icon: FileSignature },
    { title: "Ana Sözleşme ve Genel Kurul Kararı", description: "Ana sözleşmenin tadili ve genel kurul kararlarının alınması.", icon: GanttChartSquare },
    { title: "Değerleme ve Fiyatlandırma", description: "Şirket değerinin belirlenmesi ve fiyatlandırma çalışmaları.", icon: CircleDollarSign },
    { title: "Borsa Başvurusu ve Belgeler", description: "Listelenecek borsaya başvuru için gerekli belgelerin hazırlanması.", icon: Presentation },
    { title: "Payların Kayda Alınması", description: "Payların Kurul'a kaydettirilmesi, izahname ve sirkülerin ilanı.", icon: CheckCircle },
    { title: "Halka Arz ve İşlem Başlangıcı", description: "Payların halka arz edilmesi ve işlem görmeye başlaması.", icon: TrendingUp },
];

export default function IpoPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpcG8lMjBzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3NjU3MTE4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Halka Arz Danışmanlığı"
          fill
          className="object-cover"
          priority
          data-ai-hint="stock market IPO"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Halka Arz Danışmanlığı
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Şirketinize büyüme sermayesi sağlamak veya hisselerinizi nakde çevirmek için halka arz stratejileri geliştiriyor ve uyguluyoruz. Yurt içinde ve yurt dışında, özellikle Londra, Frankfurt, Viyana ve Amsterdam gibi borsalarda halka arz konusunda uzmanlaşmış aracı kurumlarla stratejik ortaklıklar yoluyla işbirliği yapıyoruz.
            </p>

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Halka Arzın Avantajları</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/20 text-accent">
                      <advantage.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{advantage.title}</h3>
                      <p className="text-muted-foreground mt-1">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Özetle Halka Arz Süreci</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                {processSteps.map((step) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                       <p className="text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mt-12 text-center">
              ECB Global olarak, şirketinizin halka arz sürecinde adım adım yanınızdayız. Detaylı bilgi ve danışmanlık için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
