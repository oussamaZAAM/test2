"use client";

import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Montserrat, Lato, IBM_Plex_Sans } from 'next/font/google';
import Image from 'next/image';
import ContactUsForm from '@/components/ContactUsForm';
import Link from 'next/link';

const montserratFont = Montserrat({ weight: "400", subsets: ["latin"] });
const latoFont = Lato({ weight: "400", subsets: ["latin"] });
const ibmFont = IBM_Plex_Sans({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Welcome to AleeConseil',
  description: 'Homepage',
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-ac-gray w-full">
      {/* Navbar  */}
      <Navbar />

      {/* Hero  */}
      <Hero />

      {/* Nos Services */}
      <div id='services' className="flex justify-center items-center bg-ac-bleu rounded-t-3xl w-full pb-28 px-4 pt-20">
        <div className="flex flex-col justify-start items-center gap-8 xm:gap-16">
          <h5 className={montserratFont.className + " font-medium text-4xl xm:text-5xl text-center text-white"}>Nos Services</h5>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-56">

            {/* Formations Service  */}
            <div className="flex flex-col justify-start items-center gap-4 max-w-[236px]">
              <Image className='w-24 h-24' width={96} height={96} src="/Homepage/formations.png" alt='service-formation' />
              <h6 className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Formations</h6>
              <p className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
              <Link href={"/formations"}>
                <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                  <h6 className={ibmFont.className + " text-ac-bleu uppercase text-xl font-bold"}>Accéder</h6>
                </div>
              </Link>
            </div>
            {/* Consulting Service  */}
            <div className="flex flex-col justify-start items-center gap-4 max-w-[236px]">
              <Image className='w-24 h-24' width={96} height={96} src="/Homepage/consulting.png" alt='service-formation' />
              <h6 className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Consulting</h6>
              <p className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed pulvinar turpis quis sem sodales
              </p>
              <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                <h6 className={ibmFont.className + " text-ac-bleu uppercase text-xl font-bold"}>Accéder</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex justify-center items-center w-full bg-ac-gray -translate-y-6 rounded-t-3xl">
        <ContactUsForm type='contact' />
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  )
}
