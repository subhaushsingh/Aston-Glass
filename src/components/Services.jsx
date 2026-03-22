"use client";

const SERVICES = [
  'Fully Computer Numerical Control Cutting',
  'Precision Hole Drilling',
  'Automatic Glass Edging',
  'CNC Edge Polishing & Beveling',
  'Serigraphy And Machine Printing',
  'Customized Frosting',
  'High Precision Tempering Plant',
  'Dedicated Quality Control Room',
  'Safe Packing And Advance Handling Systems',
  'Real-Time Tracking Of Daily Production',
];

const left = SERVICES.slice(0, Math.ceil(SERVICES.length / 2));
const right = SERVICES.slice(Math.ceil(SERVICES.length / 2));

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-24 px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Integrated Workflow</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Our facility is equipped for end-to-end glass processing, combining precision machinery
            with strict quality control at every stage.
          </p>
        </div>

        {/* Two-column service list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left column */}
          <ul className="space-y-4">
            {left.map((service, index) => (
              <li
                key={index}
                className="flex items-center text-gray-800 font-medium bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-red-600 transition-all duration-300"
              >
                <div className="bg-red-100 p-2 rounded-full mr-4 text-red-600 flex-shrink-0">✓</div>
                {service}
              </li>
            ))}
          </ul>

          {/* Right column */}
          <ul className="space-y-4">
            {right.map((service, index) => (
              <li
                key={index}
                className="flex items-center text-gray-800 font-medium bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-red-600 transition-all duration-300"
              >
                <div className="bg-red-100 p-2 rounded-full mr-4 text-red-600 flex-shrink-0">✓</div>
                {service}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}