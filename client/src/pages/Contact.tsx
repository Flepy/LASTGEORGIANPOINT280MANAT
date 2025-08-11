import { useTranslation } from '@/hooks/useTranslation';

export default function Contact() {
  const { t } = useTranslation();

  const makeReservation = () => {
    window.open('tel:+994517007075', '_self');
  };

  return (
    <div className="page-transition active">
      <section className="min-h-screen pt-28 pb-20 bg-background-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brick-red mb-6">
              {t('visitUs')}
            </h1>
            <p className="text-xl text-navy-blue">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-cream-beige p-8 rounded-lg border border-olive-green border-opacity-30" data-testid="contact-info-card">
              <h2 className="font-serif text-3xl text-brick-red mb-8">
                {t('contactInformation')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start" data-testid="address-info">
                  <div className="w-12 h-12 bg-mustard-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-navy-blue font-semibold mb-1">
                      {t('address')}
                    </h3>
                    <p className="text-navy-blue">Landau 14, Baku, Azerbaijan</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="phone-info">
                  <div className="w-12 h-12 bg-mustard-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-navy-blue font-semibold mb-1">
                      {t('phone')}
                    </h3>
                    <p className="text-navy-blue">+994 51 700 70 75</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="hours-info">
                  <div className="w-12 h-12 bg-mustard-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-navy-blue font-semibold mb-1">
                      {t('hours')}
                    </h3>
                    <p className="text-navy-blue">{t('dailyHours')}</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="cuisine-info">
                  <div className="w-12 h-12 bg-mustard-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-utensils text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-navy-blue font-semibold mb-1">
                      {t('cuisine')}
                    </h3>
                    <p className="text-navy-blue">{t('authenticGeorgianCuisine')}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={makeReservation} 
                className="btn-primary w-full mt-8 py-4 rounded-lg font-semibold text-white"
                data-testid="reservation-btn"
              >
                <i className="fas fa-phone mr-2"></i>
                {t('callForReservation')}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-cream-beige p-8 rounded-lg border border-olive-green border-opacity-30" data-testid="location-card">
              <h2 className="font-serif text-3xl text-brick-red mb-8">
                {t('location')}
              </h2>

              <div className="text-center">
                <div className="w-24 h-24 bg-mustard-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-map-marker-alt text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl text-navy-blue font-semibold mb-2">
                  {t('findUsInBaku')}
                </h3>
                <p className="text-navy-blue mb-4">Landau 14, Baku, Azerbaijan</p>
                <p className="text-gray-600 text-sm">
                  {t('transportInfo')}
                </p>

                <div className="mt-8 p-6 bg-warm-beige rounded-lg" data-testid="getting-here-info">
                  <h4 className="text-brick-red font-semibold mb-3">
                    {t('gettingHere')}
                  </h4>
                  <p className="text-navy-blue text-sm">
                    {t('gettingHereInfo')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
