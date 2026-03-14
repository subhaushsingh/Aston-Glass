
export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-24 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-red-600 transform translate-x-4 translate-y-4 rounded-2xl opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Glass installation" className="rounded-2xl shadow-2xl relative z-10 border-4 border-white" />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Value-Added Services</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Complete Processing Solutions</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">We offer more than just tempering. Our facility is equipped for end-to-end glass processing before the toughening stage, ensuring perfect fit and beautiful finishes for your projects.</p>
              <ul className="space-y-5">
                {['CNC Edge Polishing & Beveling', 'Precision Hole Drilling & Routing', 'Frosted & Tinted Processing'].map((service, index) => (
                  <li key={index} className="flex items-center text-gray-800 font-medium bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-red-200 transition">
                    <div className="bg-red-100 p-2 rounded-full mr-4 text-red-600">✓</div> {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}