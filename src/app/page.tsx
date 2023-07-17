"use client";

import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type Props = {}

export default function Devis({ }: Props) {

  const handleSendContact = () => {
    console.log('homepage')
  }
  return (
    <div className="flex flex-col justify-start items-center w-full bg-ac-gray">
      <Navbar />
      <div className="flex w-full h-44 bg-ac-bleu rounded-b-3xl -mb-28"></div>

      <div className="flex justify-center items-center w-full bg-transparent -translate-y-6 rounded-t-3xl">
        <ContactUsForm type="contact" handleSend={handleSendContact} />
      </div>

      <Footer />
    </div>
  )
}