'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMenuToggle?.();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="container-custom px-4 md:px-8 lg:px-16 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/mainLogo.png"
              alt="PYME Logo"
              width={80}
              height={50}
              className="w-20 h-12 md:w-14 md:h-14"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-purple-500 transition-colors">
              Platform
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-500 transition-colors">
              Departments
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 text-purple-500 font-semibold hover:text-purple-600 transition-colors border border-purple-300 rounded-full">
              Sign In
            </button>
            <button className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg transition-all duration-300">
              Request a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 border-t border-gray-100 pt-4">
            <a href="#" className="block text-gray-700 hover:text-purple-500 transition-colors py-2">
              Platform
            </a>
            <a href="#" className="block text-gray-700 hover:text-purple-500 transition-colors py-2">
              Departments
            </a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 text-purple-500 font-semibold hover:text-purple-600 transition-colors border border-purple-300 rounded-full">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
