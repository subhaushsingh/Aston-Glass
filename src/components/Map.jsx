export default function Map() {
  return (
    <>
      {/* Location & Map Section */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Location</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Visit Our Facility</h2>
              <div className="w-20 h-1.5 bg-red-600 rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our state-of-the-art manufacturing plant is strategically located in Rajkot, Gujarat, equipped to handle bulk and custom glass processing efficiently.
              </p>
              <div className="space-y-4 text-gray-800">
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-4 mt-1">🕒</span>
                  <p><strong>Working Hours:</strong><br/> FACTORY : Monday - Saturday: 8:00 AM - 8:00 PM </p>
                  <span className="text-red-500 text-xl mr-4 mt-1">🕒</span>
                  <p><strong>Working Hours:</strong><br/> OFFICE : Monday - Saturday: 10:00 AM - 6:00 PM </p>
                </div>
              </div>
            </div>

            {/* Interactive Clickable Map - Reduced Height & Width */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-50 h-[300px] group">
              {/* Embedded Google Map (Visual Only) */}
              <iframe
                title="Factory Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.857441357508!2d70.74142012458749!3d22.130311998195936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958350001e0230f%3A0xf0cfc7017ddccf79!2sAston%20Glass%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1773507176445!5m2!1sen!2sin"
                className="w-full h-full group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Clickable Overlay */}
              <a
                href="https://maps.app.goo.gl/r63Dsx9ArsbWdChY8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10  group-hover:bg-gray-900/40 transition-colors flex items-center justify-center cursor-pointer"
              >
                <span className="bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-2xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2">
                  <span>📍</span> Open in Google Maps
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}