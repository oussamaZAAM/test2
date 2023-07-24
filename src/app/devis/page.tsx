"use client";

import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ReturnToTop from '@/components/ReturnToTop';
import { namifySlug } from '@/utils/functions';
import { DevisPayload } from '@/utils/interfaces';
import { formationsData } from '@/utils/mockData';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Props = {}

export default function Devis({ }: Props) {
    // Prendre le nom de la formation d'aupres l'url (params)
    const searchParams = useSearchParams();

    const formation = searchParams.get("formation") !== null ? searchParams.get("formation")! : "";

    const [loading, setLoading] = useState(false);

    const handleSendDevis = async (args: DevisPayload) => {
        const searchFormation = formationsData.find((element) => element.title.toLowerCase() === formation.toLowerCase());
        if (searchFormation) {
            setLoading(true);
            await fetch("/api/mailing", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    formation: searchFormation.title,
                    price: searchFormation.price,
                    duration: searchFormation.duration,
                    entreprise: args.entreprise,
                    fullname: args.fullname,
                    telephone: args.telephone,
                    email: args.email,
                    message: args.message,
                    date: args.date
                })
            })
                .then(() => {
                    setLoading(false);
                })
                .catch((error) => {
                    alert("Erreur d'envoyer l'email! Veuillez réessayer " + error);
                    setLoading(false);
                });
        } else {
            alert("Formation non trouvée!");
        }
    }
    return (
        <div className="flex flex-col justify-between items-center w-full min-h-[100vh] bg-ac-gray">
            <ReturnToTop />
            <div className="flex flex-col justify-start items-center w-full h-full bg-ac-gray mb-24">
                <Navbar />
                <div className="flex w-full h-44 bg-ac-bleu rounded-b-3xl -mb-28"></div>
                <div className="flex justify-center items-center w-full bg-transparent -translate-y-6 rounded-t-3xl">
                    <ContactUsForm loading={loading} type="devis" formation={namifySlug(formation)} handleSend={handleSendDevis} />
                </div>
            </div>

            <Footer />
        </div>
    )
}