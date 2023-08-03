"use client";

import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ReturnToTop from '@/components/ReturnToTop';
import { calendlyEmbed } from '@/utils/variables';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}


const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

export default function ContactUs({ }: Props) {
    const triggerToaster = (type: string, message: string) => {
        if (type === "success") {
            toast.success(message);
        } else {
            if (type === "error") {
                toast.error(message);
            }
        }
    }

    return (
        <div className="bg-ac-gray flex flex-col justify-start items-center w-full">
            <ReturnToTop />
            <Navbar />

            {/* Calendly */}
            <div className="flex justify-start items-center w-full xm:w-3/4 h-full">
                <iframe
                    className='w-full h-full min-h-[1250px] calendly:min-h-[750px] border-0 box-border'
                    src={calendlyEmbed}
                    title='Select a Date & Time - Calendly'>
                </iframe>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col justify-center items-center gap-4 w-full pt-8 bg-ac-gray -translate-y-6 rounded-t-3xl ">
                <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-left"}>Contactez-<span className='text-ac-violet'>nous</span></h2>
                <Image src="/Homepage/hand-drawn-arrow.png" width={96} height={96} alt='' />
                <ContactUsForm triggerToaster={triggerToaster} />
            </div>

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