'use client';

import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Choose Service',
    description: 'Select from our wide range of home services',
  },
  {
    number: '2',
    title: 'Get Matched',
    description: 'We connect you with verified local professionals',
  },
  {
    number: '3',
    title: 'Book & Confirm',
    description: 'Pick a time that works best for you',
  },
  {
    number: '4',
    title: 'Get It Done',
    description: 'Your professional completes the job perfectly',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How InstaFix Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get professional help in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Arrow connecting steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)]">
                  <svg className="w-full h-2 text-blue-200" fill="none" viewBox="0 0 100 2">
                    <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
