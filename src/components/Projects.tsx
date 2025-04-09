import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import { X } from 'lucide-react';

Modal.setAppElement('#root');

const projects = [
  {
    before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
    after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    title: 'Casa Colonial Renovada',
  },
  {
    before: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
    title: 'Apartamento Moderno',
  },
  {
    before: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e',
    after: 'https://images.unsplash.com/photo-1600210492493-0946911123ea',
    title: 'Loft Industrial',
  },
];

const BeforeAfterSlider = ({ before, after }: { before: string; after: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMouseMove(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const showBefore = () => setSliderPosition(0);
  const showAfter = () => setSliderPosition(100);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* After Image (Base layer) */}
      <div className="absolute inset-0">
        <img src={after} alt="After" className="w-full h-full object-cover" />
      </div>

      {/* Before Image (Sliding layer) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={before} alt="Before" className="w-full h-full object-cover" />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div
          className="absolute inset-y-0 w-1 bg-primary cursor-ew-resize"
          onMouseDown={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing">
            <div className="space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-dark rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <button
          onClick={showBefore}
          className="px-6 py-2 bg-dark/80 text-white rounded-lg hover:bg-dark transition-colors"
        >
          Antes
        </button>
        <button
          onClick={showAfter}
          className="px-6 py-2 bg-dark/80 text-white rounded-lg hover:bg-dark transition-colors"
        >
          Después
        </button>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" className="py-12 bg-surfacelight dark:bg-onsecondary">
        <div className="container">
          <div className="flex flex-col items-start mb-2">
            <h2 className="text-3xl md:text-3xl font-bold mb-1 text-gray-700 dark:text-draculacianlight">
              Nuestros Proyectos
            </h2>
            <p className="text-draculaselect dark:text-draculacianlightgrey mb-4 text-lg">
              Propiedades transformadas, resultados reales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={project.before}
                    alt={`${project.title} - Antes`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={project.after}
                    alt={`${project.title} - Después`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">Desliza para ver el cambio</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Divisor gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 from-transparent"></div>

      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white dark:bg-[#282a36] rounded-xl overflow-hidden max-w-5xl mx-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-dark/80 text-white rounded-full hover:bg-dark transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {projects[selectedProject].title}
                </h2>
                
                <BeforeAfterSlider
                  before={projects[selectedProject].before}
                  after={projects[selectedProject].after}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
};