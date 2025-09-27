import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const TikTokIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-greyline bg-surface z-50 shadow-sm transition-colors duration-200 dark:bg-dark dark:border-online">
      <div className="container py-4">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base">

          {/* Privacy and Terms Group - Left */}
          <div className="flex flex-row items-center gap-4 justify-center sm:justify-start">
              <a href="/privacidad"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors whitespace-nowrap">
                Privacidad
              </a>
              <span className="text-gray-400 dark:text-gray-600">|</span>
              <a href="/terminos"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors whitespace-nowrap">
                Términos
              </a>
          </div>
          
          {/* Social Media Group - Center */}
          <div className="flex justify-center gap-3 sm:gap-4 order-last sm:order-none">
            <a 
              href="https://www.instagram.com/bambooflipping/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightsocial hover:text-lightsocialhover dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Instagram size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.instagram.com/bambooflipping/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightsocial hover:text-lightsocialhover dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <div className="w-[18px] h-[18px] sm:w-5 sm:h-5">
                <TikTokIcon size={18} className="sm:w-5 sm:h-5"/>
              </div>
            </a>
            <a
              href="https://www.instagram.com/bambooflipping/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightsocial hover:text-lightsocialhover dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Copyright Group - Right */}
          <div className="text-center sm:text-right text-gray-700 dark:text-gray-400 whitespace-nowrap">
            © {new Date().getFullYear()} Bambooflipping
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};