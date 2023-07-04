import { Montserrat } from 'next/font/google';
import { ChangeEvent, useState } from "react";

const montserratNormalFont = Montserrat({ weight: "400", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

type Props = {}

interface FormInputs {
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    message: string;
}

export default function ContactUsForm({ }: Props) {
    const [inputs, setInputs] = useState<FormInputs>({
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className='flex flex-col justify-start items-center mt-10 mb-4 mx-2 py-6 px-5 box-shadow2 w-[464px] bg-white gap-5'>
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
                    <label htmlFor="nom" className={`flex justify-center items-center text-sm absolute top-2 left-5 gap-1 ${inputs.nom && 'hidden'}`}>
                        <span className="text-zinc-400 font-normal">Nom</span>
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="nom"
                        type="text" 
                        placeholder=''
                        className="py-2 px-5 w-full"
                        value={inputs.nom}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="prenom" className={`flex justify-center items-center text-sm absolute top-2 left-5 gap-1 ${inputs.prenom && 'hidden'}`}>
                        <span className="text-zinc-400 font-normal">Prénom</span>
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="prenom"
                        type="text" 
                        placeholder=''
                        className="py-2 px-5 w-full"
                        value={inputs.prenom}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="telephone" className={`flex justify-center items-center text-sm absolute top-2 left-5 gap-1 ${inputs.telephone && 'hidden'}`}>
                        <span className="text-zinc-400 font-normal">Téléphone</span>
                    </label>
                    <input
                        name="telephone"
                        type="text" 
                        placeholder=''
                        className="py-2 px-5 w-full"
                        value={inputs.telephone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="email" className={`flex justify-center items-center text-sm absolute top-2 left-5 gap-1 ${inputs.email && 'hidden'}`}>
                        <span className="text-zinc-400 font-normal">Email</span>
                    </label>
                    <input
                        name="email"
                        type="text" 
                        placeholder=''
                        className="py-2 px-5 w-full"
                        value={inputs.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="message" className={`flex justify-center items-center text-sm absolute top-2 left-5 gap-1 ${inputs.message && 'hidden'}`}>
                        <span className="text-zinc-400 font-normal">Message</span>
                        <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        placeholder=''
                        className="py-2 px-5 w-full min-h-[40px]"
                        value={inputs.message}
                        onChange={handleInputChange}
                    />
                </div>
            </form>

            <div className="bg-ac-bleu py-3 px-6 w-full">
                <p className={montserratBoldFont.className + " text-white text-base font-bold text-center uppercase"}>Envoyer</p>
            </div>
        </div>
    )
}