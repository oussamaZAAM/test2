"use client";

import ContactUsForm from '@/components/ContactUsForm'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { namifySlug } from '@/utils/functions';
import { DevisInputs } from '@/utils/interfaces';
import { useSearchParams } from 'next/navigation';
import React from 'react'

type Props = {}

export default function Devis({ }: Props) {
    // Prendre le nom de la formation d'aupres l'url (params)
    const searchParams = useSearchParams();

    const formation = searchParams.get("formation") !== null ? searchParams.get("formation")! : "";

    const handleSendDevis = async (args: DevisInputs) => {
        await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                formation: args.formation,
                entreprise: args.entreprise,
                fullname: args.fullname,
                telephone: args.telephone,
                email: args.email,
                message: args.message,
            })
        });
    }
    return (
        <div className="flex flex-col justify-start items-center w-full bg-ac-gray">
            <Navbar />
            <div className="flex w-full h-44 bg-ac-bleu rounded-b-3xl -mb-28"></div>

            <div className="flex justify-center items-center w-full bg-transparent -translate-y-6 rounded-t-3xl">
                <ContactUsForm type="devis" formation={namifySlug(formation)} handleSendDevis={handleSendDevis} />
            </div>

            <Footer />
        </div>
    )
}