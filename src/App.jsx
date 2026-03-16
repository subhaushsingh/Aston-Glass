import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Services from './components/Services'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'

function Splash() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center">
      
     {/* Logo (Clean Corporate Version) */}
      <div className="flex items-center justify-center h-20 w-auto">
        <img 
          src="/BIS LOGO AGPL website.png"  // Assuming you put it in the public folder and named it logo.png
          alt="Aston Glass Pvt. Ltd. Logo" 
          className="object-contain h-30 w-auto"  // Sizes image without distortion
        />
      </div>


      {/* Loading bar */}
      <div className="w-36 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-red-400 rounded-full"
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
      <Certification />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}