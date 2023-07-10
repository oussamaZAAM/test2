"use client";

import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="bg-ac-gray flex flex-col justify-start items-center w-full">
            <Navbar />

            <ContactUsForm type='contact' />
            <Footer />
        </div>
    )
}