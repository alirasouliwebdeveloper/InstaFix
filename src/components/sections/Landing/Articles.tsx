"use client";

import React from "react";
import Image from "next/image";
import { Article as ArticleType } from "@/types";
import article1 from "@/assets/images/Articles/article_01.png";
import article2 from "@/assets/images/Articles/article_02.png";
import article3 from "@/assets/images/Articles/article_03.png";
import Link from "next/link";
import arrowSVG from "@/assets/images/svg/arrow-up-right.svg";

const articles: ArticleType[] = [
  {
    title: "How to Choose the Right Professional",
    excerpt:
      "Learn how to find trusted, verified professionals for your home service projects across Alberta.",
    image: article1,
    url: "/",
  },
  {
    title: "Understanding Home Service Costs",
    excerpt:
      "A simple guide to pricing for renovations, plumbing, electrical, and other common home services in Alberta",
    image: article2,
    url: "/",
  },
  {
    title: "What to Know Before Renovating",
    excerpt:
      "Key things to consider before starting a home or basement renovation to save time and avoid extra costs.",
    image: article3,
    url: "/",
  },
];

export default function Articles() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-colors-primary mb-4">
            Articles & Guides
          </h2>
          <p className="text-lg text-colors-muted">
            Expert tips, practical guides, and the latest insights on home
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#FCFCFC] rounded-xl overflow-hidden shadow-sm border border-gray-200 px-4 py-6"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform rounded-2xl"
                />
              </div>

              <div className="pt-5">
                <h3 className="text-[20px] font-semibold text-colors-primary mb-4 group-hover:text-blue-600 transition">
                  {article.title}
                </h3>

                <p className="text-colors-muted mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={article.url}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1"
                  >
                    Read post
                    <Image src={arrowSVG} alt="arrow" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
