export default function Certification() {
  return (
    <section id="certifications" className="py-24 bg-white px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Guarantee</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Quality & Certifications</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-gray-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ISO 9001:2015 certified and BIS licensed for safety glass, ensuring complete adherence to the highest global and national standards.
          </p>
        </div>

        {/* Certificates Row */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-stretch mb-12">
          
          {/* ISO Certificate Card */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all duration-500 group">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">🏆</div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">ISO 9001:2015</h3>
            
            <a href="/ASTON GLASS PRIVATE LIMITED FINAL_pages-to-jpg-0001.jpg" target="_blank" rel="noopener noreferrer" className="block relative z-10">
              <img 
                src="/ASTON GLASS PRIVATE LIMITED FINAL_pages-to-jpg-0001.jpg" 
                alt="ISO Certificate" 
                className="rounded shadow-md border border-gray-200 mx-auto w-full object-contain transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" 
              />
            </a>
          </div>

          {/* BIS License Group Card */}
          <div className="w-full lg:w-2/3 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-all duration-500 group">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">🛡️</div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">BIS Product Certification License</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/BIS License_page-0005.jpg" target="_blank" rel="noopener noreferrer" className="block relative z-10">
                <img 
                  src="/BIS License_page-0005.jpg" 
                  alt="BIS License Page 1" 
                  className="rounded shadow-md border border-gray-200 w-full object-contain transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" 
                />
              </a>

              <a href="/BIS License_page-0006.jpg" target="_blank" rel="noopener noreferrer" className="block relative z-10">
                <img 
                  src="/BIS License_page-0006.jpg" 
                  alt="BIS License Page 2" 
                  className="rounded shadow-md border border-gray-200 w-full object-contain transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* NEW: Quality Assurance Section */}
        <div className="bg-gray-50 p-8 lg:p-12 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* QA Intro */}
            <div className="md:w-1/3 text-center md:text-left">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 text-2xl mx-auto md:mx-0">🔍</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We leave no stone unturned – each step, from raw material inspection to final dispatch, undergoes rigorous QC checks.
              </p>
            </div>

            {/* QA Checklist */}
            <div className="md:w-2/3 w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Raw materials scrutinized for flawless quality",
                  "Cutting precision & edge finishing validated",
                  "Print durability & color robustness tested",
                  "Tempering strength assessed for safety",
                  "Final product audit before shipping"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">✓</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-gray-900 font-semibold text-lg flex items-center justify-center md:justify-start">
                  <span className="text-yellow-500 mr-2 text-2xl">★</span> 
                  Global quality benchmarks met, consistently.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}