import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Services from './components/Services'
import Contact from './components/Contact'
import Map from './components/Map'
import BestProducts from './components/BestProducts';
import Footer from './components/Footer'

function Splash() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-72 h-72 bg-red-800/10 rounded-full blur-3xl bottom-1/4 right-1/4 pointer-events-none" />

      <style>{`
        @keyframes loadbar {
          0%   { width: 0% }
          50%  { width: 65% }
          100% { width: 100% }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoPop {
          0%   { opacity: 0; transform: scale(0.8); }
          60%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .logo-glow {
          filter: drop-shadow(0 0 18px rgba(220,38,38,0.5)) drop-shadow(0 0 40px rgba(220,38,38,0.2));
          animation: logoPop 0.6s cubic-bezier(0.33, 1, 0.68, 1) forwards;
        }
        .brand-text {
          animation: fadeUp 0.5s 0.4s ease both;
          background: linear-gradient(90deg, #fff 0%, #fca5a5 40%, #fff 60%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeUp 0.5s 0.4s ease both, shimmer 2.5s 0.8s linear infinite;
        }
        .tagline {
          animation: fadeUp 0.5s 0.6s ease both;
        }
        .bar-wrap {
          animation: fadeUp 0.5s 0.7s ease both;
        }
      `}</style>

      {/* Logo */}
      <div className="logo-glow mb-6">
        <img
          src="./BIS LOGO AGPL website.png"
          alt="Aston Glass Logo"
          className="w-35 h-35 object-contain"
        />
      </div>

      {/* Brand name */}
      <p className="brand-text font-extrabold tracking-[0.25em] uppercase text-xl">
        Aston Glass
      </p>

      {/* Tagline */}
      <p className="tagline text-white/30 text-xs tracking-widest uppercase mt-1">
        Precision · Clarity · Strength
      </p>

      {/* Loading bar */}
      <div className="bar-wrap w-40 mt-8">
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
            style={{ animation: 'loadbar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}
          />
        </div>
        <p className="text-white/20 text-[10px] tracking-widest uppercase text-center mt-3">
          Loading
        </p>
      </div>

    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setReady(true)
      setTimeout(() => setVisible(true), 50)
    }, 1600)
  }, [])

  if (!ready) return <Splash />

  return (
    <div
      className={`bg-gray-50 text-gray-800 antialiased transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Services />
      <BestProducts />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}