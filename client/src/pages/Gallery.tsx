import { useTranslation } from '@/hooks/useTranslation';
import { Play } from 'lucide-react';
import img1 from '@assets/IMG_0305_1754913322578.jpg';
import img2 from '@assets/IMG_0330_1754913322578.jpg';
import img3 from '@assets/IMG_0300_1754913322578.jpg';
import img4 from '@assets/IMG_0416_1754913322578.jpg';
import img5 from '@assets/IMG_0400_1754913322578.jpg';
import img6 from '@assets/IMG_0389_1754913322578.jpg';
import img7 from '@assets/IMG_0371_1754913430302.jpg';
import img8 from '@assets/IMG_0407_1754913430302.jpg';
import img9 from '@assets/IMG_0320_1754913430302.jpg';
import img10 from '@assets/IMG_0401_1754943143988.jpg';
import img11 from '@assets/IMG_0349_1754943145028.jpg';
import img12 from '@assets/IMG_0299_1754943145952.jpg';
import img13 from '@assets/IMG_0357_1754944335424.jpg';
import img14 from '@assets/IMG_0365_1754944336295.jpg';
import img15 from '@assets/IMG_0313_1754944337095.jpg';

// YouTube Video Component
function YouTubeVideo({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        data-testid="gallery-video"
      ></iframe>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Play className="w-16 h-16 text-white" />
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useTranslation();

  const galleryImages = [
    // Фотографии еды - в начале
    {
      src: img12,
      alt: "Traditional Georgian khinkali dumplings served with spicy sauce"
    },
    {
      src: img11,
      alt: "Signature Georgian dish with cheese and cherry tomatoes on blue plate"
    },
    {
      src: img15,
      alt: "Georgian cheese khachapuri with mushrooms on wooden plate"
    },
    {
      src: img14,
      alt: "Fresh Georgian salad with herbs being seasoned"
    },
    {
      src: img13,
      alt: "Georgian dining experience with traditional food and wine"
    },
    {
      src: img9,
      alt: "Gourmet Georgian dish presentation with wine pairing"
    },
    // Интерьер и атмосфера
    {
      src: img10,
      alt: "Georgian Point restaurant interior with illuminated G logo and green plant wall"
    },
    {
      src: img1,
      alt: "Georgian Point restaurant dining experience with traditional Khachapuri and newspaper"
    },
    {
      src: img5,
      alt: "Georgian Point bar with 'Best Cocktail' neon sign"
    },
    {
      src: img6,
      alt: "Elegant bar area with hanging wine glasses and red velvet seating"
    },
    {
      src: img8,
      alt: "Elegant black and white dining room setup with crystal glasses"
    },
    // Напитки и дополнительные фото
    {
      src: img2,
      alt: "Fine dining with Georgian wine and playing cards"
    },
    {
      src: img3,
      alt: "Signature strawberry cocktail at Georgian Point"
    },
    {
      src: img4,
      alt: "Premium wine collection and cellar"
    },
    {
      src: img7,
      alt: "Georgian Point restaurant newspaper featuring local cuisine"
    }
  ];

  return (
    <div className="page-transition active">
      <section className="min-h-screen pt-28 pb-20 bg-background-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brick-red mb-6">
              {t('galleryTitle')}
            </h1>
            <p className="text-xl text-navy-blue">
              {t('gallerySubtitle')}
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brick-red mb-8 text-center">
              {t('videoSection')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <YouTubeVideo 
                videoId="Uqj3g12zeow" 
                title="Georgian Point Restaurant Video" 
              />
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brick-red mb-8 text-center">
              {t('photoGallery')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="gallery-item"
                  data-testid={`gallery-image-${index}`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
