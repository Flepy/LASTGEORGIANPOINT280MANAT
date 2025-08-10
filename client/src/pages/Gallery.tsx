import { useTranslation } from '@/hooks/useTranslation';

export default function Gallery() {
  const { t } = useTranslation();

  const galleryImages = [
    {
      src: "https://pixabay.com/get/g1388cc64156e389295d7e18cb3f86ba45159b4c10180450372b29bdef73ee46fa183af0386e52e8552355b970a335bd6183514046b35e7a3db9be24110f9648a_1280.jpg",
      alt: "Traditional Georgian feast"
    },
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=400",
      alt: "Gourmet burger"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=400",
      alt: "Wine celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=400",
      alt: "Restaurant interior"
    },
    {
      src: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=400",
      alt: "Seafood paella"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=400",
      alt: "Chef plating food"
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
