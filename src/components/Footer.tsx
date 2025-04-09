import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const TikTokIcon = () => (
  <svg
    width="20"
    height="20"
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
    <footer className="border-t border-greyline bg-surface z-50 shadow-sm transition-colors duration-200 dark:bg-dark dark:border-online" >
      <div className="container py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-gray-700 dark:text-gray-400">
            © {new Date().getFullYear()} Buildflip
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/buildflip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://tiktok.com/@buildflip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://twitter.com/buildflip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacidad"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Privacidad
            </a>
            <a
              href="/terminos"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};