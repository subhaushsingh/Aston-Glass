export default function Navbar() {
  return (
   <nav className="fixed w-full z-50 bg-white/25 backdrop-blur-sm shadow-sm transition-all duration-300 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img src="/BIS LOGO AGPL website.png" alt="AGPL Astron Glass Logo" className="h-12 w-auto object-contain" />
          </a>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="hover:text-red-600 transition duration-300">Home</a>
            <a href="#about" className="hover:text-red-600 transition duration-300">About Us</a>
            <a href="#capabilities" className="hover:text-red-600 transition duration-300">Capabilities</a>
            <a href="#services" className="hover:text-red-600 transition duration-300">Services</a>
            <a href="#contact" className="hover:text-red-600 transition duration-300">Contact</a>
            <a href="/Aston_Glass_Profile.pdf" download="Aston_Glass_Brochure.pdf" className="hover:text-red-600 transition duration-300"> Download Brochure</a>
          </div>
          <a href="#contact" className="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-red-600/30 hover:shadow-red-700/50 transform hover:-translate-y-0.5">
            Get a Quote
          </a>
        </div>
      </nav>
  )
}