import React, { useEffect } from 'react'
export default function PrivacyPolicy() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
  return (
    
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
        
        {/* Header */}
        <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: March 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          {/* Introduction */}
          <div>
            <p>
              At <strong className="text-gray-900">Aston Glass Private Limited</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and engaging with our business.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">1</span>
              Information We Collect
            </h2>
            <p className="mb-4">We collect two types of information from our website visitors:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Information You Provide:</strong> When you fill out a contact or inquiry form, we collect your Company Name, Phone Number, Email Address, and Project Requirements.</li>
              <li><strong>Automated Information (Visitor Stats):</strong> Like most websites, we automatically collect non-identifiable data when you visit. This includes your IP address, browser type, device type, and the pages you view, which helps us understand website traffic and improve user experience.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">2</span>
              Cookies and Analytics
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies (such as Google Analytics) to track visitor activity. Cookies are small data files stored on your device that help us remember your preferences and analyze site performance. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">3</span>
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide accurate quotes for your glass requirements.</li>
              <li>To communicate with you regarding project updates, order processing, and delivery.</li>
              <li>To analyze website traffic and visitor behavior to improve our website design and functionality.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">4</span>
              Data Sharing and Security
            </h2>
            <p className="mb-4">
              <strong>We do not sell, rent, or trade your personal or business information to third parties.</strong> We only share data with trusted service providers (like web analytics and email hosting platforms) who assist us in operating our website, provided they agree to keep this information confidential.
            </p>
            <p>
              We implement standard industry security measures to protect your information from unauthorized access or disclosure. However, please be aware that no method of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">5</span>
              Contact Us
            </h2>
            <p className="mb-4">If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p><strong>Email:</strong> inq@astonglass.com </p>
              <p><strong>Phone:</strong> +91 95120 11163 </p>
              <div className="space-y-6">
                <p><strong>Address:</strong> </p>
  
  {/* Office */}
  <div>
    <h4 className="font-semibold text-red-500 mb-1">Corporate Office</h4>
    <p className="text-black-400 text-sm leading-relaxed">
      Nr. Rangoli Hotel, Lohanagar Main Road,<br />
      Gondal Road, Rajkot - 360004<br />
      (Gujarat) India.
    </p>
  </div>

  {/* Factory */}
  <div>
    <h4 className="font-semibold text-red-500 mb-1">Manufacturing Plant</h4>
    <p className="text-black-400 text-sm leading-relaxed">
      Laxmi Estate, Survey No. 693, Plot No. 1A,<br />
      Village: Khambha, Taluka: Lodhika,<br />
      District: Rajkot - 360311<br />
      (Gujarat) India.
    </p>
  </div>
</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}