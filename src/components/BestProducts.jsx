"use client";

import { useState } from 'react';

export default function BestProducts() {
  const [lightbox, setLightbox] = useState(null);

  const PRODUCTS = [
    {
      image: './service.png',
      tag: 'Best Seller',
      name: 'Ultra-Clear Tempered Glass',
      desc: 'Maximum clarity with superior impact resistance. Ideal for facades, partitions, and premium interiors.',
      spec: '4mm – 19mm thickness',
    },
    {
      image: './service.png',
      tag: 'Most Popular',
      name: 'Frosted Privacy Glass',
      desc: 'Elegant diffused finish that balances natural light with complete privacy for modern spaces.',
      spec: 'Custom opacity levels',
    },
    {
      image: './service.png',
      tag: 'New Arrival',
      name: 'Tinted Solar Glass',
      desc: 'Reduce heat and glare while maintaining outward visibility. Energy-efficient and architecturally refined.',
      spec: 'Bronze · Grey · Blue · Green',
    },
  ];

  return (
    <section id="best-products" className="bg-white py-24 px-6">
      <style>{`
        .product-card {
          transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1),
                      box-shadow 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0,0,0,0.16), 0 8px 24px rgba(220,38,38,0.08);
        }
        .product-img {
          transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
          cursor: zoom-in;
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
        }
        .tag-pill { backdrop-filter: blur(8px); }

        /* Lightbox */
        .lightbox-overlay {
          animation: fadeIn 0.2s ease;
        }
        .lightbox-img {
          animation: zoomIn 0.25s cubic-bezier(0.33, 1, 0.68, 1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Range</span>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Best of Our <br className="hidden md:block" /> Products
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base leading-relaxed">
            Precision-engineered glass solutions trusted by architects, contractors, and designers across the region.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="product-card bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

              {/* Image */}
              <div
                className="relative overflow-hidden aspect-[4/3]"
                onClick={() => setLightbox(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img w-full h-full object-cover"
                />
                {/* Hover hint */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    View Image
                  </span>
                </div>
                <span className="tag-pill absolute top-3 left-3 bg-white/80 text-red-600 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full border border-red-100">
                  {product.tag}
                </span>
              </div>

              {/* Content */}
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
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="lightbox-img relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 hover:bg-red-600 hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow transition-all duration-200 text-lg font-bold"
            >
              ×
            </button>

            <img
              src={lightbox.image}
              alt={lightbox.name}
              className="w-full object-cover max-h-[60vh]"
            />

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