export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 shadow-lg transition-all duration-300 text-white"
      style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wider flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-sm rotate-45 flex items-center justify-center shadow-lg shadow-cyan-500/50">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          Aston Glass
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {['Home', 'Capabilities', 'Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition duration-300">
              {item}
            </a>
          ))}
        </div>

        {/*  Buttons */}
        <a href="#contact"
          className="hidden md:inline-block bg-cyan-600 hover:bg-cyan-500 px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-cyan-600/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transform">
          Get a Quote
        </a>
      </div>
    </nav>
  )
}