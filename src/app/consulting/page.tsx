import { Lato, Montserrat, Poppins } from 'next/font/google';
import Image from 'next/image';
import AnimatedElement from '../../components/AnimatedElement';
import ConsultingCurvyLine from '../../components/Consulting/ConsultingCurvyLine';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ReturnToTop from '../../components/ReturnToTop';
import { pageMetadata } from '../../content/general';
import { consulting } from '../../content/pages';

const montserratFont = Montserrat({ subsets: ["latin"] })
const latoFont = Lato({ weight: "400", subsets: ["latin"] })
const poppinsFont = Poppins({ weight: "600", subsets: ["latin"] })

export const metadata = {
    title: pageMetadata.title,
    description: pageMetadata.description,
    metadataBase: new URL(pageMetadata.baseUrl),
    openGraph: {
        images: '/icon.png',
    },
}

type Props = {}

export default function Consulting({ }: Props) {
    return (
        <div className="flex flex-col justify-between items-center bg-ac-gray w-full min-h-[100vh]">
            <ReturnToTop />
            <div className="flex flex-col justify-start items-center bg-ac-gray w-full">
                <Navbar />
                {/* Consulting Page Hero */}
                <div className="flex justify-center sm:justify-end items-center w-full relative">
                    {/* Parallax Background */}
                    <div className="parallax-consulting absolute inset-0 bg-fixed bg-center"></div>
                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>
                    <a href='#formations' className="flex flex-col justify-start items-center mt-20 mb-24 mx-4 sm:mr-[10%] xm:mr-[15%] rounded-xl bg-ac-violet gap-3 py-3 px-4 sm:py-6 sm:px-8 xm:px-12 z-30">
                        <h1 className={montserratFont.className + " text-3xl sm:text-4xl xm:text-5xl font-medium text-white text-center max-w-[270px] fold:max-w-[350px] xs:max-w-xs"}>
                            Consultation
                        </h1>
                        <h3 className={latoFont.className + " text-xs sm:text-sm xm:text-base font-medium text-white text-center max-w-[300px] sm:max-w-sm"}>
                            {consulting.hero}
                        </h3>
                    </a>
                </div>
                {/* Offres de Consultations */}
                <div className="w-full flex flex-col justify-start items-center gap-16 rounded-t-3xl -translate-y-5 z-30 bg-ac-gray pt-14 pb-36 px-10 md:px-20">
                    <div className="flex justify-center items-center w-full relative">
                        <div className="flex justify-center items-center bg-ac-gray z-20 p-2 xm:p-4">
                            <h2 className={montserratFont.className + " text-ac-violet text-3xl xm:text-5xl font-semibold text-center"}>Nos offres de Consultation</h2>
                        </div>
                        <div className="absolute w-full h-px bg-ac-violet z-10"></div>
                    </div>
                    <ConsultingCurvyLine />
                    {/* Liste des Offres */}
                    <div className="w-full flex flex-col justify-start items-center gap-40">
                        {/* Offre 1 */}
                        <div className="flex flex-row justify-center sm:justify-between items-center sm:mr-4 md:mr-10 xm:mr-20 w-full gap-4">
                            <AnimatedElement type='from-left' duration={500} delay={0}>
                                <Image className='hidden sm:block max-w-md max-h-72 object-contain object-center' src="/Consulting/cloud.png" width={448} height={288} alt='consulting-1' />
                            </AnimatedElement>
                            <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                                <h3 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}>Audit</h3>
                                <Image className='sm:hidden w-full max-w-sm sm:max-w-md max-h-72 object-contain object-center' src="/Consulting/cloud.png" width={448} height={288} alt='consulting-1' />
                                <p className={montserratFont.className + " text-lg text-black text-center font-medium w-full max-w-sm sm:max-w-md"}>
                                    {consulting.audit}
                                </p>
                            </div>
                        </div>
                        {/* Offre 2 */}
                        <div className="flex flex-row-reverse justify-center sm:justify-between items-center sm:ml-4 md:ml-10 xm:ml-20 w-full gap-4">
                            <AnimatedElement type='from-left' duration={500} delay={0}>
                                <Image className='hidden sm:block max-w-md max-h-72 object-contain object-center' src="/Consulting/cyber-security.png" width={448} height={288} alt='consulting-2' />
                            </AnimatedElement>
                            <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                                <h3 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}>Prestation</h3>
                                <Image className='sm:hidden w-full max-w-sm sm:max-w-md max-h-72 object-contain object-center' src="/Consulting/cyber-security.png" width={448} height={288} alt='consulting-2' />
                                <p className={montserratFont.className + " text-lg text-black text-center font-medium w-full max-w-sm sm:max-w-md"}>
                                    {consulting.prestation}
                                </p>
                            </div>
                        </div>
                        {/* Offre 3 */}
                        <div className="flex flex-row justify-center sm:justify-between items-center sm:mr-4 md:mr-10 xm:mr-20 w-full gap-4">
                            <AnimatedElement type='from-left' duration={500} delay={0}>
                                <Image className='hidden sm:block max-w-md max-h-72 object-contain object-center' src="/Consulting/testing.png" width={448} height={288} alt='consulting-3' />
                            </AnimatedElement>
                            <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                                <h3 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}>Off-Shore</h3>
                                <Image className='sm:hidden w-full max-w-sm sm:max-w-md max-h-72 object-contain object-center' src="/Consulting/testing.png" width={448} height={288} alt='consulting-3' />
                                <p className={montserratFont.className + " text-lg text-black text-center font-medium w-full max-w-sm sm:max-w-md"}>
                                    {consulting.offshore}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}