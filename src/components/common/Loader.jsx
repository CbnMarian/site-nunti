"use client";

import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loading) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-olive-800">
      <div className="relative">
        <div className="w-20 h-20 border-t-4 border-b-4 border-gold-400 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-r-4 border-transparent rounded-full animate-pulse"></div>
        <p className="mt-4 text-white text-lg font-semibold">Se încarcă...</p>
      </div>
    </div>
  );
}

