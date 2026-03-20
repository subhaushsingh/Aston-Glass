"use client";

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// Updated to use your actual uploaded images to prevent broken links
const PRODUCTS = [
  {
    image: './chemney.png',
    tag: 'Best Seller',
    name: 'Chimney Glass',
    desc: 'Premium, heat-resistant glass with custom designer prints and precision finishing, compatible with all chimney models.',
    spec: '4mm-5mm thickness',
  },
  {
    image: './service.png',
    tag: 'Most Popular',
    name: 'Oven Door Glass',
    desc: 'Expertly crafted with multi-layer toughened glass for enhanced safety, superior heat insulation, and crystal-clear visibility.',
    spec: 'Clear,Tinted,Reflective',
  },
  {
    image: './microwave.png',
    tag: 'Most Popular',
    name: 'Microwave Door Glass',
    desc: 'Durable, high-strength glass with high-quality ceramic printing, designed for clear visibility, robust shock resistance, and long-lasting performance.',
    spec: '4 mm thickness',
  },
];


// Removed the broken service.png entries and mapped to your exact uploads
const GALLERY = [
  {
    image: '/1.png',
    name: 'Flood Light Glasses:',
    description: 'Premium toughened flood light glass—engineered for maximum clarity and extreme durability.',
  },
  {
    image: '/2.png',
    name: 'Custom Printed Glass:',
    description: 'Bespoke designs for OEMs, featuring personalized branding, intricate patterns, and high-impact graphics.',
  },
  {
    image: '/3.png',
    name: 'COP and LOP Glasses:',
    description: 'Specialized toughened glasses designed for lift panels, ensuring safety and lasting durability.',
  },
  {
    image: './4.png',
    name: 'Corner Shelf :',
    description: 'Perfect for maximizing corner spaces, adding a touch of elegance to your decor.',
  },
  {
    image: './5.png',
    name: ' Straight Shelf:',
    description: ' Ideal for showcasing your favorite items, crafted for a sturdy and sleek look.',
  },
  {
    image: '/6.png',
    name: 'Bottle Pull Out Glass:',
    description: 'Add a touch of sophistication with our grey tinted toughened glass, perfect for kitchen or bar areas.',
  },
];

export default function BestProducts() {
  const [lightbox, setLightbox] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const total = GALLERY.length;

  return (
    <section id="best-products" className="bg-white py-24 px-6">
      <style>{`
        .product-card {
          transition: transform 0.4s cubic-bezier(0.33,1,0.68,1), box-shadow 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.16), 0 8px 24px rgba(220,38,38,0.08);
        }
        .product-img {
          transition: transform 0.6s cubic-bezier(0.33,1,0.68,1);
          cursor: zoom-in;
        }
        .product-card:hover .product-img { transform: scale(1.06); }
        .tag-pill { backdrop-filter: blur(8px); }

        .lightbox-overlay { animation: fadeIn 0.2s ease; }
        .lightbox-img-anim { animation: zoomIn 0.25s cubic-bezier(0.33,1,0.68,1); }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes zoomIn { from{opacity:0;transform:scale(0.92)} to{opacity:1;transform:scale(1)} }

        .gallery-swiper { padding: 50px 0 60px !important; }
        .gallery-swiper .swiper-slide {
          transition: transform 0.7s cubic-bezier(0.33,1,0.68,1),
                      opacity  0.7s cubic-bezier(0.33,1,0.68,1),
                      filter   0.7s ease !important;
          will-change: transform, opacity, filter;
        }
        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.33,1,0.68,1) !important;
        }
        .gallery-card {
          transition: transform 0.5s cubic-bezier(0.33,1,0.68,1),
                      box-shadow 0.5s ease, border-color 0.5s ease,
                      opacity 0.5s ease, filter 0.5s ease;
        }
        .progress-bar-fill {
          transition: width 0.5s cubic-bezier(0.33,1,0.68,1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Range</span>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Best of Our <br className="hidden md:block" /> Products
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base leading-relaxed">
            Precision Home and Kitchen Appliance Glass solutions trusted by major OEMs across the region.
          </p>
        </div>

        {/* ── Product Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="product-card bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              
              {/* FIXED: Changed to object-contain with flex centering so tall/wide images never crop */}
              <div className="relative overflow-hidden aspect-[4/3] bg-white flex items-center justify-center p-6" onClick={() => setLightbox(product)}>
                <img src={product.image} alt={product.name} className="product-img max-w-full max-h-full object-contain" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-300 flex items-center justify-center cursor-pointer">
                  <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    View Image
                  </span>
                </div>
                <span className="tag-pill absolute top-3 left-3 bg-white/80 text-red-600 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border border-red-100 shadow-sm">
                  {product.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {product.spec}
                  </span>
                  <button
                    onClick={() => setLightbox(product)}
                    className="text-red-600 text-sm font-bold hover:underline transition"
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Gallery Carousel ── */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Gallery</span>
            <h3 className="text-3xl font-extrabold text-gray-900">A Closer Look</h3>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-red-600 rounded-full opacity-[0.06] blur-3xl -z-10 pointer-events-none" />

            <Swiper
              onSwiper={(s) => { swiperRef.current = s; }}
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={1.4}
              loop
              speed={750}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 30,
                depth: 180,
                modifier: 1.8,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow]}
              className="gallery-swiper"
            >
              {GALLERY.map((item, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      onClick={() => setLightbox({ 
                        image: item.image, 
                        name: item.name, 
                        desc: item.description, 
                        tag: 'Gallery', 
                        
                      })}
                      className={`gallery-card relative rounded-3xl overflow-hidden border-2 bg-white cursor-pointer
                        ${isActive
                          ? 'border-red-500 opacity-100 shadow-2xl'
                          : 'border-white/30 opacity-35 blur-[2px]'
                        }`}
                    >
                      {/* Image Container */}
                      <div className="w-full aspect-[16/9] flex items-center justify-center p-6">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      {/* Active ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-3xl ring-2 ring-red-400/30 pointer-events-none" />
                      )}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Separate Text Block below the Carousel for Mobile Optimization */}
            {GALLERY[activeIndex] && (
              <div className="text-center max-w-2xl mx-auto mb-10 mt-[-20px] px-6">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2 block">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <h4 className="text-gray-900 text-2xl font-extrabold mb-2 leading-snug">
                  {GALLERY[activeIndex].name}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {GALLERY[activeIndex].description}
                </p>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 px-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 text-lg"
              >‹</button>
              <div className="flex items-center gap-3 w-48">
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
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 text-lg"
              >›</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="lightbox-img-anim relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white hover:bg-red-600 hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all duration-200 text-lg font-bold"
            >×</button>
            
            {/* FIXED: Changed to object-contain with a subtle background so the pop-up doesn't stretch or crop */}
            <div className="bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
               <img src={lightbox.image} alt={lightbox.name} className="max-w-full max-h-[50vh] object-contain" />
            </div>

            <div className="p-6">
              <span className="text-red-600 text-xs font-bold uppercase tracking-wider">{lightbox.tag}</span>
              <h3 className="text-xl font-extrabold text-gray-900 mt-1 mb-2">{lightbox.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{lightbox.desc}</p>
              <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                {lightbox.spec}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}