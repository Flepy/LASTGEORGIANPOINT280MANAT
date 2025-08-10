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
      <div className={`flex flex-col space-y-4 ${className}`}>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`text-left text-white hover:text-golden transition-colors ${
              currentLanguage === lang ? 'text-golden' : ''
            }`}
            data-testid={`language-btn-${lang}-mobile`}
          >
            <i className="fas fa-globe mr-2"></i> {LANGUAGE_NAMES[lang]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`text-white hover:text-golden transition-colors ${
            currentLanguage === lang ? 'text-golden' : ''
          }`}
          data-testid={`language-btn-${lang}`}
        >
          {lang === 'en' && <i className="fas fa-globe mr-1"></i>}
          {LANGUAGE_NAMES[lang]}
        </button>
      ))}
    </div>
  );
}
