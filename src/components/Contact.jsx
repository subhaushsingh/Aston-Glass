import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_a85gtm2',
        'template_f9ygb2s',
        formRef.current,
        'C04vNf3V3ipt534nd'
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div
        style={{ backgroundImage: "url('/form.png')" }}
        className="bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 text-white">
          <div className="w-full md:w-5/12">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
            <h2 className="text-4xl font-extrabold mb-4">Request a Bulk Quote</h2>
            <p className="text-gray-300 mb-10 leading-relaxed">Partner with us for your next commercial project. Reach out to our sales engineering team today and let's build something lasting.</p>

            <div className="space-y-6 text-gray-200">
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-4 mt-1">📍</span>
                <p><strong>Office:</strong><br />Nr. Rangoli Hotel, Lohanagar Main Road, Gondal Road, Rajkot- 360004 (Gujarat) India.</p>
                <span className="text-red-500 text-xl mr-4 mt-1">📍</span>
                <p><strong>Factory:</strong><br />Laxmi Estate, Survey No. 693, Plot No. 1A, Village: Khambha, Taluka: Lodhika, District: Rajkot - 360311 (Gujarat.) India.</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-4 mt-1">📞</span>
                <p><strong>Phone:</strong><br />
                  <a href="tel:+919512011163" className="text-pink-400 hover:text-red-500 transition-colors">+91 95120 11163</a><br />
                  <a href="tel:+919735253111" className="text-pink-400 hover:text-red-500 transition-colors">+91 97352 53111</a>
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-4 mt-1">💬</span>
                <p><strong>WhatsApp:</strong><br />
                  <a href="https://wa.me/919512011163" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-red-500 transition-colors">+91 95120 11163</a><br />
                   <a href="https://wa.me/9735253111" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-red-500 transition-colors">+91 97352 53111</a>
                </p>
              </div>
               
              
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-4 mt-1">✉️</span>
                <p><strong>Email:</strong><br />
                  <a href="mailto:inq@astonglass.com" className="text-gray-400 hover:text-red-500 transition-colors">inq@astonglass.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12 dark-glass-panel rounded-2xl p-8 border border-white/10 shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition placeholder-gray-500"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Project Details & Specifications</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition placeholder-gray-500"
                  placeholder="Tell us about glass thickness, dimensions, and total square footage needed..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-red-600 to-gray-700 text-white font-bold py-4 rounded-lg hover:from-red-500 hover:to-gray-600 transition-all shadow-lg shadow-red-600/30 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">✅ Inquiry sent! We'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}