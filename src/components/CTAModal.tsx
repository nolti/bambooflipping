import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Rocket } from 'lucide-react';

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CTAModal: React.FC<CTAModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    propertyType: '',
    objective: '',
    email: '',
  });

  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError('Por favor ingresa un email válido');
      return;
    }
    setEmailError('');
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email') {
      setEmailError('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="relative w-full max-w-2xl bg-graylight rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-airbnb hover:text-draculared z-10"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-10">
              <h4 className="text-xl md:text-xl text-center font-bold mt-0 mb-0 text-textboxdark leading-tight">
                <span>💰 </span>
                ¡Vendé tu propiedad hasta un{' '}
                <span className="text-airbnb font-bold">40% más!</span>
              </h4>
              <div className="relative flex items-center justify-center my-0">
                <div className="flex-grow border-t border-greyline"></div>
                <span className="flex-shrink mx-4 text-s font-bold text-textboxdark/70">
                  O
                </span>
                <div className="flex-grow border-t border-greyline"></div>
              </div>
              <h4 className="text-xl md:text-xl text-center font-bold mt-0 mb-4 text-textboxdark leading-tight">
                <span>💵 </span>
                ¡Aumentá tus ingresos alquilando en{' '}
                <span className="text-airbnb font-bold">Airbnb!</span>
              </h4>

              <p className="text-textboxdark/90 mb-0 text-sm md:text-lg">
                Obtén <span className="text-airbnb font-bold">GRATIS</span> un
                plan de renovación personalizado que aumenta el valor de tu
                propiedad en hasta un <span className="font-bold">40%</span>
              </p>
              <p className="text-textboxdark/90 mb-6 text-sm md:text-lg">
                Utilizamos las estrategias validadas por los anfitriones{' '}
                <span className="font-bold">TOP 5%</span> del mundo.
              </p>

              <div className="bg-textboxdark rounded-xl p-6 mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold">♟️</span>
                  <span className="text-white">
                    Estrategias validadas con resultados medibles en +50
                    propiedades!
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold">💹</span>
                  <span className="text-white">
                    Aumenta tus ganancias en Airbnb con gestión profesional
                    especializada.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold">🛠️</span>
                  <span className="text-white">
                    Gestión TOTAL: Renovación, reformas, reparación y
                    mantenimiento preventivo.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold">⚖️</span>
                  <span className="text-white">
                    Acompañamiento LEGAL y gestión COMPLETA para tus ventas y
                    alquileres temporales.
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-textboxdark mb-2"
                  >
                    Tipo de propiedad
                  </label>
                  <div className="relative">
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-airbnb focus:border-transparent bg-white text-gray-900 appearance-none pr-10"
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Departamento">Departamento</option>
                      <option value="Casa">Casa</option>
                      <option value="Local">Local</option>
                      <option value="Oficina">Oficina</option>
                      <option value="Studio">Studio</option>
                      <option value="Otro">Otro</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="objective"
                    className="block text-sm font-medium text-textboxdark mb-2"
                  >
                    Objetivo principal
                  </label>
                  <div className="relative">
                    <select
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-airbnb focus:border-transparent bg-white text-gray-900 appearance-none pr-10"
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Airbnb">Rentar en Airbnb</option>
                      <option value="Vender">Vender la propiedad</option>
                      <option value="Ambos">Ambos</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-textboxdark mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tunombre@email.com"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-airbnb focus:border-transparent bg-white text-gray-900`}
                    required
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-airbnb text-white px-6 py-3 rounded-lg font-medium hover:bg-airbnb/90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Rocket size={20} />
                  ¡Quiero mi estratégia GRATIS!
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-outline">
                  <Lock size={14} />
                  <span>
                    100% confidencial. Sin spam. Tus datos estan protegidos.
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
