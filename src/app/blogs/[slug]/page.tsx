"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ReturnToTop from '@/components/ReturnToTop';
import { readableDate } from '@/utils/functions';
import { blogsData } from '@/utils/mockData/blogsData';
import { Jost, Montserrat } from 'next/font/google';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';

const jostFont = Jost({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

type Props = {
    params: {
        slug: string
    }
}

export default function Blog({ params }: Props) {
    const blog_id = params.slug;
    const blog = blogsData.find((blog) => blog.id === blog_id);

    if (!blog) {
        return (
            <div className="flex flex-col justify-center items-center gap-6 w-screen h-screen bg-black text-white text-center">
                <p className="text-5xl font-bold">404</p>
                <p className="text-3xl font-medium">Article Non trouvée</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-between items-center w-full min-h-[100vh] bg-ac-gray2">
            <ReturnToTop />
            <Navbar />

            <div className="flex flex-col justify-start items-center w-full bg-ac-gray2">
                <div className="flex flex-col justify-start items-start w-full gap-12 pt-10 px-6 sm:px-12 md:px-20 xm:px-6 lg:px-12 xl:px-20 mx-6 sm:mx-12 md:mx-20 xm:mx-6 lg:mx-12 xl:mx-20">
                    <h1 className={jostFont.className + " font-bold text-3xl xm:text-5xl lg:text-5xl xl:text-6xl text-start text-black"}>
                        {blog.title}
                    </h1>
                    <div className={montserratFont.className + " flex flex-col xm:flex-row justify-start items-start xm:items-center gap-6 xm:gap-32 font-medium text-xl text-start text-black"}>
                        <p>{readableDate(blog.date)}</p>
                        <p>par {blog.author.name}</p>
                    </div>
                </div>
                <div className={montserratFont.className + " w-[97%] flex flex-col xm:flex-row justify-start items-center xm:items-start rounded-md bg-white gap-16 py-8 px-2 fold:px-6 sm:px-12 md:px-20 xm:px-6 lg:px-12 xl:px-20 mx-2 fold:mx-6 sm:mx-12 md:mx-20 xm:mx-6 lg:mx-12 xl:mx-20 my-11"}>
                    {/* Article Body */}
                    <div className="flex w-full flex-col justify-start items-start gap-8">
                        <h5 className="uppercase font-medium text-base text-black text-start">Share</h5>
                        <div className="w-full h-px bg-black"></div>
                        <div className="flex flex-col justify-start items-start gap-10">
                            {blog.body.map(section => {
                                if (section.type === "image" && section.url) {
                                    return (
                                        <figure key={section.section} className='self-center text-center'>
                                            <Image width={500} height={500} src={section.url} alt={blog.id} />
                                            <figcaption>{section.imageCaption}</figcaption>
                                        </figure>
                                    )
                                }
                                if (section.type === "paragraph" && section.text) {
                                    return (
                                        <p key={section.section} className={"font-medium text-lg text-black text-start " + (section.section === 1 ? "indent-5" : "")}>
                                            {section.text}
                                        </p>
                                    )
                                }
                                if (section.type === "question" && section.text) {
                                    return (
                                        <p key={section.section} className={"font-semibold text-lg text-black text-start " + (section.section === 1 ? "indent-5" : "")}>
                                            {section.text}
                                        </p>
                                    )
                                }
                                if (section.type === "itemize" && section.items) {
                                    return (
                                        <div key={section.section} className="flex flex-col justify-start items-start gap-3 ml-5">
                                            {section.items.map((item) => {
                                                if (item.title === "" && item.body === "") {
                                                    return <></>
                                                }
                                                return (
                                                    <p key={item.title ? item.title : item.body} className="font-medium text-lg text-black text-start">
                                                        <span>● </span>
                                                        {item.title &&
                                                            <>
                                                                <span className='italic font-semibold'>{item.title}</span>
                                                                {" "} : {" "}
                                                            </>
                                                        }
                                                        {item.body}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    )
                                }
                                if (section.type === "enumerate" && section.items) {
                                    return (
                                        <div key={section.section} className="flex flex-col justify-start items-start gap-3 ml-5">
                                            {section.items.map((item, index) => {
                                                if (item.title === "" && item.body === "") {
                                                    return <></>
                                                }
                                                return (
                                                    <p key={item.title ? item.title : item.body} className="font-medium text-lg text-black text-start">
                                                        <span>{index + 1}. </span>
                                                        {item.body}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    )
                                }
                                if (section.type === "iframe" && section.url) {
                                    return (
                                        <iframe key={section.section} style={{ height: 100 * (9 / 16) + "vw" }} className={'max-w-full xm:!h-[280px] lg:!h-[360px] self-center'} allow="fullscreen" width={640} height={360} src={section.url} />
                                    )
                                }
                            })}
                        </div>
                    </div>
                    {/* Auteur Card */}
                    <div className="sticky top-48 flex flex-col justify-start items-center gap-6 px-2 fold:px-6 py-6 rounded-2xl bg-ac-gray mt-24">
                        <div className="flex justify-center items-center w-full relative -mt-24">
                            <div className="w-32 xs:w-40 h-32 xs:h-40 rounded-full absolute overflow-hidden bg-zinc-300"></div>
                            <Image className='object-contain object-center w-32 xs:w-40 h-32 xs:h-40 rounded-full border-2 border-zinc-500 z-30' src={blog.author.image} width={160} height={160} alt='user' />
                        </div>
                        <div className="flex flex-col justify-start items-center gap-4">
                            <div className="flex flex-col justify-start items-center gap-1">
                                <p className="uppercase font-bold text-2xl text-black text-center">{blog.author.name}</p>
                                <p className="font-semibold text-xl text-black text-center">{blog.author.job}</p>
                            </div>
                            <a target='_blank' href={blog.author.contact} className="flex justify-center items-center">
                                <AiFillLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}