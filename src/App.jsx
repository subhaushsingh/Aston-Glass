import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Splash() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
      
      {/* Logo */}
      <div className="w-20 h-20 bg-cyan-500 rounded-md rotate-45 flex items-center justify-center animate-pulse"
        style={{ boxShadow: '0 0 60px rgba(6,182,212,0.8), 0 0 120px rgba(6,182,212,0.4)' }}>
        <div className="w-10 h-10 bg-slate-900 rounded-sm" />
      </div>

      {/* Brand name */}
      <p className="text-white font-bold tracking-widest uppercase text-lg mt-8">
        Aston Glass
      </p>

      {/* Loading bar */}
      <div className="w-36 h-0.5 bg-white/10 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-cyan-400 rounded-full"
          style={{ animation: 'loadbar 2s ease forwards' }}
        />
      </div>

      {/* Keyframe for the bar */}
      <style>{`
        @keyframes loadbar {
          0%   { width: 0% }
          60%  { width: 70% }
          100% { width: 100% }
        }
      `}</style>

    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Splash shows for 2 seconds, then page fades in
    setTimeout(() => {
      setReady(true)
      setTimeout(() => setVisible(true), 50)
    }, 2000)
  }, [])

  if (!ready) return <Splash />

  return (
    <div
      className={`bg-gray-50 text-gray-800 antialiased transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}