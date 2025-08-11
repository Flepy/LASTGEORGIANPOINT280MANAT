import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import logoImage from '@assets/Vector_1754933981235.png';

export default function Header() {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/menu', label: t('menu') },
    { path: '/gallery', label: t('gallery') },
    { path: '/contact', label: t('contact') },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-beige bg-opacity-95 backdrop-blur-sm border-b border-navy-blue border-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <img src={logoImage} alt="Georgian Point Logo" className="w-8 h-8 mr-3" />
            <h1 className="font-serif text-2xl font-bold text-brick-red">Georgian Point</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${location === item.path ? 'text-brick-red' : ''}`}
                data-testid={`nav-link-${item.path.slice(1) || 'home'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Switcher */}
          <LanguageSwitcher className="hidden lg:flex" />

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-navy-blue"
            onClick={toggleMobileMenu}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="p-6">
          <nav className="flex flex-col space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-navy-blue text-xl hover:text-brick-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${item.path.slice(1) || 'home'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-navy-blue border-opacity-30">
            <LanguageSwitcher mobile className="space-y-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
