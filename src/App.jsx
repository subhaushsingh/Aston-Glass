import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Map from './components/Map';
import BestProducts from './components/BestProducts';
import Footer from './components/Footer';
import PrivacyPolicy from './components/Policy';
import TermsAndConditions from './components/TermsAndConditions';
import ProductPage from './components/ProductPage'; // <-- ADDED: Import the new Product page

// Splash Screen Component
function Splash() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">
      <div className="flex items-center justify-center">
        <img
          src="/loading_img.jpg"
          alt="Aston Glass Pvt. Ltd. Logo"
          className="object-contain h-40 w-auto"
        />
      </div>
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
  );
}

// Fixed floating buttons
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* Phone */}
      <a
        href="tel:+919512011163"
        aria-label="Call us"
        className="group w-13 h-13 bg-red-600 hover:bg-red-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ width: '52px', height: '52px' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919512011163"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group w-13 h-13 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ width: '52px', height: '52px' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-5 h-5">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.67 4.88 1.93 7.02L2 30l7.19-1.88A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.82-1.59l-.42-.25-4.27 1.12 1.14-4.17-.27-.44A11.5 11.5 0 1116 27.5zm6.29-8.62c-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.88 1.12-1.08 1.35-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.69 5.87 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.08-.14-.31-.23-.65-.4z"/>
        </svg>
      </a>

    </div>
  );
}

// Home Component
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Capabilities />
      <Services />
      <BestProducts />
      <Certification />
      <Contact />
      <Map />
    </>
  );
}

// Main App Component
export default function App() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
      setTimeout(() => setVisible(true), 50);
    }, 1600);
  }, []);

  return (
    <BrowserRouter>
      {!ready ? (
        <Splash />
      ) : (
        <div
          className={`flex flex-col min-h-screen bg-gray-50 text-gray-800 antialiased transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Existing Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
              
              {/* ADDED: New Product Page Route */}
              <Route path="/products" element={<ProductPage />} />
            </Routes>
          </main>
          <Footer />

          {/* Fixed floating buttons — visible on all pages */}
          <FloatingButtons />
        </div>
      )}
    </BrowserRouter>
  );
}