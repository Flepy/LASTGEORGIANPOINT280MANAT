import { useState, useEffect } from 'react';
import { translations, type Language, type TranslationKey } from '@/lib/translations';
import { getStoredLanguage, setStoredLanguage, DEFAULT_LANGUAGE } from '@/lib/i18n';

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    setCurrentLanguage(getStoredLanguage());
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    setStoredLanguage(language);
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
