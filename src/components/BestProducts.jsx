"use client";

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const PRODUCTS = [
  {
    image: './service.png',
    tag: 'Best Seller',
    name: 'Chimney Glass',
    desc: 'Premium, heat-resistant glass with custom designer prints and precision finishing, compatible with all chimney models.',
    spec: '4mm – 19mm thickness',
  },
  {
    image: './service.png',
    tag: 'Most Popular',
    name: 'Oven Door Glass',
    desc: 'Expertly crafted with multi-layer toughened glass for enhanced safety, superior heat insulation, and crystal-clear visibility.',
    spec: 'Custom opacity levels',
  },
  {
    image: './service.png',
    tag: 'Most Popular',
    name: 'Microwave Door Glass',
    desc: 'Durable, high-strength glass with high-quality ceramic printing, designed for clear visibility, robust shock resistance, and long-lasting performance.',
    spec: 'Bronze · Grey · Blue · Green',
  },
];

// ── Replace image paths and descriptions with your own content ──
const GALLERY = [
  {
    image: './service.png',
    name: 'Chimney Glass — Designer Series',
    description: 'Engineered to withstand sustained high temperatures, our Chimney Glass range combines robust heat resistance with elegant custom screen-printed patterns. Every pane is precision-cut for a seamless fit across all major chimney brands, meeting international safety standards for both residential and commercial kitchens.',
  },
  {
    image: './service.png',
    name: 'Oven Door Glass — Multi-Layer',
    description: 'Our multi-layer toughened oven glass delivers superior thermal insulation while maintaining crystal-clear visibility into the cooking chamber. Rated for continuous temperatures up to 500°C, each panel features a smooth, easy-clean surface with an optional anti-fingerprint coating for effortless daily maintenance.',
  },
  {
    image: './service.png',
    name: 'Microwave Door Glass — Ceramic Print',
    description: 'Crafted with high-durability ceramic printing, this glass retains its design integrity through years of daily use. It is precisely engineered for optimal microwave signal transparency while blocking harmful radiation, and is available in a range of tints — Bronze, Grey, Blue, and Forest Green — to suit any appliance palette.',
  },
  {
    image: './service.png',
    name: 'Refrigerator Door Glass — Frost-Free',
    description: 'Treated to resist condensation and frost build-up, our refrigerator glass incorporates a low-emissivity coating that maintains consistent internal temperatures for improved energy efficiency. Available in clear, tinted, and frosted finishes, each panel is precision-bevelled for seamless integration with door gaskets and frame systems.',
  },
  {
    image: './service.png',
    name: 'Washing Machine Glass — Impact Grade',
    description: 'Rated for the high-vibration demands of drum washing, this impact-grade tempered glass maintains optical clarity across all wash cycles. A chemical-resistant seal at the frame joint prevents moisture ingress, and each panel is produced in standard and custom diameters to fit front-load models across every major brand.',
  },
  {
    image: './service.png',
    name: 'Hob & Cooktop Glass — Ceramic',
    description: 'Our ultra-flat ceramic cooktop glass ensures even heat distribution across all burner zones while standing up to rapid thermal shock. The custom print-ready surface supports decorative burner markings and brand graphics, and is certified for induction, gas-on-glass, and electric radiant heating elements.',
  },
  {
    image: './service.png',
    name: 'Air Fryer & Small Appliance Glass',
    description: 'Precision-cut for the growing small appliance segment, this lightweight tempered glass offers high optical clarity so users can monitor cooking at a glance. Heat-resistant up to 300°C and suitable for air fryers, toaster ovens, and steamers, it reduces overall appliance weight without compromising structural strength.',
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
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-overlay {
          transition: opacity 0.4s ease;
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
              <div className="relative overflow-hidden aspect-[4/3]" onClick={() => setLightbox(product)}>
                <img src={product.image} alt={product.name} className="product-img w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    View Image
                  </span>
                </div>
                <span className="tag-pill absolute top-3 left-3 bg-white/80 text-red-600 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border border-red-100">
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
                      className={`gallery-card relative rounded-3xl overflow-hidden border-2
                        ${isActive
                          ? 'border-red-500 opacity-100 shadow-2xl'
                          : 'border-white/30 opacity-35 blur-[2px]'
                        }`}
                    >
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full aspect-[16/9] object-cover"
                      />

                      {/* Gradient overlay — always visible on active, hover on inactive */}
                      <div
                        className={`gallery-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
                          ${isActive ? 'opacity-100' : 'opacity-0'}`}
                      />

                      {/* Text — only on active */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 px-7 py-6">
                          {/* Slide counter */}
                          <span className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 block">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                          </span>
                          {/* Title */}
                          <h4 className="text-white text-xl font-extrabold mb-2 leading-snug">
                            {item.name}
                          </h4>
                          {/* Description */}
                          <p className="text-white/80 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}

                      {/* Active ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-3xl ring-2 ring-red-400/30 pointer-events-none" />
                      )}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Controls */}
            <div className="mt-2 flex items-center justify-center gap-6 px-4">
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
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 hover:bg-red-600 hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow transition-all duration-200 text-lg font-bold"
            >×</button>
            <img src={lightbox.image} alt={lightbox.name} className="w-full object-cover max-h-[60vh]" />
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