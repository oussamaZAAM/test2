"use client";

import ContactUsForm from '@/components/ContactUsForm'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { namifySlug } from '@/utils/functions';
import { useSearchParams } from 'next/navigation';
import React from 'react'

type Props = {}

export default function Devis({ }: Props) {
    // Prendre le nom de la formation d'aupres l'url (params)
    const searchParams = useSearchParams();

    const formation = searchParams.get("formation") !== null ? searchParams.get("formation")! : "";
    return (
        <div className="flex flex-col justify-start items-center w-full">
            <Navbar />
            <div className="flex w-full h-44 bg-ac-bleu rounded-b-3xl -mb-28"></div>

            <div className="flex justify-center items-center w-full bg-transparent -translate-y-6 rounded-t-3xl">
                <ContactUsForm type="devis" formation={namifySlug(formation)} />
            </div>

            <Footer />
        </div>
    )
}