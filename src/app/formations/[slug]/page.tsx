import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed, Lato, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCopperCoinLine } from "react-icons/ri";
import { Graph } from "schema-dts";
import Footer from "../../../components/Footer";
import FormationsSlider from "../../../components/Formation/SliderComponent";
import Navbar from "../../../components/Navbar";
import ReturnToTop from "../../../components/ReturnToTop";
import { pageMetadata } from "../../../content/general";
import { formationsData } from "../../../data/formationsData";
import { currency, dailyHours, datesDisplayedNumber, fixedReferenceDate } from "../../../utils/constants";
import { getNextMondaysSeparatedBy3Weeks, readableDateFromString } from "../../../utils/functions";

const montserratFont = Montserrat({ subsets: ["latin"] })
const ibmFont = IBM_Plex_Sans_Condensed({ weight: "700", subsets: ["latin"] })
const latoFont = Lato({ weight: "400", subsets: ["latin"] })

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const formation_id = params.slug;
  const formation = formationsData.find((formation) => formation.formation_id === formation_id);
  return {
    title: formation ? "Alee Conseil - Formation " + formation.title : "Alee Conseil - 404",
    description: pageMetadata.description,
    metadataBase: new URL(pageMetadata.baseUrl),
    alternates: {
      canonical: '/formations/' + formation_id,
      languages: {
        'fr': '/formations/' + formation_id,
      },
    },
    icons: {
      icon: 'https://www.aleeconseil.com/favicon.ico',
      apple: 'https://www.aleeconseil.com/apple-icon.png',
    },
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      siteName: pageMetadata.siteName,
      url: 'https://www.aleeconseil.com',
      images: {
        url: 'https://www.aleeconseil.com/favicon.ico',
        width: 96,
        height: 96,
      },
      locale: 'fr-MA',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': 'large',
        'max-image-preview': 'large',
        'max-snippet': 1024,
      }
    },
    themeColor: "#644E9B",
    category: 'technology'
  }
}

