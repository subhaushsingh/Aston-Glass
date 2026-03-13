const services = [
  'CNC Edge Polishing & Beveling',
  'Precision Hole Drilling & Routing',
  'Custom Waterjet Cutouts',
  'Frosted & Tinted Processing',
]

function ServiceItem({ label }) {
  return (
    <li className="flex items-center text-slate-800 font-medium bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-cyan-200 transition">
      <div className="bg-cyan-100 p-2 rounded-full mr-4 text-cyan-600 font-bold text-sm">✓</div>
      {label}
    </li>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-slate-100 py-24 px-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image with decorative shadow */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-cyan-600 translate-x-4 translate-y-4 rounded-2xl opacity-20" />
            <img
              src="/capabilties.png"
              alt="Glass installation"
              className="rounded-2xl shadow-2xl relative z-10 border-4 border-white"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Value-Added Services
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Complete Processing Solutions</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We offer more than just tempering. Our facility is equipped for end-to-end glass processing
              before the toughening stage, ensuring perfect fit and beautiful finishes for your projects.
            </p>

            <ul className="space-y-5">
              {services.map((service) => (
                <ServiceItem key={service} label={service} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}