"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

const blogs = [
	{
		title: "Merck",
		href: "/blog/merck",
		summary: "Blah Blah Blah",
		image: "/images/merck-image.jpeg",
	},
	{
		title: "Pfizer",
		href: "/blog/pfizer",
		summary: "Blah Blah Blah",
		image: "/images/pfizer.png", // Replace with actual image path
	},
	{
		title: "J&J",
		href: "/blog/j&j",
		summary: "Blah Blah Blah",
		image: "/images/J&J.png", // Replace with actual image path
	},
];

export default function BlogLinks() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{blogs.map((blog) => (
						<Card key={blog.href}>
							<Link
								href={blog.href}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
							>
								{/* Render the blog image */}
								<img 
									src={blog.image}
									alt={blog.title}
									className="relative z-10 w-full h-48 rounded-lg object-cover group-hover:opacity-80 duration-500"
									/>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{blog.title}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{blog.summary}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
