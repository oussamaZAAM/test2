import { Jost, Montserrat } from "next/font/google";
import Link from "next/link";

const jostFont = Jost({ subsets: ["latin"] });
const montserratFont = Montserrat({ subsets: ["latin"] });

type Props = {
    id: string,
    title: string,
    body: string
}

export default function BlogCard({ id, title, body }: Props) {
    return (
        <div className="w-full flex flex-col justify-between items-start py-5 px-6 border-2 gap-4 border-ac-bleu">
            <div className="w-full flex flex-col justify-start items-start gap-4">
                <h3 className={jostFont.className + " font-bold text-2xl text-black text-start line-clamp-3"}>
                    {title}
                </h3>
                <h5 className={montserratFont.className + " font-normal text-sm text-black text-start line-clamp-6"}>
                    {body}
                </h5>
            </div>
            <Link href={"/blogs/"+id}><p className={montserratFont.className + " w-full text-[#5C8BFC] underline text-start font-semibold text-base"}>
                Lire plus
            </p>
            </Link>
        </div>
    )
}