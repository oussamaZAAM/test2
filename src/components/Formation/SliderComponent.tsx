"use client";

import { formationsData } from '@/data/formationsData';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FormationsSlider = () => {

    const myDiv: JSX.Element =
        (<>
            {formationsData.map((formation) => (
                <Link href={"/formations/" + formation.formation_id} key={formation.formation_id} className="flex flex-col justify-start items-center p-2 min-w-[100px] lg:min-w-[150px]">
                    <div className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] overflow-hidden">
                        <Image src={formation.image_url} width={150} height={150} alt={formation.title} />
                    </div>
                </Link>
            ))}
        </>)

    const [divList, setDivList] = useState<JSX.Element[]>([myDiv, myDiv, myDiv]);

    useEffect(() => {
        const alternateDivs = () => {
            setDivList(prev => {
                const newArray = [...prev];
                newArray.push(myDiv);
                newArray.shift();
                return newArray;
            });
        };

        const intervalId = setInterval(() => {
            alternateDivs();
        }, 10000);

        return () => {
            clearInterval(intervalId); // Clean up the interval when the component unmounts
        };
    }, []);

    return (
        <div className="flex justify-between items-center max-w-[95vw] overflow-x-hidden gap-12 px-2 my-6 group">
            {divList.map((div) => {
                return (
                    <div className="flex gap-12 animate-autoscroll group-hover:[--animation-speed:50s]">{div}</div>
                )
            })}
        </div>
    );
};

export default FormationsSlider;
