import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 2000, suffix: "+", label: "Our Customers", format: "plain" },
  { target: 100000, suffix: "+ pcs", label: "Glass Supplied", format: "indian" },
  { target: 32800, suffix: " +Sq. Ft.", label: "Manufacturing Footprint", format: "comma" },
  { target: 6, suffix: "yr+", label: "Years of Experience", format: "plain" },
];

function formatNumber(value, format) {
  if (format === "indian") return value.toLocaleString("en-IN");
  if (format === "comma") return value.toLocaleString("en-US");
  return value.toString();
}

function useCountUp(target, duration = 1800, triggered) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return count;
}

function StatItem({ stat, triggered, delay }) {
  const count = useCountUp(stat.target, 1800, triggered);
  return (
    <div
      className="text-center px-4"
      style={{
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div className="flex items-baseline justify-center gap-1">
        <span
          className="text-gray-900 font-extrabold"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1, letterSpacing: "-1px" }}
        >
          {formatNumber(count, stat.format)}
        </span>
        <span
          className="text-red-600 font-bold"
          style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
        >
          {stat.suffix}
        </span>
      </div>
      <div className="w-10 h-1 bg-red-600 mx-auto my-3 rounded-full" />
      <p className="text-gray-500 text-sm tracking-widest uppercase font-semibold">
        {stat.label}
      </p>
    </div>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative bg-white overflow-hidden border-b border-gray-100">
      {/* Decorative diagonal lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 280"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#d1d5db" strokeWidth="1" fill="none" opacity="0.5">
          <path d="M0,60 Q400,10 1200,180" />
          <path d="M0,140 Q500,50 1200,120" />
          <path d="M100,0 Q700,160 1100,280" />
          <path d="M0,230 Q450,80 1200,220" />
          <path d="M300,0 Q800,200 1200,60" />
          <path d="M0,30 Q350,190 1200,150" />
          <path d="M0,270 Q600,70 1200,260" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto py-16 px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            By The Numbers
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Aston Glass at a Glance</h2>
          <div className="w-20 h-1.5 bg-red-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Divider lines between stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
          {stats.map((stat, i) => (
            <div key={i} className={`relative ${i < stats.length - 1 ? "lg:border-r border-gray-200" : ""}`}>
              <StatItem stat={stat} triggered={triggered} delay={i * 130} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* ── Stats Counter ── */}
      <StatsSection />

      {/* ── Existing About Content ── */}
      <div className="py-24 px-6">
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
                Our expertise lies in crafting high-quality Glasses For Household Chimney Organisations, Cooktop Organisations, Corner - Shelf Glasses For Bathroom Accessories, Bottle Pull-Out Glasses, Tandem Box Glasses ,Kitchen Appliances Glasses - OTG, Microwave etc and Even COP and LOP Glasses For Lift Panels and other Customized Glasses. With in-house capabilities and a professional team, we're equipped to understand and meet our clients' unique needs.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gray-200 transform translate-x-4 translate-y-4 rounded-2xl"></div>
              <img src="/AGPL_Factory.png" alt="Modern Glass Architecture" className="rounded-2xl shadow-xl relative z-10 border-4 border-white" />
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
                Our vision is to become India's most trusted and technologically advanced brand in tempered and designer glass manufacturing. As a leading provider of comprehensive glass solutions, we set new benchmarks in quality, innovation, and customer satisfaction, striving to build long-term stakeholder relationships and drive mutual growth through our passion for craftsmanship.
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
                {[
                  'High-quality glass products tailored to your needs',
                  'Expert team with in-depth knowledge of glass manufacturing',
                  'State-of-the-art manufacturing facilities in Rajkot, Gujarat',
                  'Customized solutions with a focus on safety and innovation',
                  'Timely delivery and excellent customer support',
                  'Best Level Q.C and 100% Inspection',
                  'Every Tests Done On Every Product Before Dispatch.',
                ].map((item, index) => (
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
                {[
                  'Deliver high-quality glass products that meet customer expectations',
                  'Expand our product range to cater to diverse industries',
                  'Enhance customer satisfaction through innovative solutions',
                  'Foster a culture of continuous improvement and safety',
                  'Build strong relationships with stakeholders and drive business growth',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mt-0.5 mr-4 text-xl">➔</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}