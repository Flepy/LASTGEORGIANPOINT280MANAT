import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import heroBackground from '@assets/IMG_0428_1754913720161.jpg';

export default function Home() {
  const { t } = useTranslation();

  const makeReservation = () => {
    window.open('tel:+994517007075', '_self');
  };

  return (
    <div className="page-transition active">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(184, 84, 80, 0.1)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'contrast(1.15) brightness(1.1) saturate(1.2)'
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-brick-red mb-6 drop-shadow-lg">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 drop-shadow-md font-semibold">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            {t('heroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/menu">
              <button className="btn-primary" data-testid="explore-menu-btn">
                {t('exploreMenu')}
              </button>
            </Link>
            <button 
              onClick={makeReservation} 
              className="btn-secondary"
              data-testid="call-reserve-btn"
            >
              <i className="fas fa-phone mr-2"></i>
              {t('callToReserve')}
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-brick-red mr-2"></i>
              <span>Landau 14, Baku, Azerbaijan</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-brick-red mr-2"></i>
              <span>{t('dailyHours')}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-brick-red mr-2"></i>
              <span>+994 51 700 70 75</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8" data-testid="location-card">
              <div className="w-20 h-20 mx-auto mb-6 bg-brick-red rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl text-brick-red mb-4">
                {t('location')}
              </h3>
              <p className="text-gray-300">Landau 14, Baku, Azerbaijan</p>
            </div>

            <div className="text-center p-8" data-testid="about-card">
              <div className="w-20 h-20 mx-auto mb-6 bg-brick-red rounded-full flex items-center justify-center">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl text-brick-red mb-4">
                {t('aboutUs')}
              </h3>
              <p className="text-gray-300">{t('dailyHours')}</p>
            </div>

            <div className="text-center p-8" data-testid="contact-card">
              <div className="w-20 h-20 mx-auto mb-6 bg-brick-red rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl text-brick-red mb-4">
                {t('contactUs')}
              </h3>
              <p className="text-gray-300">+994 51 700 70 75</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
