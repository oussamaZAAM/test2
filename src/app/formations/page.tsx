"use client";

import Footer from '@/components/Footer';
import FormationCard from '@/components/FormationCard';
import Navbar from '@/components/Navbar';
import { formationsData } from '@/utils/mockData';
import { Lato, Montserrat } from 'next/font/google';

const montserratFont = Montserrat({ subsets: ["latin"] })
const latoFont = Lato({ weight: "400", subsets: ["latin"] })

type Props = {}

export default function Formations({ }: Props) {
    return (
        <div className="flex flex-col justify-center items-center bg-ac-gray w-full">
            <Navbar />

            {/* Formation Page Hero */}
            <div className="flex justify-center sm:justify-start items-center w-full relative">
                {/* Parallax Background */}
                <div className="parallax-formations absolute inset-0 bg-fixed bg-center"></div>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>

                <a href='#formations' className="flex flex-col justify-start items-center mt-20 mb-24 mx-4 sm:ml-[10%] xm:ml-[15%] rounded-xl bg-ac-bleu gap-3 py-3 px-4 sm:py-6 sm:px-8 xm:px-12 z-30">
                    <h1 className={montserratFont.className + " text-3xl sm:text-4xl xm:text-5xl font-medium text-white text-center max-w-[270px] fold:max-w-[350px] xs:max-w-xs"}>
                        Formations
                    </h1>
                    <h3 className={latoFont.className + " text-xs sm:text-sm xm:text-base font-medium text-white text-center max-w-[300px] sm:max-w-sm"}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </h3>
                </a>
            </div>

            {/* Nos Formations */}
            <div id='formations' className="flex flex-col justify-start items-center w-full rounded-t-3xl px-4 xs:px-8 sm:px-12 md:px-16 xm:px-20 lg:px-24 py-24 bg-ac-gray -translate-y-5 z-30 gap-16">
                <div className="flex justify-center items-center w-full relative">
                    <div className="flex justify-center items-center bg-ac-gray z-20 p-2 xm:p-4">
                        <h2 className={montserratFont.className + " text-ac-violet text-3xl xm:text-5xl font-semibold text-center"}>Nos Formations</h2>
                    </div>
                    <div className="absolute w-full h-px bg-ac-violet z-10"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                    {formationsData.map((formation) => {
                        return (
                            <FormationCard 
                                key={formation.formation_id}
                                formation_id={formation.formation_id}
                                title={formation.title}
                                description={formation.description}
                                lessons={formation.lessons}
                                image_url={formation.image_url}
                            />
                        )
                    })}
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}