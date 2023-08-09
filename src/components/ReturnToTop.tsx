"use client";

import { useEffect, useState } from "react";
import { PiRocketFill } from "react-icons/pi";

type Props = {
}

export default function ReturnToTop({ }: Props) {
    const [yPosition, setYPosition] = useState(-18);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setYPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1500);
    }

    return (
        <a href="#" onClick={handleClick} className={(yPosition >= 300 ? "fixed" : "hidden") +
            " flex justify-center items-center gap-4 p-2 -rotate-90  bottom-8 -right-2 z-50 rounded-full " +
            (clicked ? "border-0 border-transparent bg-transparent" : "bg-ac-gray hover:bg-gray-100 border-2 border-ac-violet")
        }>
            <p className={"text-base text-ac-violet font-bold uppercase " + (clicked ? "opacity-0" : "opacity-100")}>Top</p>
            <PiRocketFill className={"w-6 h-6 fill-ac-violet transition rotate-90 " + (clicked ? "translate-x-[1000px] scale-[4] duration-[1500ms]" : "duration-0")} />
        </a>
    )
}