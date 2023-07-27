import { Montserrat } from 'next/font/google';
import { ChangeEvent, useState } from "react";

import { contactus } from '@/content/general';
import { ContactUsPayload } from '@/utils/interfaces';
import { useRouter } from 'next/navigation';

import "react-datepicker/dist/react-datepicker.css";

const montserratNormalFont = Montserrat({ weight: "400", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

type Props = {
    triggerToaster: Function
}

interface FormContactInputs {
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    message: string;
}

export default function ContactUsForm({ triggerToaster }: Props) {
    const router = useRouter();

    const [contactInputs, setContactInputs] = useState<FormContactInputs>({
        nom: '',
        prenom: '',
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

    const [loading, setLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState({
    //     success: false,
    //     message: "",
    //     show: false
    // });
    const handleSendEmail = async (args: ContactUsPayload) => {
        try {
            setLoading(true);
            const response = await fetch("/api/mailing/contactus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nom: args.nom,
                    prenom: args.prenom,
                    telephone: args.telephone,
                    email: args.email,
                    message: args.message,
                })
            })

            const data = await response.json();

            if (!response.ok) {
                console.log(data.message.message);
                // setErrorMessage({
                //     success: false,
                //     message: "Erreur de configuration de serveur",
                //     show: true
                // });
                triggerToaster("error", "Erreur de configuration de serveur");
                throw new Error(data.message.message);
            }

            // setErrorMessage({
            //     success: true,
            //     message: "Votre email a été envoyé avec succés",
            //     show: true
            // });
            triggerToaster("success", "Votre email a été envoyé avec succés")
            setContactInputs({
                nom: '',
                prenom: '',
                telephone: '',
                email: '',
                message: ''
            });
            setLoading(false);
            setTimeout(() => {
                router.replace("/");
            }, 2750); // Redirect to /formations page after 2s
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const handleSubmit = async () => {
        if (contactInputs.nom !== "" && contactInputs.prenom !== "" && contactInputs.message !== "") {
            if (!loading) {
                await handleSendEmail({
                    nom: contactInputs.nom,
                    prenom: contactInputs.prenom,
                    telephone: contactInputs.telephone,
                    email: contactInputs.email,
                    message: contactInputs.message
                });
            }
        } else {
            alert("Veuillez entrer les informations nécéssaires!");
        }
    }

    return (
        <div className='flex flex-col justify-start items-center mt-10 mb-4 mx-2 py-6 px-5 box-shadow2 w-[464px] bg-white gap-5'>
            <div className="flex flex-col justify-start items-start w-full gap-3">
                <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-start"}>Contactez-<span className='text-ac-violet'>nous</span></h2>
                <p className="text-black text-xs font-semibold text-start">
                    {contactus.description}
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
                            className="py-2 px-5 w-full text-black"
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
                            className="py-2 px-5 w-full text-black"
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
                            className="py-2 px-5 w-full text-black"
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
                            className="py-2 px-5 w-full text-black"
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
                            className="py-2 px-5 w-full text-black min-h-[40px]"
                            value={contactInputs.message}
                            onChange={handleContactInputChange}
                        />
                    </div>
                </div>
            </form>

            {/* {errorMessage.show &&
                <div className={"flex justify-between items-center w-full py-2 px-4 rounded-md " + (errorMessage.success ? "bg-green-100" : "bg-red-100")}>
                    <p className={"text-sm text-left max-w-[240px] fold:max-w-[300px] font-semibold " + (errorMessage.success ? "text-green-600" : "text-red-600")}>{errorMessage.message}</p>
                    <IoClose onClick={() => setErrorMessage({ ...errorMessage, message: "", show: false })} className='fill-gray-700 w-6 h-6 border border-gray-700 rounded-md cursor-pointer' />
                </div>
            } */}
            <div onClick={handleSubmit} className={"bg-ac-bleu py-3 px-6 w-full " + (!loading && "cursor-pointer")}>
                {!loading
                    ? <p className={montserratBoldFont.className + " text-white text-base font-bold text-center uppercase"}>Envoyer</p>
                    : <div className="flex justify-center items-center gap-2.5 p-[5px]">
                        <div className="rounded-full bg-white w-3.5 h-3.5 animate-loading1"></div>
                        <div className="rounded-full bg-white w-3.5 h-3.5 animate-loading2"></div>
                        <div className="rounded-full bg-white w-3.5 h-3.5 animate-loading3"></div>
                    </div>
                }
            </div>
        </div>
    )
}