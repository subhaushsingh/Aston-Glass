
export default function Capabilities() {
  return (
  <section id="capabilities" className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-100">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Manufacturing Capabilities</h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-gray-400 mx-auto rounded-full"></div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Tab 1 */}
    <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-red-600 text-center relative overflow-hidden group transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">📏</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">Thickness Range</h3>
      <p className="text-gray-600 leading-relaxed">We have thickness ranging from 3.5 mm of 8 mm glass where we even have 3.5 and 4 mm grey tinted ,mirror and reflective glasses for fulfilling all customers needs.</p>
    </div>

    {/* Tab 2 */}
    <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-red-600 text-center relative overflow-hidden group transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">🏢</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">Maximum Jumbo Size</h3>
      <p className="text-gray-600 leading-relaxed">Our modern furnaces easily accommodate jumbo glass sheets up to an impressive 2440mm x 1830mm.</p>
    </div>

    {/* Tab 3 */}
    <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-red-600 text-center relative overflow-hidden group transform transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">🛡️</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">Quality Compliance</h3>
      <p className="text-gray-600 leading-relaxed">Rigorous fragmentation and impact testing ,with topnotch printing quality ensuring complete adherence to global safety standards.</p>
    </div>

  </div>
</section>
  )
}
