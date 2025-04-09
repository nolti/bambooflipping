import React from 'react';
import { motion } from 'framer-motion';

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-[#282a36]"
  >
    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,1.56-1.56A1.56,1.56,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
  </svg>
);

const team = [
  {
    name: 'Ana García',
    role: 'Especialista en adquisiciones',
    description: 'Más de 10 años de experiencia en el mercado inmobiliario. Experta en identificar propiedades con alto potencial de retorno y negociación de adquisiciones estratégicas.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    linkedin: 'https://linkedin.com/in/anagarcia'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Director de renovaciones',
    description: 'Más de 15 años transformando espacios. Especializado en gestión de proyectos de renovación y coordinación de equipos multidisciplinarios para entregas eficientes.',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40',
    linkedin: 'https://linkedin.com/in/carlosrodriguez'
  },
  {
    name: 'María López',
    role: 'Diseñadora de interiores',
    description: 'Creadora de espacios que enamoran. Especializada en diseño de interiores contemporáneo y staging profesional para maximizar el valor de las propiedades.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    linkedin: 'https://linkedin.com/in/marialopez'
  },
  {
    name: 'Juan Martínez',
    role: 'Asesor financiero',
    description: 'Especialista en maximizar el retorno de inversión. Experto en análisis financiero, estructuración de financiamiento y optimización fiscal en proyectos inmobiliarios.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    linkedin: 'https://linkedin.com/in/juanmartinez'
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-12 bg-surfacelight dark:bg-onsecondary">
      <div className="container">
        <div className="flex flex-col items-start mb-2">
          <h2 className="text-3xl md:text-3xl font-bold mb-1 text-gray-700 dark:text-draculacianlight">
            Nuestro Equipo
          </h2>
          <p className="text-draculaselect dark:text-draculacianlightgrey mb-5 text-lg">
            Conocé a los expertos detrás de cada transformación exitosa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 border-2 rounded-3xl shadow-[-2px_6px_0_0] shadow-primary/50 bg-surface border-primary/90 dark:bg-dark dark:border-primary/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 bg-primary rounded-2xl"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-20 h-20 object-cover rounded-2xl"
                  />
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-0 right-0 w-10 h-10 bg-draculacianlight rounded-full flex items-center justify-center transition-transform hover:scale-110"
                >
                  <LinkedInIcon />
                </a>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-onsecondary dark:text-white">
                {member.name}
              </h3>
              <p className="text-mdonprimary dark:text-primary font-medium mb-4">{member.role}</p>
              <p className="text-onsecondary dark:text-gray-300 text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};