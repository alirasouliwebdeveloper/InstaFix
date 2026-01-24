'use client';

import React from 'react';

const articles = [
  {
    title: '10 Signs You Need to Call a Plumber',
    excerpt: 'Learn the warning signs that indicate you should call a professional plumber to your home.',
    date: 'Jan 15, 2026',
    category: 'Plumbing',
    readTime: '5 min read',
  },
  {
    title: 'How to Prepare for an Electrical Service',
    excerpt: 'Make the most of your electrical service by following these simple preparation steps.',
    date: 'Jan 10, 2026',
    category: 'Electrical',
    readTime: '4 min read',
  },
  {
    title: 'Ultimate Spring Cleaning Checklist',
    excerpt: 'A comprehensive guide to deep cleaning your home this spring season.',
    date: 'Jan 5, 2026',
    category: 'Cleaning',
    readTime: '7 min read',
  },
];

export default function Articles() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Articles & Guides
            </h2>
            <p className="text-lg text-gray-600">
              Tips and insights to help you maintain your home
            </p>
          </div>
          <a href="#" className="hidden md:block text-blue-600 font-semibold hover:text-blue-700">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition cursor-pointer group">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <div className="text-5xl">📝</div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  );
}
