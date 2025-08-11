import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-soft-cream bg-opacity-95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <i className="fas fa-utensils text-golden text-2xl mr-3"></i>
            <h1 className="font-serif text-2xl font-bold text-golden">Georgian Point</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${location === item.path ? 'text-golden' : ''}`}
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
            className="lg:hidden text-cozy-brown"
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
                className="text-cozy-brown text-xl hover:text-golden transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${item.path.slice(1) || 'home'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <LanguageSwitcher mobile className="space-y-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
