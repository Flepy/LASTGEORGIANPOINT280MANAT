import { useState, useEffect } from 'react';
import { translations, type Language, type TranslationKey } from '@/lib/translations';
import { getStoredLanguage, setStoredLanguage, DEFAULT_LANGUAGE } from '@/lib/i18n';

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = getStoredLanguage();
    setCurrentLanguage(stored);
    
    const handleLanguageChange = () => {
      setCurrentLanguage(getStoredLanguage());
    };
    
    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  const changeLanguage = (language: Language) => {
    setStoredLanguage(language);
    setCurrentLanguage(language);
    // Force immediate re-render
    window.dispatchEvent(new Event('languagechange'));
  };

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return {
    currentLanguage,
    changeLanguage,
    t
  };
}
