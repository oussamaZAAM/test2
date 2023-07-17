import { Montserrat } from 'next/font/google';
import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import { BsCalendar } from 'react-icons/bs';

import "react-datepicker/dist/react-datepicker.css";

const montserratNormalFont = Montserrat({ weight: "400", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

type Props = {
    type: string,
    formation?: string
    handleSendDevis: any
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
}

export default function ContactUsForm({ type, formation, handleSendDevis }: Props) {
    const [devisDate, setDevisDate] = useState(new Date());

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
        message: ''
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

    const handleSubmitDevis = () => {
        handleSendDevis();
    }
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
                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="nom" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Nom</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center border border-zinc-300 w-full">
                            <input
                                name="nom"
                                type="text"
                                placeholder='Nom'
                                className="py-2 px-5 w-full"
                                value={contactInputs.nom}
                                onChange={handleContactInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="prenom" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Prénom</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center border border-zinc-300 w-full">
                            <input
                                name="prenom"
                                type="text"
                                placeholder='Prénom'
                                className="py-2 px-5 w-full"
                                value={contactInputs.prenom}
                                onChange={handleContactInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="telephone" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Téléphone</h3>
                        </label>
                        <div className="flex justify-center items-center border border-zinc-300 w-full">
                            <input
                                name="telephone"
                                type="tel"
                                placeholder='Téléphone'
                                className="py-2 px-5 w-full"
                                value={contactInputs.telephone}
                                onChange={handleContactInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="email" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Email</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center border border-zinc-300 w-full">
                            <input
                                name="email"
                                type="email"
                                placeholder='Email'
                                className="py-2 px-5 w-full"
                                value={contactInputs.email}
                                onChange={handleContactInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="message" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Message</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center border border-zinc-300 w-full">
                            <textarea
                                name="message"
                                placeholder='Message'
                                className="py-2 px-5 w-full min-h-[40px]"
                                value={contactInputs.message}
                                onChange={handleContactInputChange}
                            />
                        </div>
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
                        <label htmlFor="formation" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Formation</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center border border-zinc-300 w-full">
                            <input
                                name="formation"
                                readOnly={formation?.length !== 0}
                                type="text"
                                placeholder='Formation'
                                className="py-2 px-5 w-full text-zinc-500 font-medium"
                                value={(formation?.length !== 0) ? formation : devisInputs.formation}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="entreprise" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Entreprise</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center border border-zinc-300 w-full">
                            <input
                                name="entreprise"
                                type="text"
                                placeholder='Entreprise'
                                className="py-2 px-5 w-full"
                                value={devisInputs.entreprise}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="fullname" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Nom & Prénom</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <input
                                name="fullname"
                                type="text"
                                placeholder='Nom & Prénom'
                                className="py-2 px-5 w-full"
                                value={devisInputs.fullname}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="telephone" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Téléphone</h3>
                        </label>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <input
                                name="telephone"
                                type="tel"
                                placeholder='Téléphone'
                                className="py-2 px-5 w-full"
                                value={devisInputs.telephone}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="email" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Email</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <input
                                name="email"
                                type="email"
                                placeholder='Email'
                                className="py-2 px-5 w-full"
                                value={devisInputs.email}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="message" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Message</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                            <textarea
                                name="message"
                                placeholder='Message'
                                className="py-2 px-5 w-full min-h-[40px]"
                                value={devisInputs.message}
                                onChange={handleDevisInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start w-full">
                        <label htmlFor="date" className="flex justify-center items-center text-sm gap-1">
                            <h3 className="font-semibold text-sm text-black text-start">Date</h3>
                            <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-start items-center border border-zinc-300 w-full py-2 px-5 gap-3">
                            <BsCalendar className="h-6 w-6" color='#828282' />
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={devisDate}
                                onSelect={setDevisDate}
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                </form>

                <div className="bg-ac-bleu py-3 px-6 w-full">
                    <button onClick={handleSubmitDevis} className={montserratBoldFont.className + " text-white text-base font-bold text-center uppercase"}>Envoyer</button>
                </div>
            </div>
    )
}