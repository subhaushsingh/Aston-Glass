"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const IMAGES = [
  './service.png', './service.png', './service.png',
  './service.png', './service.png', './service.png', './service.png'
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const total = IMAGES.length;

  return (
    <section id="services" className="bg-gray-100 py-24 px-6 border-y border-gray-200 overflow-hidden">
      <style>{`
        .service-swiper { padding: 30px 0 !important; }
        .service-swiper .swiper-slide {
          transition: transform 0.7s cubic-bezier(0.33, 1, 0.68, 1),
                      opacity 0.7s cubic-bezier(0.33, 1, 0.68, 1),
                      filter 0.7s ease !important;
          will-change: transform, opacity, filter;
        }
        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1) !important;
        }
        .progress-bar-fill {
          transition: width 0.5s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .card-inner {
          transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1),
                      box-shadow 0.5s ease,
                      border-color 0.5s ease,
                      opacity 0.5s ease,
                      filter 0.5s ease;
        }
        .card-inner:hover {
          transform: perspective(900px) rotateY(-5deg) scale(1.02);
          box-shadow: 10px 20px 40px rgba(0,0,0,0.18);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* ── Carousel ── */}
          <div className="w-full lg:w-1/2 relative">
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={1.8}
              loop
              speed={700}
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 100,
                modifier: 1.5,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow]}
              className="service-swiper"
            >
              {IMAGES.map((src, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className={`card-inner relative rounded-2xl overflow-hidden border-2
                      ${isActive
                        ? 'border-red-500 opacity-100 shadow-2xl'
                        : 'border-white/60 opacity-50 blur-[1px]'
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Service ${index + 1}`}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl ring-2 ring-red-400/40 ring-offset-2 pointer-events-none" />
                      )}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ── Controls ── */}
            <div className="mt-5 flex items-center justify-between px-2">
              <div className="flex gap-2">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 text-sm"
                >‹</button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 text-sm"
                >›</button>
              </div>
              <div className="flex items-center gap-3 flex-1 ml-4">
                <div className="flex-1 h-[3px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="progress-bar-fill h-full bg-red-600 rounded-full"
                    style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-400 tabular-nums">
                  <span className="text-gray-800">{String(activeIndex + 1).padStart(2, '0')}</span>
                  {' / '}{String(total).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-red-600 rounded-full opacity-10 blur-3xl -z-10 pointer-events-none" />
          </div>

          {/* ── Text Content ── */}
          <div className="w-full lg:w-1/2">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Value-Added Services</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Complete Processing Solutions</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We offer more than just tempering. Our facility is equipped for end-to-end glass processing...
            </p>
            <ul className="space-y-5">
              {['CNC Edge Polishing & Beveling', 'Precision Hole Drilling & Routing', 'Frosted & Tinted Processing'].map((service, index) => (
                <li key={index} className="flex items-center text-gray-800 font-medium bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-red-200 transition-all duration-300">
                  <div className="bg-red-100 p-2 rounded-full mr-4 text-red-600">✓</div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}