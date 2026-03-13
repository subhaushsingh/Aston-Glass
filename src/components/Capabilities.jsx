const capabilities = [
  {
    icon: '📏',
    title: 'Thickness Range',
    description: 'Capable of tempering glass from 4mm up to 19mm for diverse architectural and structural requirements.',
  },
  {
    icon: '🏢',
    title: 'Maximum Jumbo Size',
    description: 'Our modern furnaces easily accommodate jumbo glass sheets up to an impressive 2440mm x 3660mm.',
  },
  {
    icon: '🛡️',
    title: 'Quality Compliance',
    description: 'Rigorous fragmentation and impact testing ensuring complete adherence to global safety standards.',
  },
]

function CapabilityCard({ icon, title, description }) {
  return (
    <div
      className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-cyan-600 text-center relative overflow-hidden group"
      style={{ transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-10px)'
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(8,145,178,0.15), 0 10px 10px -5px rgba(8,145,178,0.05)'
        e.currentTarget.style.borderTopColor = '#0891b2'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = ''
        e.currentTarget.style.borderTopColor = '#0891b2'
      }}
    >
      {/* Decorative corner bg */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

      <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Manufacturing Capabilities</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {capabilities.map((cap) => (
          <CapabilityCard key={cap.title} {...cap} />
        ))}
      </div>
    </section>
  )
}