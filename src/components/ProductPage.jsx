"use client";
import React, { useEffect, useState } from 'react';

const PRODUCT_CATALOG = [
  {
    id: 'chimney',
    name: 'Chimney Glass',
    image: '/chemney.png',
    tag: 'Kitchen Appliance',
    description: 'Premium, heat-resistant glass with custom designer prints and precision finishing, compatible with all chimney models.',
    details: 'Engineered to withstand high cooking temperatures and grease exposure. Features customized, fade-resistant designer prints and precision-cut edges that ensure a seamless fit for all major kitchen chimney brands, combining premium aesthetics with superior functionality.',
  },
  {
    id: 'oven',
    name: 'Oven Door Glass',
    image: '/oven.png',
    tag: 'Kitchen Appliance',
    description: 'Expertly crafted with multi-layer toughened glass for enhanced safety, superior heat insulation, and crystal-clear visibility.',
    details: 'Designed specifically to handle extreme thermal shock. The multi-layer construction traps heat inside the oven cavity for maximum energy efficiency while keeping the exterior safe to the touch. Ensures crystal-clear visibility to monitor baking without opening the door.',
  },
  {
    id: 'microwave',
    name: 'Microwave Door Glass',
    image: '/microwave.png',
    tag: 'Kitchen Appliance',
    description: 'Durable, high-strength glass with high-quality ceramic printing, designed for clear visibility and robust shock resistance.',
    details: 'Manufactured with a standard 4mm thickness for optimal microwave shielding and structural integrity. The high-temperature ceramic printing provides a sleek border that hides internal components while maintaining a clear viewing window. Highly resistant to daily wear and heat cycling.',
  },
  {
    id: 'floodlight',
    name: 'Flood Light Glasses',
    image: '/1.png',
    tag: 'Outdoor & Industrial',
    description: 'Premium toughened flood light glass—engineered for maximum clarity and extreme durability.',
    details: 'Built to survive harsh outdoor environments. This high-impact, thermally resistant glass protects high-wattage bulbs from rain, snow, and flying debris without compromising light transmittance. Perfect for industrial, stadium, and high-performance security lighting fixtures.',
  },
  {
    id: 'custom',
    name: 'Custom Printed Glass',
    image: '/2.png',
    tag: 'OEM Solutions',
    description: 'Bespoke designs for OEMs, featuring personalized branding, intricate patterns, and high-impact graphics.',
    details: 'Tailored specifically for Original Equipment Manufacturers. We utilize advanced ceramic frit printing to permanently fuse your logos or functional graphics into the glass surface. The result is a scratch-proof, vibrant finish that elevates your brand identity on any appliance.',
  },
  {
    id: 'cop-lop',
    name: 'COP and LOP Glasses',
    image: '/3.png',
    tag: 'Architectural',
    description: 'Specialized toughened glasses designed for lift panels, ensuring safety and lasting durability.',
    details: 'Car Operating Panel (COP) and Landing Operating Panel (LOP) glasses engineered for modern elevators. Features a highly responsive surface compatible with touch-sensitive controls, easy-to-clean finishes, and shatter-resistant toughening for maximum passenger safety.',
  },
  {
    id: 'corner-shelf',
    name: 'Corner Shelf',
    image: '/4.png',
    tag: 'Interior & Decor',
    description: 'Perfect for maximizing corner spaces, adding a touch of elegance to your decor.',
    details: 'Space-saving and stylish. Crafted from thick, polished-edge toughened glass, these shelves fit snugly into 90-degree corners. Ideal for bathrooms, living rooms, or kitchens, providing sturdy support for toiletries or decor while maintaining a light, floating appearance.',
  },
  {
    id: 'straight-shelf',
    name: 'Straight Shelf',
    image: '/5.png',
    tag: 'Interior & Decor',
    description: 'Ideal for showcasing your favorite items, crafted for a sturdy and sleek look.',
    details: 'A minimalist design staple. These rectangular shelves feature beautifully polished borders and exceptional load-bearing capacity. Perfect for modern retail displays or home organization, offering a sleek, transparent platform that lets your items take center stage.',
  },
  {
    id: 'bottle-pullout',
    name: 'Bottle Pull Out Glass',
    image: '/6.png',
    tag: 'Interior & Decor',
    description: 'Add a touch of sophistication with our grey tinted toughened glass, perfect for kitchen or bar areas.',
    details: 'Specifically designed for modern modular kitchen cabinetry. The elegant grey tint conceals clutter while adding a contemporary vibe. Highly resistant to scratches from bottles and jars, making it a durable and luxurious upgrade for your pull-out pantries and bar organizers.',
  },
  {
    id: 'rolling-shutter',
    name: 'Rolling Shutter Glass',
    image: '/7.png',
    tag: 'Interior & Decor',
    description: 'Premium toughened glass rolling shutters combining maximum security with sleek modern design. Available in clear or black-tinted finishes.',
    details: 'Upgrade your kitchen cabinets with our premium toughened glass rolling shutters. Built for safety and durability, they easily withstand heat, moisture, and daily wear. Available in clear or black-tinted finishes to showcase dishware or stylishly conceal appliances.',
  }

];

export default function ProductPage() {
  // Added state to track which image is currently zoomed in
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(scrollTimeout); 
  }, []);
    
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Our Premium Glass Collection
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-500">
          Precision-engineered toughened glass solutions for home appliances, architectural projects, and modern interiors. Crafted for safety, clarity, and unmatched durability.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCT_CATALOG.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image Container - Added onClick and cursor styles */}
            <div 
              className="relative h-64 bg-gray-100 flex items-center justify-center p-6 border-b border-gray-100 group cursor-zoom-in"
              onClick={() => setZoomedImage(product.image)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {product.tag}
              </span>
              
              {/* Subtle hover overlay to indicate it can be clicked */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Click to Expand
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-red-600 font-medium text-sm mb-4">
                {product.description}
              </p>
              <div className="w-12 h-1 bg-gray-200 mb-4 rounded-full"></div>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {product.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Magnification (Lightbox) Overlay */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out transition-opacity"
          onClick={() => setZoomedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-gray-800 bg-white hover:bg-red-600 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-colors shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
          >
            ×
          </button>
          <div className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl w-full flex items-center justify-center h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={zoomedImage} 
              alt="Magnified View" 
              className="max-w-full max-h-full object-contain transform scale-100" 
              style={{ animation: 'zoomIn 0.25s cubic-bezier(0.33,1,0.68,1) forwards' }}
            />
          </div>
          <style>{`
            @keyframes zoomIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}