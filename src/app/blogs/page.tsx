"use client";

import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Blog } from '@/utils/interfaces';
import { Jost, Montserrat } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const jostFont = Jost({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

type Props = {}

const blogsData: Blog[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: { name: "John Doe", job: "Formateur", description: "Proin nec massa massa. Fusce placerat justo nisi" },
    date: new Date("2023-07-10"),
  },
  {
    id: "2",
    title: "CSS Tips and Tricks",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    author: { name: "Jane Smith", job: "Testeur", description: "Proin nec massa massa. Fusce placerat justo nisi" },
    date: new Date("2023-07-08"),
  },
  {
    id: "3",
    title: "JavaScript Best Practices",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus.At vero eos et accusamus et iusto odio dignissimos ducimus.At vero eos et accusamus et iusto odio dignissimos ducimus.",
    author: { name: "Alex Johnson", job: "Formateur", description: "Proin nec massa massa. Fusce placerat justo nisi" },
    date: new Date("2023-07-05"),
  },
];

export default function Blogs({ }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  // Listener si la taille de l'écran est changée
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const divHeight = divRef.current?.clientHeight;
    if (divHeight) {
      const marginTopValue = `${-divHeight / 2}px`;
      divRef.current.style.marginTop = marginTopValue;
    }
  }, [screenHeight]);

  return (
    <div className="flex flex-col justify-start items-center w-full bg-ac-gray">
      <Navbar />

      {/* Blogs Hero */}
      <div className="relative parallax-blogs flex justify-start items-center w-full py-36 px-24">
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>
        <h1 className={jostFont.className + " text-white font-bold text-5xl text-left z-30"}>Alee Conseil Blogs</h1>
      </div>

      <div className="flex flex-col justify-start items-center w-full bg-ac-gray gap-24 mb-24">
        <div ref={divRef} className="bg-ac-gray flex justify-center items-center relative rounded-t-xl px-4 fold:px-12 sm:px-20 py-2 fold:py-3 sm:py-5 z-30">
          <div className="absolute -right-5 bottom-1/2 h-5 w-5 rounded-bl-xl bg-[#00000050] z-20"></div>
          <div className="absolute -right-5 bottom-1/2 h-5 w-5 bg-ac-gray z-10 border-0"></div>
          <div className="absolute -left-5 bottom-1/2 h-5 w-5 rounded-br-xl bg-[#00000050] z-20"></div>
          <div className="absolute -left-5 bottom-1/2 h-5 w-5 bg-ac-gray z-10 border-0"></div>
          <h2 className={montserratFont.className + " font-semibold text-xl sm:text-2xl xm:text-3xl lg:text-4xl text-black text-center"}>Derniers Articles</h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
          {blogsData.map(blog => {
            return (
              <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}