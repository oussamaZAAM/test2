"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { readableDate } from '@/utils/functions';
import { Blog } from '@/utils/interfaces';
import { blogsData } from '@/utils/mockData';
import { Jost, Lato, Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';

const jostFont = Jost({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });
const latoFont = Lato({ weight: "400", subsets: ["latin"] });

type Props = {}

export default function Blog({}: Props) {
    const blog = blogsData[0];

    // const pathname = usePathname();
    // const blog_id = pathname.split("/")[pathname.split("/").length - 1];
    // const blog = blogsData[parseInt(blog_id) - 1] !== undefined ? blogsData[parseInt(blog_id) - 1] : false;

    // if (!blog) {
    //     return (<div>Blog Bot Found</div>)
    // }

    return (
        <div className="flex flex-col justify-start items-center w-full bg-ac-gray2">
            <Navbar />

            <div className="flex flex-col justify-start items-start w-full gap-12 pt-10 px-6 sm:px-12 md:px-20 xm:px-6 lg:px-12 xl:px-20 mx-6 sm:mx-12 md:mx-20 xm:mx-6 lg:mx-12 xl:mx-20">
                <h1 className={jostFont.className + " font-bold text-3xl xm:text-5xl lg:text-5xl xl:text-6xl text-start text-black"}>
                    {blog.title}
                </h1>
                <div className={montserratFont.className + " flex flex-col xm:flex-row justify-start items-start xm:items-center gap-6 xm:gap-32 font-medium text-xl text-start text-black"}>
                    <p>{readableDate(blog.date)}</p>
                    <p>par {blog.author.name}</p>
                </div>
            </div>

            <div className={montserratFont.className + " w-[90%] flex flex-col xm:flex-row justify-start items-center xm:items-start rounded-md bg-white gap-16 py-8 px-2 fold:px-6 sm:px-12 md:px-20 xm:px-6 lg:px-12 xl:px-20 mx-2 fold:mx-6 sm:mx-12 md:mx-20 xm:mx-6 lg:mx-12 xl:mx-20 my-11"}>
                {/* Article Body */}
                <div className="flex w-full flex-col justify-start items-start gap-8">
                    <h5 className="uppercase font-medium text-base text-black text-start">Share</h5>
                    <div className="w-full h-px bg-black"></div>
                    <div className="flex flex-col justify-start items-start gap-6">
                        <p className={latoFont.className + " font-medium text-lg text-black text-start first-letter:text-7xl first-letter:font-bold first-letter:mr-1 indent-5"}>
                            {blog.body.split("\n\n")[0]}
                        </p>
                        {blog.body.split("\n\n").slice(1).map(paragraph => {
                            return (
                                <p key={paragraph} className={latoFont.className + " font-medium text-lg text-black text-start indent-5"}>
                                    {paragraph}
                                </p>
                            )
                        })}
                    </div>
                </div>

                {/* Auteur Card */}
                <div className="sticky top-48 flex flex-col justify-start items-center gap-6 px-2 fold:px-6 py-6 rounded-2xl bg-ac-gray mt-24">
                    <div className="flex justify-center items-center w-full relative -mt-24">
                        <div className="w-32 xs:w-40 h-32 xs:h-40 rounded-full absolute overflow-hidden bg-zinc-300"></div>
                        <img loading='lazy' decoding='async' className='object-contain object-center w-32 xs:w-40 h-32 xs:h-40 rounded-full border-2 border-zinc-500 z-30' src={"https://i.ibb.co/pK6T2DN/user.png"} width={160} height={160} alt='user' />
                    </div>
                    <div className="flex flex-col justify-start items-center gap-10">
                        <div className="flex flex-col justify-start items-center">
                            <p className="uppercase font-bold text-2xl text-black text-center">{blog.author.name}</p>
                            <p className="font-semibold text-xl text-black text-center">{blog.author.job}</p>
                        </div>
                        <p className="font-normal text-base text-black text-center fold:w-[248px] xm:w-auto xm:min-w-[248px]">
                            {blog.author.description}
                        </p>
                    </div>
                </div>
            </div>
