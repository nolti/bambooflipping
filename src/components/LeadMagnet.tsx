import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Download } from 'lucide-react';

export const LeadMagnet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Mailchimp/Airtable
    setIsSubmitted(true);
  };

  return (
    <div className={`fixed bottom-4 right-8 z-50 ${isVisible ? 'block' : 'hidden'}`}>
      {isOpen ? (
        <motion.div
          className="bg-[#F5F5F5] dark:bg-[#2B2B2B] rounded-xl shadow-lg max-w-sm"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#2B2B2B] dark:text-[#F5F5F5]">
                Descargá nuestra guía: 5 Errores al Reciclar una Casa y Cómo Evitarlos
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5555] bg-white dark:bg-[#1E1E1E] text-[#2B2B2B] dark:text-[#F5F5F5] placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#ff5555] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff5555]/90 transition-all duration-300 hover:scale-105 w-full flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Descargar PDF
                </button>
              </form>
            ) : (
              <div className="text-center text-[#2B2B2B] dark:text-[#F5F5F5]">
                ¡Gracias! Revisa tu email para descargar la guía.
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ff5555] text-white p-4 rounded-full shadow-lg hover:bg-[#ff5555]/90 transition-all duration-300 hover:scale-110"
        >
          <FileText size={24} />
        </button>
      )}
    </div>
  );
};