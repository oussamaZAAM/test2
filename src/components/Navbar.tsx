import { IBM_Plex_Sans_Condensed } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsSearch, BsXLg } from "react-icons/bs";
import { HiMenuAlt2, HiOutlineArrowRight } from "react-icons/hi";


const ibmFont = IBM_Plex_Sans_Condensed({ weight: "700", subsets: ['latin'] })

type Props = {}

export default function Navbar({ }: Props) {
    const [showMenu, setShowMenu] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    return (
        <div className={ibmFont.className + ' flex justify-center items-center w-full bg-white box-shadow sticky top-0 z-50'}>
            <div className="flex justify-between items-center w-11/12 lg:w-10/12 gap- xl:gap-8">
                {/* Hamburger Menu  */}
                <div onClick={() => setShowMenu(prev => !prev)} className="xm:hidden relative border-2 border-ac-violet rounded-md cursor-pointer">
                    <HiMenuAlt2 size={35} color='#644E9B' />
                </div>
                <div className={`xm:hidden flex justify-start items-center absolute top-20 left-0 w-full bg-white transition ${showMenu ? "translate-x-0 duration-300" : "-translate-x-full duration-75"}`}>
                    <ul className="flex flex-col justify-start items-center mx-4 w-full bg-white rounded gap-1 py-2 my-2">
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <Link href={"/formations"}>
                                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Formations</p>
                            </Link>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <Link href={"/consulting"}>
                                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Consulting</p>
                            </Link>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <Link href={"/blogs"}>
                                <p className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Blog</p>
                            </Link>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <a href="#footer" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Contact</a>
                        </li>
                        <li className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer'>
                            <a href="" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Qui sommes-nous?</a>
                        </li>
                        <Link href={"/consultez-nous"}>
                            <li className="w-11/12 sm:w-10/12 flex justify-center items-center bg-ac-violet rounded-lg gap-1 py-2.5 px-5 mt-2 cursor-pointer">
                                <p className="text-base uppercase font-bold text-center text-white whitespace-nowrap">Consultez-nous</p>
                                <HiOutlineArrowRight size={25} color='white' />
                            </li>
                        </Link>
                    </ul>
                </div>
                {/* Logo  */}
                <Link href={"/"}>
                    <div className="flex w-36 h-20 overflow-hidden cursor-pointer">
                        <img className='w-36 h-20 object-cover object-center' src="https://i.ibb.co/NxzmfDS/logo.png" height={400} width={400} alt='AleeConseil' />
                    </div>
                </Link>
                {/* Navs  */}
                {!searchBar && <div className="hidden xm:flex justify-start items-center gap-3 xl:gap-8">
                    <Link href={"/formations"}>
                        <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Formations</p>
                    </Link>
                    <Link href={"/consulting"}>
                        <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Consulting</p>
                    </Link>
                    <Link href={"/blogs"}>
                        <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Blog</p>
                    </Link>
                    <a href="#footer">
                        <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Contact</p>
                    </a>
                    <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Qui sommes-nous?</p>
                </div>}
                <div className={"xm:flex items-center transition " + (searchBar ? "flex w-1/2 opacity-100 scale-100 translate-x-0 duration-300" : "hidden w-0 scale-0 translate-x-full opacity-0 duration-75")}>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 tracking-wide"
                            placeholder="Découvrir..."
                        />
                    </div>
                </div>
                {/* Consultez-nous  */}
                <div className="flex justify-center items-center gap-4">
                    <div onClick={() => setSearchBar(prev => !prev)} className="flex justify-center items-center cursor-pointer hover:drop-shadow-md">
                        {searchBar
                            ? <BsXLg size={25} color='black' />
                            : <BsSearch size={25} color='black' />
                        }
                    </div>
                    <Link href={"/consultez-nous"}>
                        <div className="hidden xm:flex justify-center items-center bg-ac-violet rounded-full gap-1 py-2.5 px-5 w-fit cursor-pointer">
                            <p className="text-base uppercase font-bold text-center text-white whitespace-nowrap select-none">Consultez-nous</p>
                            <HiOutlineArrowRight size={25} color='white' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}