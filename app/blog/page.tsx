"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { BookOpen } from "lucide-react"; // Importing the Book icon instead of the Eye icon

const companies = [
  {
    title: "Merck",
    href: "/projects/merck",
    summary: "A pharmaceutical company focusing on innovations in vaccines and therapies.",
    image: "/images/Merck_m_Letterpress.jpg",
    date: "2023-08-12",
    readTime: "5 min", // Estimated read time
  },
  {
    title: "Pfizer",
    href: "/projects/pfizer",
    summary: "Known for COVID-19 vaccine development, Pfizer leads in pharmaceuticals.",
    image: "/images/pfizer.png",
    date: "2023-09-05",
    readTime: "7 min", // Estimated read time
  },
  {
    title: "Johnson & Johnson",
    href: "/projects/johnson",
    summary: "Focusing on consumer health, medical devices, and pharmaceuticals.",
    image: "/images/J&J.png",
    date: "2023-07-22",
    readTime: "6 min", // Estimated read time
  },
];

// Simulating fetching of views from a database (example purposes)
export const revalidate = 60;
export default function ProjectsPage() {
  const featured = companies[0]; // Featured company (Merck)
  const top2 = companies[1]; // Pfizer
  const top3 = companies[2]; // Johnson & Johnson

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Featured Companies
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the most impactful companies and their latest projects.
          </p>
        </div>

        {/* Featured Section */}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={featured.href}>
              <article className="relative w-full h-full p-4 md:p-8">
                
                {/* Image on top */}
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  className="relative z-10 w-full h-25 p-2 rounded-xl object-cover group-hover:opacity-80 transition-opacity duration-500"
                />

                {/* Title */}
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  {featured.title}
                </h2>

                {/* Read Time and Date */}
                <div className="flex items-center justify-between gap-2 mt-2 text-zinc-400">
                  <div className="text-xs">
                    <time dateTime={new Date(featured.date).toISOString()}>
                      {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                        new Date(featured.date)
                      )}
                    </time>
                  </div>
                  <span className="flex items-center gap-1 text-xs">
                    <BookOpen className="w-4 h-4" /> {/* Book icon */}
                    {featured.readTime} {/* Displaying read time */}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.summary}
                </p>

                {/* Read more link */}
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          {/* Display the next two top companies */}
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((company) => (
              <Card key={company.href}>
                <Link href={company.href}>
                  <article className="relative w-full h-full p-4 md:p-8">
                    
                    {/* Image on top */}
					<div className="flex justify-center"> {/* This centers the image */}
            			<img 
              			src={company.image} 
              			alt={company.title} 
              			className="relative z-10 w-80 h-45 p-2 rounded-xl object-cover group-hover:opacity-80 transition-opacity duration-500"
            			/>
          			</div>

                    {/* Title */}
                    <h2 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                      {company.title}
                    </h2>

                    {/* Read Time and Date */}
                    <div className="flex items-center justify-between gap-2 mt-2 text-zinc-400">
                      <div className="text-xs">
                        <time dateTime={new Date(company.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                            new Date(company.date)
                          )}
                        </time>
                      </div>
                      <span className="flex items-center gap-1 text-xs">
                        <BookOpen className="w-4 h-4" /> {/* Book icon */}
                        {company.readTime} {/* Displaying read time */}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {company.summary}
                    </p>

                  </article>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* All companies section */}
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {companies.map((company, index) => (
            <Card key={company.href}>
              <Link href={company.href}>
                <article className="relative w-full h-full p-4 md:p-8">
                  
                  {/* Image on top */}
                  <img 
                    src={company.image} 
                    alt={company.title} 
                    className="relative z-10 w-full h-40 md:h-48 lg:h-56 p-2 rounded-xl object-cover group-hover:opacity-80 transition-opacity duration-500"
                  />

                  {/* Title */}
                  <h2 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                    {company.title}
                  </h2>

                  {/* Read Time and Date */}
                  <div className="flex items-center justify-between gap-2 mt-2 text-zinc-400">
                    <div className="text-xs">
                      <time dateTime={new Date(company.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                          new Date(company.date)
                        )}
                      </time>
                    </div>
                    <span className="flex items-center gap-1 text-xs">
                      <BookOpen className="w-4 h-4" /> {/* Book icon */}
                      {company.readTime} {/* Displaying read time */}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {company.summary}
                  </p>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
