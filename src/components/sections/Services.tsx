'use client';

import React from 'react';

const services = [
  { title: 'Plumbing', icon: '🔧', rating: '4.9', reviews: '2.3k' },
  { title: 'Electrical', icon: '⚡', rating: '4.8', reviews: '1.9k' },
  { title: 'Cleaning', icon: '🧹', rating: '5.0', reviews: '3.1k' },
  { title: 'Painting', icon: '🎨', rating: '4.7', reviews: '1.5k' },
  { title: 'Carpentry', icon: '🔨', rating: '4.9', reviews: '1.2k' },
  { title: 'HVAC', icon: '❄️', rating: '4.8', reviews: '987' },
  { title: 'Landscaping', icon: '🌿', rating: '4.9', reviews: '1.8k' },
  { title: 'Appliance Repair', icon: '🔌', rating: '4.8', reviews: '1.4k' },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What service do you need?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our most popular services and find the perfect professional for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl group-hover:bg-blue-100 transition">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold text-gray-900">{service.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{service.reviews} reviews</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Professional {service.title.toLowerCase()} services by verified experts
              </p>

              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                View Pros
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-8 py-3 rounded-lg transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
