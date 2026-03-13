export default function Hero() {
    return (
        <header id="home"
            className="relative bg-slate-900 text-white text-center py-40 px-6 min-h-screen flex items-center justify-center">

            {/* Background Image */}
            <div
                className="absolute inset-0 opacity-40 bg-cover bg-center border-b border-white/10"
                style={{
                    backgroundImage: "url('/bg.png')", backgroundAttachment: 'fixed',
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto mt-10">
                <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4 block">
                    Premium Glass Manufacturing
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                    Precision Toughening for{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Modern Infrastructure
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                    Delivering high-strength, safety-certified architectural and industrial glass solutions
                    with state-of-the-art tempering technology.
                </p>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#capabilities"
                        className="bg-cyan-600 hover:bg-cyan-500 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-cyan-600/30 hover:-translate-y-1 transform">
                        View Capabilities
                    </a>
                    <a href="#contact"
                        className="bg-transparent border border-gray-400 hover:border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all hover:-translate-y-1 transform">
                        Contact Sales
                    </a>
                </div>
            </div>
        </header>
    )
}