export default function Page({ params }: Props) {
  const formation_id = params.slug;
  const formation = formationsData.find((formation) => formation.formation_id === formation_id);

  const nextDates = getNextMondaysSeparatedBy3Weeks(fixedReferenceDate, datesDisplayedNumber);

  const graph: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': "https://www.aleeconseil.com/formations/" + formation_id + "#",
        name: formation?.title,
        description: formation?.description,
        image: formation?.image_url,
        offers: {
          '@type': 'Offer',
          price: formation?.price,
          priceCurrency: currency,
          availability: 'https://schema.org/InStock',
          validFrom: nextDates[0],
          validThrough: nextDates[1]
        },
        provider: {
          '@type': 'Organization',
          name: "Alee Conseil"
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          identifier: formation_id,
          name: formation?.title,
          description: formation?.description,
          url: "https://www.aleeconseil.com/formations/" + formation_id,
          startDate: nextDates[0],
          endDate: nextDates[1],
          duration: "PT" + formation?.duration + "H",
          image: formation?.image_url,
          offers: {
            '@type': 'Offer',
            price: formation?.price,
            priceCurrency: currency,
            availability: 'https://schema.org/InStock',
            validFrom: nextDates[0],
            validThrough: nextDates[1]
          },
          isAccessibleForFree: false,
        },
        coursePrerequisites: formation?.prerequisites.map((course) => {
          return {
            '@type': 'Course',
            name: course,
            description: course,
            provider: {
              '@type': 'Organization',
              name: "Alee Conseil"
            },
          }
        }),
        audience: formation?.targets.map((target) => {
          return {
            '@type': 'Audience',
            audienceType: target,
            description: target
          }
        }),
        teaches: formation?.objectives.map((objective) => {
          return {
            '@type': 'DefinedTerm',
            name: objective,
            description: objective,
          }
        })
      }
    ]
  }

  // Easy Route

  // const jsonLd: WithContext<Offer> = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Offer',
  //   name: formation?.title,
  //   description: formation?.hero,
  //   image: formation?.image_url,
  //   price: formation?.price,
  //   availabilityStarts: nextDates[0],
  //   availabilityEnds: nextDates[1],
  //   leaseLength: "PT" + formation?.duration + "H", // Duration using ISO 8601
  //   priceCurrency: currency
  // }

  if (!formation) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 w-screen h-screen bg-black text-white text-center">
        <p className="text-5xl font-bold">404</p>
        <p className="text-3xl font-medium">Formation Non trouvée</p>
      </div>
    )
  }
  return (
    <div className="flex flex-col justify-between items-center bg-ac-gray w-full min-h-[100vh]">
      {/* Add Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L5ZVZDMVJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6L5ZVZDMVJ');
        `}
      </Script>

      <ReturnToTop />
      <div className="flex flex-col justify-center items-center bg-ac-gray w-full">
        <Navbar />
        {/* Formation Page Hero */}
        <div className="flex justify-center sm:justify-start items-center w-full relative">
          {/* Parallax Background */}
          <div className="parallax-formations absolute inset-0 bg-fixed bg-center"></div>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>
          <div className="flex flex-col justify-start items-center mt-20 mb-24 mx-4 sm:ml-[10%] xm:ml-[5%] formation:ml-[15%] rounded-xl bg-ac-bleu gap-3 py-3 px-4 sm:py-6 sm:px-8 xm:px-12 z-30">
            <h1 className={montserratFont.className + " text-3xl sm:text-4xl xm:text-5xl font-normal text-white text-center max-w-[270px] fold:max-w-[350px] xs:max-w-md"}><strong>Formation {formation.title}</strong></h1>
            <h2 className={latoFont.className + " text-xs sm:text-sm xm:text-base font-medium text-white text-center max-w-[300px] sm:max-w-sm"}>
              {formation.hero}
            </h2>
            <h2 className="hidden">Alee Conseil</h2>
          </div>
        </div>
        {/* Formation Infos */}
        <div className="flex flex-col-reverse xm:flex-row justfiy-start xm:justify-between items-center xm:items-start bg-ac-gray -translate-y-5 z-30 rounded-t-3xl w-full py-10 px-4 fold:px-12 xm:px-24 lg:px-36 gap-20 xm:gap-2">
          {/* Path + Description */}
          <div className="flex flex-col justify-start items-start gap-16">
            {/* Path */}
            <div className={ibmFont.className + " hidden xm:flex justify-start items-center gap-2"}>
              <Link href={"/formations"}>
                <h3 className="font-semibold text-base text-center text-black uppercase">Formations</h3>
              </Link>
              <MdOutlineKeyboardArrowRight size={17} color="black" />
              <h2 className="font-semibold text-base text-center text-black uppercase">
                <strong>{formation.title}</strong>
              </h2>
              <h2 className="hidden">Alee Conseil</h2>
            </div>
            <div className={latoFont.className + " flex flex-col justify-start items-start gap-8 max-w-xl"}>

              {/* Description */}
              <div className="flex justify-center sm:justify-start items-center bg-ac-bleu rounded-md w-full">
                <p className={montserratFont.className + " text-xl fold:text-2xl xs:text-3xl text-center text-white font-semibold rounded-full py-2 px-4"}>Description</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                {formation.description.split("\n").map((text) => {
                  return (
                    <h2 key={text} className=" indent-2 text-lg text-left text-black">
                      {text}
                    </h2>
                  )
                })}
              </div>

              {/* Objectifs pédagogiques */}
              <div className="flex justify-center sm:justify-start items-center bg-ac-bleu rounded-md w-full">
                <p className={montserratFont.className + " text-xl fold:text-2xl xs:text-3xl text-center text-white font-semibold rounded-full py-2 px-4"}>Objectifs pédagogiques</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                {formation.objectives.map((objective) => {
                  return (
                    <h2 key={objective} className="ml-2 text-lg text-left text-black">
                      • {objective}
                    </h2>
                  )
                })}
              </div>

              {/* Programme */}
              <div className="flex justify-center sm:justify-start items-center bg-ac-bleu rounded-md w-full">
                <p className={montserratFont.className + " text-xl fold:text-2xl xs:text-3xl text-center text-white font-semibold rounded-full py-2 px-4"}>Programme</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-6">
                {formation.program.map((step, index) => {
                  return (
                    <div key={step.title} className="flex flex-col justify-start items-start gap-4">
                      <h2 className="ml-2 text-xl text-left text-black font-semibold">{index + 1} - {step.title}</h2>
                      <div className="flex flex-col justify-start items-start gap-2">
                        {step.parts.map((part) => {
                          return (
                            <h2 key={part} className="ml-6 text-lg text-left text-black">
                              • {part}
                            </h2>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Public Cible */}
              <div className="flex justify-center sm:justify-start items-center bg-ac-bleu rounded-md w-full">
                <p className={montserratFont.className + " text-xl fold:text-2xl xs:text-3xl text-center text-white font-semibold rounded-full py-2 px-4"}>Public Cible</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                {formation.targets.map((target) => {
                  return (
                    <h2 key={target} className="ml-2 text-lg text-left text-black">
                      • {target}
                    </h2>
                  )
                })}
              </div>

              {/* Prérequis */}
              <div className="flex justify-center sm:justify-start items-center bg-ac-bleu rounded-md w-full">
                <p className={montserratFont.className + " text-xl fold:text-2xl xs:text-3xl text-center text-white font-semibold rounded-full py-2 px-4"}>Prérequis</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                {formation.prerequisites.map((prerequisite) => {
                  return (
                    <h2 key={prerequisite} className="ml-2 text-lg text-left text-black">
                      • {prerequisite}
                    </h2>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Formation Card + Billing + Available Dates*/}
          <div className="xm:sticky xm:top-60 flex flex-col justify-start items-stretch gap-10 xm:-translate-y-28 lg:-translate-y-56">
            <div className={ibmFont.className + " xm:hidden flex justify-start items-center gap-2"}>
              <Link href={"/formations"}>
                <p className="font-semibold text-base text-center text-black uppercase">Formations</p>
              </Link>
              <MdOutlineKeyboardArrowRight size={17} color="black" />
              <h2 className="font-semibold text-base text-center text-black uppercase"><strong>{formation.title}</strong></h2>
            </div>
            {/* Formation Card */}
            <div className="flex flex-col justify-start items-center w-full bg-white shadow-formation-card rounded-xl px-1 fold:px-2 xm:px-5 py-2.5 gap-2.5">
              <div className={montserratFont.className + " flex flex-col justify-start items-center gap-1.5"}>
                <h3 className="text-sm text-center text-[#5A5A5A]">Se former en</h3>
                <h2 className="text-2xl text-center font-normal text-black"><strong>{formation.title}</strong></h2>
              </div>
              <div className="flex flex-col justify-start items-center gap-4 px-4 xs:px-8 xm:px-12">
                <Image src={formation.image_url} width={200} height={200} alt={formation.title} />
                <div className="w-full xm:w-[140%] h-px bg-[#888888]"></div>
                <Link href={{ pathname: '/devis', query: { formation: formation.formation_id, date: nextDates[0] } }}>
                  <div className="flex justify-center items-center bg-ac-bleu rounded-full py-3 xm:py-4 px-3 sm:px-4 xm:px-8">
                    <p className={ibmFont.className + " text-sm xs:text-base font-bold text-white uppercase text-center"}>Recevoir un devis</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Billing */}
            <div className={montserratFont.className + " flex flex-col xm:flex-row justify-between items-stretch w-full gap-8 xm:gap-0"}>
              <div className="flex flex-col justify-start items-center gap-4 xm:gap-10 xm:max-w-[125px]">
                <div className="flex justify-center items-center gap-2.5">
                  <RiCopperCoinLine className="fill-ac-bleu" size={25} />
                  <p className="text-xl font-bold uppercase text-black text-center">Prix</p>
                </div>
                <p className="text-base font-medium text-center text-black uppsercase whitespace-normal"><span className="font-bold">{formation.price}</span> <span>{currency}</span> HT / personne</p>
              </div>
              <div className="hidden xm:block w-0.5 bg-[#888888]"></div>
              <div className="flex flex-col justify-start items-center gap-4 xm:gap-10 xm:max-w-[125px]">
                <div className="flex justify-center items-center gap-2.5">
                  <BiTimeFive className="fill-ac-bleu" size={25} />
                  <p className="text-xl font-bold uppercase text-black text-center">Durée</p>
                </div>
                <p className="text-base font-medium text-center text-black uppsercase"><span className="font-bold">{Math.ceil(formation.duration / dailyHours)}</span> jours (<span className="font-bold">{formation.duration}</span>&nbsp;heures)</p>
              </div>
            </div>

            {/* Available Dates */}
            <div className="grid grid-cols-1 xm:grid-cols-2 justify-center items-stretch gap-2">
              {nextDates.map((date) => {
                return (
                  <Link key={date} href={{ pathname: '/devis', query: { formation: formation.formation_id, date: date } }} className="flex flex-row xm:flex-col justify-center items-center py-2 px-4 bg-white rounded-xl cursor-pointer border border-ac-bleu hover:bg-ac-bleu group">
                    <p className="xm:hidden text-lg text-ac-bleu text-center font-bold group-hover:text-white">{readableDateFromString(date).split(" ").join(" ")}</p>
                    <p className="hidden xm:block text-lg text-ac-bleu text-center font-bold group-hover:text-white">{readableDateFromString(date).split(" ").slice(0, 2).join(" ")}</p>
                    <p className="hidden xm:block text-base text-black text-center font-medium group-hover:text-gray-300">{readableDateFromString(date).split(" ")[readableDateFromString(date).split(" ").length - 1]}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Other Formations */}
        <h3 className={montserratFont.className + " text-xl fold:text-2xl xs:text-3xl text-left text-black font-semibold ml-2"}>Autres Formations</h3>
        <FormationsSlider />
      </div>

      <Footer />
    </div>
  )
}