import { Montserrat } from 'next/font/google';
import { ChangeEvent, useState } from "react";

const montserratNormalFont = Montserrat({ weight: "400", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

type Props = {
    type: string,
    formation?: string
}

interface FormContactInputs {
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    message: string;
}

interface FormDevisInputs {
    formation: string;
    entreprise: string;
    fullname: string;
    telephone: string;
    email: string;
    message: string;
    date: Date;
}

export default function ContactUsForm({ type, formation }: Props) {
    const [contactInputs, setContactInputs] = useState<FormContactInputs>({
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        message: ''
    });
    const [devisInputs, setDevisInputs] = useState<FormDevisInputs>({
        formation: '',
        entreprise: '',
        fullname: '',
        telephone: '',
        email: '',
        message: '',
        date: new Date(),
    });

    const handleContactInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactInputs((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDevisInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDevisInputs((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        type === "contact"
            ? <div className='flex flex-col justify-start items-center mt-10 mb-4 mx-2 py-6 px-5 box-shadow2 w-[464px] bg-white gap-5'>
                <div className="flex flex-col justify-start items-start w-full gap-3">
                    <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-start"}>Contactez-<span className='text-ac-violet'>nous</span></h2>
                    <p className="text-xs font-semibold text-start">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                        Eu leo molestie vel, ornare non id blandit netus.
                    </p>
                </div>

                {/* Form */}
                <form className={montserratNormalFont.className + " flex flex-col justify-start items-stretch gap-3 w-full"}>
                    <div className="flex justify-center items-center relative border border-zinc-300 ">
                        <label htmlFor="nom" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${contactInputs.nom && 'hidden'}`}>
                            <span className="text-zinc-400 font-normal">Nom</span>
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="nom"
                            type="text"
                            placeholder=''
                            className="py-2 px-5 w-full"
                            value={contactInputs.nom}
                            onChange={handleContactInputChange}
                        />
                    </div>

                    <div className="flex justify-center items-center relative border border-zinc-300 ">
                        <label htmlFor="prenom" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${contactInputs.prenom && 'hidden'}`}>
                            <span className="text-zinc-400 font-normal">Prénom</span>
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="prenom"
                            type="text"
                            placeholder=''
                            className="py-2 px-5 w-full"
                            value={contactInputs.prenom}
                            onChange={handleContactInputChange}
                        />
                    </div>

                    <div className="flex justify-center items-center relative border border-zinc-300 ">
                        <label htmlFor="telephone" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${contactInputs.telephone && 'hidden'}`}>
                            <span className="text-zinc-400 font-normal">Téléphone</span>
                        </label>
                        <input
                            name="telephone"
                            type="text"
                            placeholder=''
                            className="py-2 px-5 w-full"
                            value={contactInputs.telephone}
                            onChange={handleContactInputChange}
                        />
                    </div>

                    <div className="flex justify-center items-center relative border border-zinc-300 ">
                        <label htmlFor="email" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${contactInputs.email && 'hidden'}`}>
                            <span className="text-zinc-400 font-normal">Email</span>
                        </label>
                        <input
                            name="email"
                            type="text"
                            placeholder=''
                            className="py-2 px-5 w-full"
                            value={contactInputs.email}
                            onChange={handleContactInputChange}
                        />
                    </div>

                    <div className="flex justify-center items-center relative border border-zinc-300 ">
                        <label htmlFor="message" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${contactInputs.message && 'hidden'}`}>
                            <span className="text-zinc-400 font-normal">Message</span>
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            placeholder=''
                            className="py-2 px-5 w-full min-h-[40px]"
                            value={contactInputs.message}
                            onChange={handleContactInputChange}
                        />
                    </div>
                </form>

                <div className="bg-ac-bleu py-3 px-6 w-full">
                    <p className={montserratBoldFont.className + " text-white text-base font-bold text-center uppercase"}>Envoyer</p>
                </div>
            </div>
            : <div className='flex flex-col justify-start items-center mt-10 mb-4 mx-2 py-6 px-5 box-shadow2 w-[464px] bg-white gap-5'>
                <div className="flex flex-col justify-start items-start w-full gap-3">
                    <h2 className={montserratBoldFont.className + " font-bold text-4xl text-ac-bleu text-start"}>Demande de Devis</h2>
                    <p className="text-xs font-semibold text-start">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                        Eu leo molestie vel, ornare non id blandit netus.
                    </p>
                </div>

                {/* Form */}
                <form className={montserratNormalFont.className + " flex flex-col justify-start items-stretch gap-3 w-full"}>
                    <div className="flex flex-col justify-center items-start w-full">
                        <h3 className="font-semibold text-sm text-black text-start">Formation</h3>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <label htmlFor="formation" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${devisInputs.formation && 'hidden'}`}>
                                <span className="text-zinc-400 font-normal">Formation</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="formation"
                                type="text"
                                placeholder=''
                                className="py-2 px-5 w-full"
                                value={devisInputs.formation}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <h3 className="font-semibold text-sm text-black text-start">Entreprise</h3>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <label htmlFor="nom" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${contactInputs.nom && 'hidden'}`}>
                                <span className="text-zinc-400 font-normal">Entreprise</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="nom"
                                type="text"
                                placeholder=''
                                className="py-2 px-5 w-full"
                                value={devisInputs.entreprise}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <h3 className="font-semibold text-sm text-black text-start">Nom & Prénom</h3>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <label htmlFor="fullname" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${devisInputs.fullname && 'hidden'}`}>
                                <span className="text-zinc-400 font-normal">Nom & Prénom</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="fullname"
                                type="text"
                                placeholder=''
                                className="py-2 px-5 w-full"
                                value={devisInputs.fullname}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <h3 className="font-semibold text-sm text-black text-start">Téléphone</h3>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <label htmlFor="telephone" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${devisInputs.telephone && 'hidden'}`}>
                                <span className="text-zinc-400 font-normal">Téléphone</span>
                            </label>
                            <input
                                name="telephone"
                                type="text"
                                placeholder=''
                                className="py-2 px-5 w-full"
                                value={devisInputs.telephone}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <h3 className="font-semibold text-sm text-black text-start">Email</h3>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <label htmlFor="email" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${devisInputs.email && 'hidden'}`}>
                                <span className="text-zinc-400 font-normal">Email</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="email"
                                type="text"
                                placeholder=''
                                className="py-2 px-5 w-full"
                                value={devisInputs.email}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <h3 className="font-semibold text-sm text-black text-start">Message</h3>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <label htmlFor="message" className={`flex justify-center items-center text-sm absolute top-2.5 left-5 gap-1 ${devisInputs.message && 'hidden'}`}>
                                <span className="text-zinc-400 font-normal">Message</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder=''
                                className="py-2 px-5 w-full min-h-[40px]"
                                value={devisInputs.message}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>
                </form>

                <div className="bg-ac-bleu py-3 px-6 w-full">
                    <p className={montserratBoldFont.className + " text-white text-base font-bold text-center uppercase"}>Envoyer</p>
                </div>
            </div>
    )
}