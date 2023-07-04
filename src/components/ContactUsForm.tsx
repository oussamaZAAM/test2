import { Montserrat } from 'next/font/google';

const montserratNormalFont = Montserrat({ weight: "400", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

type Props = {}

export default function ContactUsForm({ }: Props) {
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
            <form className="flex flex-col justify-start items-stretch gap-3 w-full">
                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="nom" className={montserratNormalFont.className + ' flex justify-center items-center text-sm absolute inset-y-2 left-5 gap-1'}>
                        <span className="text-zinc-400 font-normal">Nom</span>
                        <span className="text-red-500">*</span>
                    </label>
                    <input name="nom" type="text" placeholder='' className="py-2 px-5 w-full" />
                </div>
                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="nom" className={montserratNormalFont.className + ' flex justify-center items-center text-sm absolute top-2 left-5 gap-1'}>
                        <span className="text-zinc-400 font-normal">Prénom</span>
                        <span className="text-red-500">*</span>
                    </label>
                    <input name="nom" type="text" placeholder='' className="py-2 px-5 w-full" />
                </div>
                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="nom" className={montserratNormalFont.className + ' flex justify-center items-center text-sm absolute top-2 left-5 gap-1'}>
                        <span className="text-zinc-400 font-normal">Téléphone</span>
                    </label>
                    <input name="nom" type="text" placeholder='' className="py-2 px-5 w-full" />
                </div>
                <div className="flex justify-center items-center relative border border-zinc-300 ">
                    <label htmlFor="nom" className={montserratNormalFont.className + ' flex justify-center items-center text-sm absolute top-2 left-5 gap-1'}>
                        <span className="text-zinc-400 font-normal">Email</span>
                        <span className="text-red-500">*</span>
                    </label>
                    <input name="nom" type="text" placeholder='' className="py-2 px-5 w-full" />
                </div>
                <div className="flex justify-start items-start relative border border-zinc-300 ">
                    <label htmlFor="nom" className={montserratNormalFont.className + ' flex justify-center items-center text-sm absolute top-2 left-5 gap-1'}>
                        <span className="text-zinc-400 font-normal">Message</span>
                        <span className="text-red-500">*</span>
                    </label>
                    <textarea name="nom" placeholder='' className="py-2 px-5 w-full min-h-[40px]" />
                </div>
            </form>

            <div className="bg-ac-bleu py-3 px-6 w-full">
                <p className={montserratBoldFont.className + " text-white text-base font-bold text-center uppercase"}>Envoyer</p>
            </div>
        </div>
    )
}