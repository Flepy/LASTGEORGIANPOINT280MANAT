import { useTranslation } from '@/hooks/useTranslation';

export default function Gallery() {
  const { t } = useTranslation();

  const galleryImages = [
    {
      src: "/attached_assets/IMG_0305_1754913322578.jpg",
      alt: "Georgian Point restaurant dining experience with traditional Khachapuri and newspaper"
    },
    {
      src: "/attached_assets/IMG_0330_1754913322578.jpg",
      alt: "Fine dining with Georgian wine and playing cards"
    },
    {
      src: "/attached_assets/IMG_0300_1754913322578.jpg",
      alt: "Signature strawberry cocktail at Georgian Point"
    },
    {
      src: "/attached_assets/IMG_0416_1754913322578.jpg",
      alt: "Premium wine collection and cellar"
    },
    {
      src: "/attached_assets/IMG_0400_1754913322578.jpg",
      alt: "Georgian Point bar with 'Best Cocktail' neon sign"
    },
    {
      src: "/attached_assets/IMG_0389_1754913322578.jpg",
      alt: "Elegant bar area with hanging wine glasses and red velvet seating"
    },
    {
      src: "/attached_assets/IMG_0371_1754913430302.jpg",
      alt: "Georgian Point restaurant newspaper featuring local cuisine"
    },
    {
      src: "/attached_assets/IMG_0407_1754913430302.jpg",
      alt: "Elegant black and white dining room setup with crystal glasses"
    },
    {
      src: "/attached_assets/IMG_0320_1754913430302.jpg",
      alt: "Gourmet Georgian dish presentation with wine pairing"
    }
  ];

  return (
    <div className="page-transition active">
      <section className="min-h-screen pt-28 pb-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-golden mb-6">
              {t('galleryTitle')}
            </h1>
            <p className="text-xl text-gray-300">
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
