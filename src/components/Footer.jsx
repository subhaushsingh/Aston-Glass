import { useEffect, useState } from 'react';
import { db } from '../firebase.js';
import { ref, runTransaction, onValue } from 'firebase/database';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom'; 

export default function Footer() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const visitorRef = ref(db, 'visitors/count');
    runTransaction(visitorRef, (current) => (current || 0) + 1);
    onValue(visitorRef, (snapshot) => setCount(snapshot.val()));
  }, []);

  return (
    <footer className="bg-slate-950 text-white/70 py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="font-light">&copy; {new Date().getFullYear()} Aston Glass Pvt Ltd. All rights reserved.</p>
        
        {/* 2. Add your Legal Links using <Link to="..."> */}
        <div className="flex space-x-6 text-sm">
          <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link to="/TermsAndConditions" className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </Link>
        </div>

        {count && (
          <p className="text-sm text-white/70 font-light">👁 {count.toLocaleString()} visitors</p>
        )}

      </div>
    </footer>
  )
}