export default function About() {
    return (
<section id="about" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="w-full lg:w-1/2">
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Company Story</h2>
              <div className="w-20 h-1.5 bg-red-600 rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At <strong>Aston Glass Private Limited</strong>, we're passionate about delivering top-notch glass solutions for various applications. Since our inception in 2020, we've established ourselves as leading manufacturers of a wide range of toughened glasses, catering to diverse industries.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our expertise lies in crafting high-quality glasses for chimney organisations, corner serve bathroom accessories, pull-out drawers, tandem boxes, kitchen appliances, and OTG glasses. With in-house capabilities and a professional team, we're equipped to understand and meet our clients' unique needs.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gray-200 transform translate-x-4 translate-y-4 rounded-2xl"></div>
              <img src="/AGPL_Factory.png" alt="Modern Glass Architecture" className="rounded-2xl shadow-xl relative z-10 border-4 border-white " />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="element bg-gray-800 text-white p-10 md:p-12 rounded-2xl shadow-xl border-t-4 border-red-600 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl opacity-10">🎯</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-100">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                Our mission is to deliver innovative, high-quality glass solutions that exceed customer expectations, while fostering a culture of continuous improvement, safety, and customer satisfaction. We're committed to understanding our clients' requirements, iterating, and innovating to meet their expectations.
              </p>
            </div>
            <div className="element bg-gray-800 text-white p-10 md:p-12 rounded-2xl shadow-xl border-t-4 border-red-600 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-9xl opacity-10">👁️</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-100">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                Our vision is to be a leading provider of glass solutions in India, renowned for our commitment to quality, innovation, and customer satisfaction. We strive to build long-term relationships with our stakeholders, driving growth and success through our passion for glass craftsmanship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="bg-red-100 text-red-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-xl">🛡️</span> 
                Why Choose Us?
              </h3>
              <ul className="space-y-5">
                {['High-quality glass products tailored to your needs', 'Expert team with in-depth knowledge of glass manufacturing', 'State-of-the-art manufacturing facilities in Rajkot, Gujarat', 'Customized solutions with a focus on safety and innovation', 'Timely delivery and excellent customer support'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mt-0.5 mr-4 text-xl">✔</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="bg-gray-200 text-gray-700 w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-xl">📈</span> 
                Our Goals
              </h3>
              <ul className="space-y-5">
                {['Deliver high-quality glass products that meet customer expectations', 'Expand our product range to cater to diverse industries', 'Enhance customer satisfaction through innovative solutions', 'Foster a culture of continuous improvement and safety', 'Build strong relationships with stakeholders and drive business growth'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mt-0.5 mr-4 text-xl">➔</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}
