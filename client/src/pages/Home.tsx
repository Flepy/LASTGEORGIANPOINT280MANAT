import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  const makeReservation = () => {
    window.open('tel:+994517007075', '_self');
  };

  return (
    <div className="page-transition active">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-golden mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-golden mr-2"></i>
              <span>Landau 14, Baku, Azerbaijan</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-golden mr-2"></i>
              <span>{t('dailyHours')}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-golden mr-2"></i>
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
              <div className="w-20 h-20 mx-auto mb-6 bg-golden rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-dark-bg text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl text-golden mb-4">
                {t('location')}
              </h3>
              <p className="text-gray-300">Landau 14, Baku, Azerbaijan</p>
            </div>

            <div className="text-center p-8" data-testid="about-card">
              <div className="w-20 h-20 mx-auto mb-6 bg-golden rounded-full flex items-center justify-center">
                <i className="fas fa-clock text-dark-bg text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl text-golden mb-4">
                {t('aboutUs')}
              </h3>
              <p className="text-gray-300">{t('dailyHours')}</p>
            </div>

            <div className="text-center p-8" data-testid="contact-card">
              <div className="w-20 h-20 mx-auto mb-6 bg-golden rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-dark-bg text-2xl"></i>
              </div>
              <h3 className="font-serif text-2xl text-golden mb-4">
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
