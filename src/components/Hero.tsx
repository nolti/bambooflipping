import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const beforeAfterImages = [
  {
    before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
    after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
  },
  {
    before: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
  },
];

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[67.5vh] flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {beforeAfterImages.map((image, index) => (
            <SwiperSlide key={index} className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#282a36] via-[#282a36]/80 to-transparent" />
              <img
                src={image.after}
                alt="Property transformation"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container relative z-10">
        <div className="max-w-xl">
          <h1 className="text-6x1 sm:text-4xl md:text-4xl font-semibold mb-4">
            Transformamos propiedades en sueños rentables!
          </h1>
          <p className="text-2x1 sm:text-2xl md:text-2x1 mb-4 text-secondary">
            ¿Querés renovar para vender o alquilar rápidamente?<br /> Somos tu solución!
          </p>
          <button 
            onClick={() => navigate('/estrategia')}
            className="btn-primary inline-block"
          >
            Estrategia GRATIS!
          </button>
        </div>
      </div>
    </section>
  );
};