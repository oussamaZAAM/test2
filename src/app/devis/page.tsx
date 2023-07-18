"use client";

import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { namifySlug } from '@/utils/functions';
import { DevisPayload } from '@/utils/interfaces';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Props = {}

export default function Devis({ }: Props) {
    // Prendre le nom de la formation d'aupres l'url (params)
    const searchParams = useSearchParams();

    const formation = searchParams.get("formation") !== null ? searchParams.get("formation")! : "";

    const [loading, setLoading] = useState(false);

    const handleSendDevis = async (args: DevisPayload) => {
        setLoading(true);
        try {
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
                    date: args.date
                })
            });
            setLoading(false);
        } catch (error) {
            alert("Erreur d'envoyer l'email! Veuillez réessayer");
        }
    }
    return (
        <div className="flex flex-col justify-start items-center w-full bg-ac-gray">
            <Navbar />
            <div className="flex w-full h-44 bg-ac-bleu rounded-b-3xl -mb-28"></div>

            <div className="flex justify-center items-center w-full bg-transparent -translate-y-6 rounded-t-3xl">
                <ContactUsForm loading={loading} type="devis" formation={namifySlug(formation)} handleSend={handleSendDevis} />
            </div>

            <Footer />
        </div>
    )
}