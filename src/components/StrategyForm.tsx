import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Rocket } from 'lucide-react';

export const StrategyForm = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-full max-w-full mx-auto p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-graylight p-6 md:p-10">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl md:text-3xl text-center font-bold mt-0 mb-0 text-textboxdark leading-tight">
              ¡Vendé tu propiedad hasta un{' '}
              <span className="text-airbnb font-bold">40% más!</span>
            </h4>
            <div className="relative flex items-center justify-center my-4">
              <div className="flex-grow border-t border-greyline"></div>
              <span className="flex-shrink mx-4 text-lg font-bold text-textboxdark/70">
                O
              </span>
              <div className="flex-grow border-t border-greyline"></div>
            </div>
            <h4 className="text-2xl md:text-3xl text-center font-bold mt-0 mb-6 text-textboxdark leading-tight">
              ¡Aumentá tus ingresos alquilando en{' '}
              <span className="text-airbnb font-bold">Airbnb!</span>
            </h4>

            <p className="text-textboxdark/90 mb-2 text-lg md:text-xl text-center">
              Recibí <span className="text-airbnb font-bold">GRATIS</span> un
              plan de renovación personalizado para aumentar el valor de tu
              propiedad en hasta un <span className="font-bold">40%</span>
            </p>
            <p className="text-textboxdark/90 mb-8 text-lg md:text-xl text-center">
              Utilizamos técnicas validadas por los anfitriones{' '}
              <span className="font-bold">TOP 5%</span> del mundo.
            </p>

            <div className="bg-textboxdark rounded-xl p-6 mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl">♟️</span>
                <span className="text-white text-lg">
                  Estrategias validadas con resultados medibles en +50
                  propiedades!
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl">💹</span>
                <span className="text-white text-lg">
                  Aumenta tus ganancias en Airbnb con nuestra gestión profesional
                  especializada.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl">🛠️</span>
                <span className="text-white text-lg">
                  Gestión TOTAL: Renovación del inmueble, reformas, reparación y
                  mantenimiento preventivo.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white font-bold text-xl">⚖️</span>
                <span className="text-white text-lg">
                  Acompañamiento LEGAL y gestión COMPLETA para tus ventas y
                  alquileres temporales.
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="propertyType"
                  className="block text-lg font-medium text-textboxdark mb-2"
                >
                  Tipo de propiedad
                </label>
                <div className="relative">
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-airbnb focus:border-transparent bg-white text-gray-900 appearance-none pr-10 text-lg"
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
                      className="w-6 h-6 text-gray-400"
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
                  className="block text-lg font-medium text-textboxdark mb-2"
                >
                  Objetivo principal
                </label>
                <div className="relative">
                  <select
                    id="objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-airbnb focus:border-transparent bg-white text-gray-900 appearance-none pr-10 text-lg"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Airbnb">Rentar en Airbnb</option>
                    <option value="Vender">Vender la propiedad</option>
                    <option value="Ambos">Ambos</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-6 h-6 text-gray-400"
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
                  className="block text-lg font-medium text-textboxdark mb-2"
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
                  className={`w-full px-4 py-3 rounded-lg border ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-airbnb focus:border-transparent bg-white text-gray-900 text-lg`}
                  required
                />
                {emailError && (
                  <p className="mt-1 text-sm text-red-500">{emailError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-airbnb text-white px-8 py-4 rounded-lg font-medium hover:bg-airbnb/90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 text-xl"
              >
                <Rocket size={24} />
                ¡Quiero mi estratégia GRATIS!
              </button>

              <div className="flex items-center justify-center gap-2 text-base text-outline">
                <Lock size={16} />
                <span>
                  100% confidencial. Sin spam. Tus datos estan protegidos.
                </span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};