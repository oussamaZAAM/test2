"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { formationsData } from "@/utils/mockData";
import { IBM_Plex_Sans_Condensed, Lato, Montserrat } from "next/font/google";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCopperCoinLine } from "react-icons/ri";

const montserratFont = Montserrat({ subsets: ["latin"] })
const ibmFont = IBM_Plex_Sans_Condensed({ weight: "700", subsets: ["latin"] })
const latoFont = Lato({ weight: "400", subsets: ["latin"] })

type Props = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Props) {
  const formation_id = params.slug;
  const formation = formationsData.find((formation) => formation.formation_id === formation_id);

  if (!formation) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 w-screen h-screen bg-black text-white text-center">
        <p className="text-5xl font-bold">404</p>
        <p className="text-3xl font-medium">Formation Non trouvée</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center bg-ac-gray w-full">
      <Navbar />

      {/* Formation Page Hero */}
      <div className="flex justify-center sm:justify-start items-center w-full relative">
        {/* Parallax Background */}
        <div className="parallax-formations absolute inset-0 bg-fixed bg-center"></div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>

        <div className="flex flex-col justify-start items-center mt-20 mb-24 mx-4 sm:ml-[10%] xm:ml-[5%] formation1:ml-[15%] rounded-xl bg-ac-bleu gap-3 py-3 px-4 sm:py-6 sm:px-8 xm:px-12 z-30">
          <h1 className={montserratFont.className + " text-3xl sm:text-4xl xm:text-5xl font-medium text-white text-center max-w-[270px] fold:max-w-[350px] xs:max-w-md"}>Formation {formation.title}</h1>
          <h3 className={latoFont.className + " text-xs sm:text-sm xm:text-base font-medium text-white text-center max-w-[300px] sm:max-w-sm line-clamp-1"}>
            {formation.description}
          </h3>
        </div>
      </div>

      {/* Formation Infos */}
      <div className="flex flex-col-reverse xm:flex-row justfiy-start xm:justify-between items-center xm:items-start bg-ac-gray -translate-y-5 z-30 rounded-t-3xl w-full py-10 px-4 fold:px-12 xm:px-24 lg:px-36 gap-20 xm:gap-2">
        {/* Path + Description */}
        <div className="flex flex-col justify-start items-start gap-16">
          {/* Path */}
          <div className={ibmFont.className + " hidden xm:flex justify-start items-center gap-2"}>
            <Link href={"/formations"}>
              <p className="font-semibold text-base text-center text-black uppercase">Formations</p>
            </Link>
            <MdOutlineKeyboardArrowRight size={17} color="black" />
            <p className="font-semibold text-base text-center text-black uppercase">{formation.title}</p>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-start items-start gap-8 max-w-xl">
            <h3 className={montserratFont.className + " text-3xl text-start text-black font-semibold"}>Description</h3>
            <p className={latoFont.className + " text-lg text-start text-black"}>
              {formation.description}
            </p>
          </div>
        </div>

        {/* Formation Card + Billing */}
        <div className="flex flex-col justify-start items-stretch gap-10 xm:-translate-y-28 lg:-translate-y-56">
          <div className={ibmFont.className + " xm:hidden flex justify-start items-center gap-2"}>
            <Link href={"/formations"}>
              <p className="font-semibold text-base text-center text-black uppercase">Formations</p>
            </Link>
            <MdOutlineKeyboardArrowRight size={17} color="black" />
            <p className="font-semibold text-base text-center text-black uppercase">{formation.title}</p>
          </div>

          {/* Formation Card */}
          <div className="flex flex-col justify-start items-center w-full bg-white shadow-formation-card rounded-xl px-1 fold:px-2 xm:px-5 py-2.5 gap-2.5">
            <div className={montserratFont.className + " flex flex-col justify-start items-center gap-1.5"}>
              <p className="text-sm text-center text-[#5A5A5A]">Se former en</p>
              <p className="text-2xl text-center font-bold text-black">{formation.title}</p>
            </div>

            <div className="flex flex-col justify-start items-center gap-4 px-4 xs:px-8 xm:px-12">
              <img loading='lazy' decoding='async' src={formation.image_url} width={200} height={200} alt='testing' />
              <div className="w-full xm:w-[140%] h-px bg-[#888888]"></div>
              <Link href={{ pathname: '/devis', query: { formation: formation.formation_id } }}>
                <div className="flex justify-center items-center bg-ac-bleu rounded-full py-2 xm:py-4 px-2 sm:px-4 xm:px-8">
                  <p className={ibmFont.className + " text-sm xs:text-base font-bold text-white uppercase text-center"}>Recevoir un devis</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Billing */}
          <div className={montserratFont.className + " flex flex-col xm:flex-row justify-between items-stretch w-full gap-8 xm:gap-0"}>
            <div className="flex flex-col justify-start items-center gap-4 xm:gap-10">
              <div className="flex justify-center items-center gap-2.5">
                <RiCopperCoinLine className="fill-ac-bleu" size={25} />
                <p className="text-xl font-bold uppercase text-black text-center">Prix</p>
              </div>
              <p className="text-base font-medium text-center text-black uppsercase">{formation.price} €</p>
            </div>

            <div className="hidden xm:block w-0.5 bg-[#888888]"></div>

            <div className="flex flex-col justify-start items-center gap-4 xm:gap-10">
              <div className="flex justify-center items-center gap-2.5">
                <RiCopperCoinLine className="fill-ac-bleu" size={25} />
                <p className="text-xl font-bold uppercase text-black text-center">Durée</p>
              </div>
              <p className="text-base font-medium text-center text-black uppsercase">{formation.duration}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}