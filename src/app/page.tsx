import AnimatedElement from '@/components/AnimatedElement';
import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ReturnToTop from '@/components/ReturnToTop';
import { homepage } from "@/content/pages";
import { googleMapsEmbed } from '@/utils/constants';

import { IBM_Plex_Sans, Lato, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const montserratFont = Montserrat({ weight: "400", subsets: ["latin"] });
const latoFont = Lato({ weight: "400", subsets: ["latin"] });
const ibmFont = IBM_Plex_Sans({ weight: "700", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-ac-gray w-full">
      <ReturnToTop />

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
              <h6 className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Formation</h6>
              <p className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                {homepage.formations}
              </p>
              <Link href={"/formations"}>
                <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                  <h6 className={ibmFont.className + " text-ac-bleu uppercase text-xl font-bold"}>Catalogue</h6>
                </div>
              </Link>
            </div>
            {/* Consulting Service  */}
            <div className="flex flex-col justify-start items-center gap-4 max-w-[236px]">
              <Image className='w-24 h-24' width={96} height={96} src="/Homepage/consulting.png" alt='service-formation' />
              <h6 className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Qualité Logicielle</h6>
              <p className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                {homepage.consulting}
              </p>
              <Link href={"/consulting"}>
                <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                  <h6 className={ibmFont.className + " text-ac-bleu uppercase text-xl font-bold"}>Services</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col xm:flex-row justify-center items-start gap-8 w-full pt-8 bg-ac-gray -translate-y-6 rounded-t-3xl ">
        <AnimatedElement
          className="flex flex-col justify-start items-center gap-4 w-full"
          type="popup"
          duration={500}
          delay={0}
        >
          <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-left"}><span className='text-ac-violet'>Nous</span> Trouver</h2>
          <Image src="/Homepage/hand-drawn-arrow.png" width={96} height={96} alt='' />
          <iframe
            className='w-[270px] fold:w-80 sm:w-[450px] xm:w-[400px] lg:w-[450px] rounded-2xl box-shadow2 '
            width="450"
            height="600"
            loading="lazy"
            allowFullScreen={true}
            src={googleMapsEmbed}
          ></iframe>
        </AnimatedElement>

        <AnimatedElement
          className="flex flex-col justify-start items-center gap-4 w-full"
          type="popup"
          duration={500}
          delay={500}
        >
          <div className="flex flex-col justify-start items-center gap-4 w-full">
            <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-left"}>Contactez-<span className='text-ac-violet'>nous</span></h2>
            <Image src="/Homepage/hand-drawn-arrow2.png" width={96} height={96} alt='' />
            <ContactUsForm />
          </div>
        </AnimatedElement>
      </div>

      {/* Footer  */}
      <Footer />
      <ToastContainer
        className="mt-16"
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
        newestOnTop={true}
        theme="light"
      />
    </div>
  )
}