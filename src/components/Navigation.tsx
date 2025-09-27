import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isStrategyPage = location.pathname === '/estrategia';

  const menuItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#services' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Equipo', href: '#team' },
  ];

  return (
    <nav className="fixed w-full bg-lightheader border-t border-b border-greyline z-50 shadow-sm transition-colors duration-200 dark:bg-dark dark:border-online">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isStrategyPage && (
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-lightsocial hover:text-lightprimary dark:text-secondary dark:hover:text-primary transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Volver atrás</span>
              </button>
            )}
            <a href="#" className="flex items-center gap-3 text-xl font-bold text-lightprimary dark:text-primary">
              <img 
                src="/bamboo_flipping_logo.png"
                alt="Bambooflipping" 
                className="h-14 w-auto object-contain"
              />
              <span className="self-end pb-1">Bambooflipping</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors text-lightprimary hover:text-lightprimaryhover dark:text-secondary dark:hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact"
              className="bg-lightbutton text-lightbuttontext px-6 py-3 rounded-lg font-medium hover:bg-lightbutton/90
                        transition-colors duration-300 transform hover:scale-105 active:scale-100
                        dark:bg-primary dark:text-dark dark:hover:bg-primary/90">
              Contactanos
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-dracula-current transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-lightprimary hover:text-lightprimaryhover" />
              ) : (
                <Sun className="w-5 h-5 text-secondary hover:text-primary" />
              )}
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-cyanlight dark:hover:bg-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-lightprimary hover:text-lightprimaryhover" />
              ) : (
                <Sun className="w-5 h-5 text-secondary hover:text-onsecondary" />
              )}
            </button>
            <button
              className="text-lightprimary hover:text-lightprimaryhover dark:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-lightheader border-t border-greyline dark:bg-[#282a36] dark:border-draculacurrent">
            <nav className="container py-4">
              <ul className="flex flex-col">
                {menuItems.map((item, index) => (
                  <React.Fragment key={item.label}>
                    <li>
                      <a
                        href={item.href}
                        className="block text-lg font-medium text-lightprimary 
                                  hover:text-lightprimaryhover dark:text-secondary dark:hover:text-primary
                                  transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                    {index < menuItems.length - 1 && (
                      <li>
                        <hr className="border-t border-greyline dark:border-online w-full" />
                      </li>
                    )}
                  </React.Fragment>
                ))}
                <li>
                  <hr className="border-t border-greyline dark:border-online w-full" />
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block text-xl font-bold bg-lightbutton text-lightbuttontext px-6 py-3 rounded-lg text-center hover:bg-lightbutton/90 transition-colors duration-300 transform hover:scale-105 active:scale-100 dark:bg-primary dark:text-dark dark:hover:bg-primary/90 mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Contactanos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};