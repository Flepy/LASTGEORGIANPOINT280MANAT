import { useTranslation } from '@/hooks/useTranslation';
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

export default function Gallery() {
  const { t } = useTranslation();

  const galleryImages = [
    {
      src: img1,
      alt: "Georgian Point restaurant dining experience with traditional Khachapuri and newspaper"
    },
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
      src: img5,
      alt: "Georgian Point bar with 'Best Cocktail' neon sign"
    },
    {
      src: img6,
      alt: "Elegant bar area with hanging wine glasses and red velvet seating"
    },
    {
      src: img7,
      alt: "Georgian Point restaurant newspaper featuring local cuisine"
    },
    {
      src: img8,
      alt: "Elegant black and white dining room setup with crystal glasses"
    },
    {
      src: img9,
      alt: "Gourmet Georgian dish presentation with wine pairing"
    },
    {
      src: img10,
      alt: "Georgian Point restaurant interior with illuminated G logo and green plant wall"
    },
    {
      src: img11,
      alt: "Signature Georgian dish with cheese and cherry tomatoes on blue plate"
    },
    {
      src: img12,
      alt: "Traditional Georgian khinkali dumplings served with spicy sauce"
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
      </section>
    </div>
  );
}
