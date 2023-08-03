"use client";

import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
}

export default function ReturnToTop({ }: Props) {
    const [yPosition, setYPosition] = useState(-18);

    useEffect(() => {
        const handleScroll = () => {
            setYPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href='#' className={(yPosition >= 300 ? "fixed" : "hidden") +
            " flex justify-center items-center gap-4 p-2 -rotate-90 bg-ac-gray hover:bg-gray-100 bottom-8 -right-2 z-50 rounded-full border-2 border-ac-violet transition duration-[600ms] group focus:border-transparent focus:bg-transparent"
        }>
            <p className="text-base text-ac-violet font-bold uppercase transition group-focus:opacity-0">Top</p>
            <FaLongArrowAltRight className="w-6 h-6 fill-ac-violet transition duration-[1500ms] group-focus:translate-x-[700px] group-focus:opacity-0 group-focus:scale-[3]" />
        </a>
    )
}