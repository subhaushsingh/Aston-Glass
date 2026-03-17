import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Services from './components/Services'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Map from './components/Map'
import BestProducts from './components/BestProducts'
import Footer from './components/Footer'

function Splash() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">

      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src="/loading_img.jpg"
          alt="Aston Glass Pvt. Ltd. Logo"
          className="object-contain h-40 w-auto"
        />
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gray-300/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 rounded-full"
          style={{ animation: 'loadbar 2s ease forwards' }}
        />
      </div>

      <style>{`
        @keyframes loadbar {
          0% { width: 0% }
          50% { width: 65% }
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
      <Certification />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}