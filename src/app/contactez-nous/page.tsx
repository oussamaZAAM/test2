"use client";

import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ReturnToTop from '@/components/ReturnToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

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
                    src="https://calendly.com/mimoun/information-sur-nos-formations?embed_domain=www.automationtesteracademy.com&embed_type=Inline&hide_gdpr_banner=1"
                    title='Select a Date & Time - Calendly'>
                </iframe>
            </div>

            {/* Contact Us */}
            <div className="flex justify-center items-center w-full bg-ac-gray -translate-y-6 rounded-t-3xl ">
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