import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brick-red py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <i className="fas fa-utensils text-dark-bg text-2xl mr-3"></i>
              <h3 className="font-serif text-2xl font-bold text-dark-bg">Georgian Point</h3>
            </div>
            <p className="text-dark-bg opacity-80 mb-4">
              {t('footerDescription')}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.facebook.com/Georgian.Point.Restaurant/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-bg hover:opacity-70 transition-opacity"
                data-testid="facebook-link"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/georgian_point_restaurant/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-bg hover:opacity-70 transition-opacity"
                data-testid="instagram-link"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a 
                href="#" 
                className="text-dark-bg hover:opacity-70 transition-opacity"
                data-testid="tripadvisor-link"
              >
                <i className="fab fa-tripadvisor text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-serif text-xl font-bold text-dark-bg mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2 text-dark-bg opacity-80">
              <li>
                <Link 
                  href="/menu" 
                  className="hover:opacity-70 transition-opacity"
                  data-testid="footer-menu-link"
                >
                  {t('menu')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="hover:opacity-70 transition-opacity"
                  data-testid="footer-gallery-link"
                >
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:opacity-70 transition-opacity"
                  data-testid="footer-contact-link"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-xl font-bold text-dark-bg mb-4">
              {t('hoursAndLocation')}
            </h4>
            <div className="text-dark-bg opacity-80 space-y-2">
              <p>Landau 14, Baku, Azerbaijan</p>
              <p>{t('dailyHours')}</p>
              <p>+994 51 700 70 75</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-bg border-opacity-30 mt-8 pt-8 text-center">
          <p className="text-dark-bg opacity-70">
            {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
