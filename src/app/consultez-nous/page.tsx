"use client";

import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type Props = {}

export default function page({ }: Props) {

    const handleSendContact = () => {
        console.log('consultez-nous page')
    }
    return (
        <div className="bg-ac-gray flex flex-col justify-start items-center w-full">
            <Navbar />

            {/* Contact Us */}
            <div className="flex justify-center items-center w-full bg-ac-gray -translate-y-6 rounded-t-3xl ">
                <ContactUsForm type="contact" handleSend={handleSendContact} />
            </div>

            <Footer />
        </div>
    )
}