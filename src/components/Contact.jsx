const contactDetails = [
  { icon: '📍', label: 'Factory', value: 'Industrial Phase II, Kolkata, West Bengal' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email', value: 'sales@astonglass.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div
        className="bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl relative"
        style={{ backgroundImage: "url('/contact.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-0" />

        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row gap-12 text-white">

          {/* Info */}
          <div className="w-full md:w-5/12">
            <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
            <h2 className="text-4xl font-extrabold mb-4">Request a Bulk Quote</h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Partner with us for your next commercial project. Reach out to our sales engineering
              team today and let's build something lasting.
            </p>

            <div className="space-y-6 text-gray-200">
              {contactDetails.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start">
                  <span className="text-cyan-400 text-xl mr-4 mt-1">{icon}</span>
                  <p>
                    <strong>{label}:</strong>
                    <br />
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="w-full md:w-7/12 rounded-2xl p-8 border border-white/20 shadow-2xl"
            style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          >
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition placeholder-gray-500"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Project Details & Specifications</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition placeholder-gray-500"
                  placeholder="Tell us about glass thickness, dimensions, and total square footage needed..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-600/30 hover:-translate-y-0.5 transform"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}