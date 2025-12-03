import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HighlightsSection() {
  // We'll use the service images for the highlights section, ensuring we have one for each service.
  const highlightImages = PlaceHolderImages.filter(img => img.id.startsWith('service-')).slice(0, 4);

  return (
    <section id="highlights" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Hizmetlerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground">Görsel bir bakışla sunduğumuz temel hizmet alanları.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlightImages.map((image) => (
            <Link key={image.id} href="#services" className="block relative aspect-video overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/40" />
               <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-semibold">{image.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
