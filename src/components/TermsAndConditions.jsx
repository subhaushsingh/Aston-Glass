import React, { useEffect } from 'react';

export default function TermsAndConditions() {
  
  // Failsafe Scroll: Ensures the page loads at the top
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(scrollTimeout); 
  }, []);

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
        
        {/* Header */}
        <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-500">Effective Date: March 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          {/* Introduction */}
          <div>
            <p>
              Welcome to <strong className="text-gray-900">Aston Glass Private Limited</strong>. By accessing our website or placing an order for our glass products and services, you agree to be bound by the following Terms and Conditions. Please read them carefully.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">1</span>
              Quotations and Orders
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All quotations provided are valid for a period of 7 days unless otherwise specified in writing.</li>
              <li>An order is only considered accepted once confirmed by us in writing and accompanied by the agreed-upon advance payment.</li>
              <li>Because our tempered and designer glass products are custom-manufactured to client specifications, orders cannot be canceled or modified once the workorder has been generated.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">2</span>
              Manufacturing Tolerances
            </h2>
            <p className="mb-4">
              Glass manufacturing is subject to standard industry tolerances. While we adhere strictly to BIS standards (including ISO 9001:2015 and safety glass guidelines):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minor variations in thickness, dimensions, and color tint may occur within acceptable industrial limits.</li>
              <li>Customers are responsible for providing precise measurements and specifications prior to order confirmation.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">3</span>
              Delivery and Inspection
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery dates are estimates and made in good faith. We are not liable for delays caused by unforeseen circumstances, including raw material shortages, transport strikes, or acts of God.</li>
              <li><strong>Risk of Loss:</strong> The risk of breakage or damage transfers to the buyer upon delivery at the specified site or upon handover to the buyer's designated transport vehicle.</li>
              <li>Customers must inspect all glass products immediately upon receipt. Any claims regarding shortages, visible defects, or breakage must be reported to the delivery personnel and noted on the delivery challan immediately.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">4</span>
              Warranties and Liability
            </h2>
            <p className="mb-4">
              We warrant that our products meet the specified technical parameters at the time of dispatch. However, Aston Glass Private Limited shall not be held liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Spontaneous breakage of tempered glass (such as due to nickel sulfide inclusions), which is an inherent, unavoidable characteristic of the product.</li>
              <li>Damage resulting from improper handling, faulty installation, or post-delivery modifications by third parties.</li>
              <li>Indirect, incidental, or consequential damages arising from the use or inability to use our products.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">5</span>
              Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms, or any business transactions with Aston Glass Private Limited, shall be subject to the exclusive jurisdiction of the courts located in Rajkot, India.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}