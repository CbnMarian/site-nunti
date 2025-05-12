"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
    services: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          services: [...prev.services, value]
        };
      } else {
        return {
          ...prev,
          services: prev.services.filter(service => service !== value)
        };
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulăm trimiterea datelor (aici ați implementa logica reală de trimitere)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form după 3 secunde
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          message: '',
          services: []
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">Contactează-ne</h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            Suntem aici pentru a face evenimentul tău special. Completează formularul și te vom contacta cât mai curând.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {submitSuccess ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded-lg text-center mb-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Mulțumim pentru mesaj!</h3>
              <p>Te vom contacta în cel mai scurt timp pentru a discuta despre evenimentul tău.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label className="block text-olive-700 text-sm font-bold mb-2" htmlFor="name">
                    Nume și Prenume
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-olive-500"
                    placeholder="Numele tău complet"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-olive-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-olive-500"
                    placeholder="email@exemplu.com"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-olive-700 text-sm font-bold mb-2" htmlFor="phone">
                    Telefon
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-olive-500"
                    placeholder="Număr de telefon"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-olive-700 text-sm font-bold mb-2" htmlFor="date">
                    Data Evenimentului
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-olive-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-olive-700 text-sm font-bold mb-2">
                  Servicii de interes
                </label>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="cabina-foto"
                      checked={formData.services.includes('cabina-foto')}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-olive-600 h-5 w-5"
                    />
                    <span className="ml-2">Cabină Foto</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="fum-greu"
                      checked={formData.services.includes('fum-greu')}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-olive-600 h-5 w-5"
                    />
                    <span className="ml-2">Fum Greu</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="artificii"
                      checked={formData.services.includes('artificii')}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-olive-600 h-5 w-5"
                    />
                    <span className="ml-2">Artificii</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="gheata-carbonica"
                      checked={formData.services.includes('gheata-carbonica')}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-olive-600 h-5 w-5"
                    />
                    <span className="ml-2">Gheață carbonică</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-olive-700 text-sm font-bold mb-2" htmlFor="message">
                  Mesaj
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-olive-500 h-32"
                  placeholder="Spune-ne mai multe despre evenimentul tău..."
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center justify-center">
                <button 
                  type="submit" 
                  className="bg-olive-700 hover:bg-olive-800 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
