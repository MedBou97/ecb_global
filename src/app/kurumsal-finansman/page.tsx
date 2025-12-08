
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart2,
  Globe,
  TrendingUp,
  Handshake,
  FileText,
  Building,
  CheckCircle,
  Users,
  GitBranch,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Finansal Analiz ve Stratejiler',
    description: 'Bilanço, Gelir Tablosu ve Nakit Akım Tablolarının detaylı analizleri ile şirketlerin finansal sağlığını değerlendiriyor ve stratejik ihtiyaçlarına yönelik çözüm önerileri sunuyoruz.',
    icon: BarChart2,
  },
  {
    title: 'Uluslararası Finansman',
    description: 'Avrupa, Amerika ve İslami finansman enstrümanlarından faydalanarak şirketlerin küresel finansal yapılarını güçlendirme ve uluslararası projelerini yönetme konularında danışmanlık sağlıyoruz.',
    icon: Globe,
  },
  {
    title: 'Nakit Akış Yönetimi ve Risk Analizi',
    description: 'Şirketlerin nakit akışlarını etkin bir şekilde yönetmeleri için risk analizi yaparak en uygun finansman çözümlerini belirliyoruz. Kur, vade ve faiz risklerini de hesaba katarak finansal risk yönetimi stratejileri geliştiriyoruz.',
    icon: TrendingUp,
  },
  {
    title: 'Finansal Planlama ve İhtiyaç Analizi',
    description: 'İşletmelerin gelecek dönem finansal planlarını oluşturarak ihtiyaçlarını belirliyor ve uygun finansman kaynaklarına erişim sağlıyoruz. Şirketlerin kısa ve uzun vadeli hedeflerine uygun finansal projeksiyonlar hazırlıyoruz.',
    icon: FileText,
  },
  {
    title: 'İhracat ve Uluslararası Ticaret Finansmanı',
    description: 'CMA, B/L, Exim kredileri gibi uluslararası finansman araçlarından faydalanarak şirketlerin ihracat ve uluslararası ticaret faaliyetlerini destekliyoruz.',
    icon: Building,
  },
  {
    title: 'Yeniden Yapılandırma ve M&A Danışmanlığı',
    description: 'Şirket birleşme ve satın alma süreçlerinde, halka arz (IPO), tahvil ihracı gibi finansal operasyonlarda profesyonel danışmanlık sağlıyoruz. Ayrıca şirketlerin yeniden yapılandırma süreçlerinde finansal modelleme ve stratejik planlama desteği sunuyoruz.',
    icon: Handshake,
  },
  {
    title: 'Finansal Raporlama ve Denetim',
    description: 'Bağımsız denetim raporlarının hazırlanması, finansal raporların düzenlenmesi ve güvenilir bir şekilde sunulması konularında şirketlere destek sağlıyoruz.',
    icon: FileText,
  },
  {
    title: 'Alternatif Finansman Yöntemleri ve Sermaye Piyasaları',
    description: 'Sendikasyon, kredi maliyetlerinin düşürülmesi, refinansman kredisi gibi alternatif finansman yöntemleri ile şirketlerin sermaye piyasalarına erişimini kolaylaştırıyoruz.',
    icon: GitBranch,
  }
];

const whyUs = [
    {
        title: 'Profesyonel ve Deneyimli Ekip',
        icon: Users,
    },
    {
        title: 'Geniş Finansal Ağ ve İlişkiler',
        icon: Globe,
    },
    {
        title: 'Müşteri Odaklı Çözümler',
        icon: CheckCircle,
    },
    {
        title: 'Güvenilirlik ve Şeffaflık',
        icon: ShieldCheck,
    }
]


export default function CorporateFinancePage() {
  return (
    <>
      <section className="relative h-80 w-full">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBmaW5hbmNlfGVufDB8fHx8MTc2NTY5ODQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kurumsal Finans"
          fill
          className="object-cover"
          priority
          data-ai-hint="corporate finance planning"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
            Kurumsal Finans
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            Kurumsal Finans ve Danışmanlık Hizmetleri
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-12 text-center">
              Şirketlerin finansal performanslarını güçlendirmek, nakit akışlarını optimize etmek ve en uygun finansal enstrümanları kullanarak büyümelerini desteklemek için uzman danışmanlık hizmetleri sunuyoruz.
            </p>

            <Card className="shadow-lg mb-12">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Kurumsal Finans Alanındaki Hizmetlerimiz</CardTitle>
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

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Neden Biz?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-2">
                 {whyUs.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                ))}
              </CardContent>
            </Card>

             <div className="text-center mt-12">
                <p className="text-lg text-foreground">Şirketinizin finansal hedeflerini gerçekleştirmek için doğru çözümleri sunmak için buradayız. İletişime geçmekten çekinmeyin!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
