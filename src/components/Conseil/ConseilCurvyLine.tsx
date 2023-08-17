"use client";

import { getXfromY1, getXfromY2, getXfromY3 } from '@/utils/curveFunctions';
import { useEffect, useState } from 'react';

type Props = {}

export default function ConseilCurvyLine({ }: Props) {
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(-18);

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.pageYOffset;
            if (yPos <= 1396 && yPos >= 0) {
                setYPosition(yPos - 18);
                if (yPos <= 470) {
                    setXPosition(getXfromY1(yPos));
                } else {
                    if (yPos <= 934) {
                        setXPosition(getXfromY2(yPos));
                    } else {
                        setXPosition(getXfromY3(yPos));
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {/* Absolute Curvy Line */}
            <div className="hidden xm:flex flex-col justify-start items-center relative z-50">
                <svg className='absolute top-0 -translate-x-[38px]' width="80" height="470" viewBox="0 0 80 470" fill="none">
                    <path d="M80 0 C-20 150 -20 320 80 470" stroke="black" strokeWidth="6" />
                </svg>
                <svg className='absolute top-[464px] translate-x-[38px]' width="80" height="470" viewBox="0 0 80 470" fill="none">
                    <path d="M0 470 C100 320 100 150 0 0" stroke="black" strokeWidth="6" />
                </svg>
                <svg className='absolute top-[928px] -translate-x-[38px]' width="80" height="470" viewBox="0 0 80 470" fill="none">
                    <path d="M80 0 C-20 150 -20 320 80 470" stroke="black" strokeWidth="6" />
                </svg>
                <svg style={{ transform: `translate(${xPosition}px, ${yPosition}px)` }} className='absolute top-0 -translate-y-[18px]' width="40" height="40">
                    <circle cx="20" cy="20" r="20" fill="black" />
                </svg>
            </div></>
    )
}