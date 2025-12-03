
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Target,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

const advantages = [
    'Diversifiye portföylerle riskleri azaltma ve getiri potansiyelini artırma imkanı.',
    'Profesyonel yönetim ve uzman ekibin sağladığı avantajlarla gayrimenkul yatırımlarınızı optimize etme şansı.',
    'Likidite imkanı ve düzenli gelir elde etme potansiyeli.',
    'Gayrimenkul sektöründeki gelişmelerden en iyi şekilde faydalanma ve yatırım stratejilerini güncelleme şansı.',
];

const whyUs = [
    {
        title: 'Deneyimli ve Uzman Ekip',
        description: 'Gayrimenkul sektöründe deneyimli ve uzman bir ekiple çalışarak yatırımlarınızı güvenle yönetebilirsiniz.',
        icon: Users,
    },
    {
        title: 'İhtiyaçlarınıza Özel Çözümler',
        description: 'İhtiyaçlarınıza özel çözümler sunarak portföyünüzü optimize etmenize yardımcı oluyoruz.',
        icon: Target,
    },
    {
        title: 'Profesyonel Risk Yönetimi',
        description: 'Risk yönetimi ve performans takibi konularında profesyonel destek sağlıyoruz.',
        icon: ShieldCheck,
    },
    {
        title: 'Müşteri Memnuniyeti Odaklılık',
        description: 'Müşteri memnuniyeti odaklı çalışma prensiplerimizle işletmenizin büyümesine katkı sağlıyoruz.',
        icon: CheckCircle,
    }
]

export default function RealEstateInvestmentFundPage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZnVuZHxlbnwwfHx8fDE3NjU0ODc2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gayrimenkul Yatırım Fonu"
          fill
          className="object-cover"
          priority
          data-ai-hint="real estate fund"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Gayrimenkul Yatırım Fonu
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-6 text-center">
              ECB Danışmanlık olarak, gayrimenkul sektöründe yatırım fonlarına yönelik danışmanlık hizmetleri sunuyoruz. İşletmenizin gayrimenkul yatırımlarını yönetmek ve büyütmek için uzman ekibimizle yanınızdayız.
            </p>
            <p className="text-lg text-foreground mb-12 text-center">
              Gayrimenkul Yatırım Fonu Danışmanlığı ise daha geniş bir yatırım yelpazesine hitap eder ve yatırımcılara çeşitli ve likit gayrimenkul varlıklarına yatırım yapma imkanı sunar. Bu danışmanlık, yatırımcıların portföylerini çeşitlendirme ve riskleri dağıtma stratejileri üzerine odaklanır, böylece yatırımcılar farklı gayrimenkul sektörleri ve projeleri arasında seçim yapabilir ve yatırımlarını daha geniş bir perspektifle yönetebilirler.
            </p>

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Gayrimenkul Yatırım Fonu Avantajları</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                    {advantages.map((advantage) => (
                        <li key={advantage} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{advantage}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Neden ECB Danışmanlık?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-1">
                 {whyUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

             <div className="text-center">
                <p className="text-lg text-foreground mb-4">Gayrimenkul yatırım fonları konusunda danışmanlık hizmetlerimizle ilgili daha fazla bilgi almak ve işbirliği için ECB Danışmanlık olarak sizinle görüşmekten memnuniyet duyarız.</p>
                <p className="text-lg text-foreground">Bizimle iletişime geçin ve gayrimenkul yatırımlarınızı profesyonelce yönetmenin avantajlarını keşfedin.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
