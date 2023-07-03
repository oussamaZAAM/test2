import { IBM_Plex_Sans_Condensed } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt2, HiOutlineArrowRight } from "react-icons/hi";


const ibm = IBM_Plex_Sans_Condensed({ weight: "700", subsets: ['latin'] })

type Props = {}

export default function Navbar({ }: Props) {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className={ibm.className + ' flex justify-center items-center w-full bg-white box-shadow'}>
            <div className="flex justify-between items-center w-11/12 lg:w-10/12 gap-4 xl:gap-8">
                {/* Hamburger Menu  */}
                <div onClick={() => setShowMenu(prev => !prev)} className="xm:hidden relative border-2 border-ac-violet rounded-md cursor-pointer">
                    <HiMenuAlt2 size={35} color='#644E9B' />
                </div>
                <div className={"xm:hidden flex justify-start items-center absolute top-20 left-0 w-full bg-white rounded transition " + (showMenu ? "translate-x-0 duration-300" : "-translate-x-full duration-75")}>
                    <ul className="flex flex-col justify-start items-center mx-4 w-full bg-white rounded gap-1 py-2 my-2">
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Formations</a>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Consulting</a>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Blog</a>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Contact</a>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Qui sommes-nous?</a>
                        </li>
                        <li className="w-11/12 sm:w-10/12 flex justify-center items-center bg-ac-violet rounded-lg gap-1 py-2.5 px-5 mt-2 cursor-pointer">
                            <p className="text-base uppercase font-bold text-center text-white whitespace-nowrap">Consultez-nous</p>
                            <HiOutlineArrowRight size={25} color='white' />
                        </li>
                    </ul>
                </div>
                {/* Logo  */}
                <div className="flex w-36 h-20 overflow-hidden cursor-pointer">
                    <Image className='w-36 h-20 object-cover object-center' src="/logo.png" height={400} width={400} alt='AleeConseil' />
                </div>
                {/* Navs  */}
                <div className="hidden xm:flex justify-start items-center gap-4 xl:gap-8">
                    <p className="text-base uppercase font-semibold text-center text-black whitespace-nowrap">Formations</p>
                    <p className="text-base uppercase font-semibold text-center text-black whitespace-nowrap">Consulting</p>
                    <p className="text-base uppercase font-semibold text-center text-black whitespace-nowrap">Blog</p>
                    <p className="text-base uppercase font-semibold text-center text-black whitespace-nowrap">Contact</p>
                    <p className="text-base uppercase font-semibold text-center text-black whitespace-nowrap">Qui sommes-nous?</p>
                </div>
                {/* Consultez-nous  */}
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center">
                        <BsSearch size={25} color='black' />
                    </div>
                    <div className="hidden xm:flex justify-center items-center bg-ac-violet rounded-full gap-1 py-2.5 px-5 w-fit cursor-pointer">
                        <p className="text-base uppercase font-bold text-center text-white whitespace-nowrap">Consultez-nous</p>
                        <HiOutlineArrowRight size={25} color='white' />
                    </div>
                </div>
            </div>
        </div>
    )
}