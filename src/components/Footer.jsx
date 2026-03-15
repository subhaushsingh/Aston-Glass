import { useEffect, useState } from 'react';
import { db } from '../firebase.js';
import { ref, runTransaction, onValue } from 'firebase/database';

export default function Footer() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const visitorRef = ref(db, 'visitors/count');
    runTransaction(visitorRef, (current) => (current || 0) + 1);
    onValue(visitorRef, (snapshot) => setCount(snapshot.val()));
  }, []);

  return (
    <footer className="bg-slate-950 text-white/70 py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <p className="font-light">&copy; 2026 Aston Glass Pvt Ltd. All rights reserved.</p>
        {count && (
          <p className="text-sm text-white/70 font-light">👁 {count.toLocaleString()} visitors</p>
        )}
      </div>
    </footer>
  )
}