import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hola,%20me%20interesa%20saber%20más%20sobre%20BuildFlip', '_blank');
  };

  return (
    <div className={`fixed bottom-4 left-8 z-50 ${isVisible ? 'block' : 'hidden'}`}>
      {isOpen ? (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold dark:text-gray-200">¿Tenés una propiedad para renovar?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Charlemos sobre cómo podemos ayudarte a maximizar el valor de tu propiedad.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-whatsapp text-[#111B21] w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-whatsapp/90 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={20} />
            Chatear por WhatsApp
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-whatsapp text-[#111B21] p-4 rounded-full shadow-lg hover:bg-whatsapp/90 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};