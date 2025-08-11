import { useTranslation } from '@/hooks/useTranslation';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n';

interface LanguageSwitcherProps {
  className?: string;
  mobile?: boolean;
}

export default function LanguageSwitcher({ className = "", mobile = false }: LanguageSwitcherProps) {
  const { currentLanguage, changeLanguage } = useTranslation();

  if (mobile) {
    return (
      <div className={`bg-warm-beige p-4 rounded-lg border border-olive-green border-opacity-30 ${className}`}>
        <div className="flex items-center mb-3">
          <i className="fas fa-globe text-mustard-gold mr-2"></i>
          <span className="text-sm font-semibold text-navy-blue">Язык / Language</span>
        </div>
        <div className="flex flex-col space-y-2">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lang);
              }}
              className={`text-left px-3 py-2 rounded-md transition-all duration-200 ${
                currentLanguage === lang 
                  ? 'bg-brick-red text-white font-semibold' 
                  : 'bg-cream-beige text-navy-blue hover:bg-mustard-gold hover:text-white'
              }`}
              data-testid={`language-btn-${lang}-mobile`}
            >
              {LANGUAGE_NAMES[lang]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-warm-beige px-4 py-2 rounded-lg border border-olive-green border-opacity-30 ${className}`}>
      <div className="flex items-center space-x-3">
        <i className="fas fa-globe text-mustard-gold text-sm"></i>
        <div className="flex items-center space-x-2">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lang);
              }}
              className={`px-2 py-1 rounded text-sm transition-all duration-200 ${
                currentLanguage === lang 
                  ? 'bg-brick-red text-white font-semibold' 
                  : 'bg-cream-beige text-navy-blue hover:bg-mustard-gold hover:text-white'
              }`}
              data-testid={`language-btn-${lang}`}
            >
              {LANGUAGE_NAMES[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
