import { Lato, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {}

const montserratFont = Montserrat({ subsets: ["latin"] });
const latoFont = Lato({ weight: "400", subsets: ["latin"] });

export default function FormationCard({ }: Props) {
  return (
    <div className='flex flex-col justify-start items-center gap-6 w-full py-5 px-6 rounded-xl border transition duration-100 hover:duration-300 shadow-formation-unhover hover:shadow-formation-hover max-w-[270px] fold:max-w-[320px]'>
      <div className="flex flex-col justify-start items-center gap-3 w-full">
        <div className="flex justify-between items-end w-full">
          <img loading='lazy' decoding='async' src={"https://i.ibb.co/dDZFmNv/testing.png"} width={75} height={75} alt='testing' />
          <h5 className={montserratFont.className + " text-3xl text-ac-violet text-left font-medium w-min"}>Cyber Security</h5>
        </div>

        <div className="bg-ac-violet h-0.5 w-full"></div>
        <p className={latoFont.className + " text-base text-center font-medium"}>
          Nequi dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </p>
      </div>
      <div className="flex flex-col justify-start items-stretch gap-3 w-full">
        <div className="flex justify-between items-center w-full">
          <p className={montserratFont.className + " font-semibold text-xl text-start"}>Postman</p>
          <HiArrowNarrowRight color='black' size={30}/>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className={montserratFont.className + " font-semibold text-xl text-start"}>Mockito</p>
          <HiArrowNarrowRight color='black' size={30}/>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className={montserratFont.className + " font-semibold text-xl text-start"}>Selenium</p>
          <HiArrowNarrowRight color='black' size={30}/>
        </div>

        <div className="flex justify-center items-center">
          <Link href={"/formations/cyber-security"}><p className={montserratFont.className + " font-medium text-base text-center text-[#5C8BFC] underline"}>Voir plus</p></Link>
        </div>
      </div>
    </div>
  )
}