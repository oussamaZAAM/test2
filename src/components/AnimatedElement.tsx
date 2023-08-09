"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
    children: React.ReactNode;
    type: string;
    duration: number;
    delay: number;
    className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, type, duration, delay, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (elementRef.current) {
            const top = elementRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (type === "popup") {
        return (
            <div
                style={{transitionDelay: delay + "ms", transitionDuration: duration + "ms"}}
                className={`${className} transition ${isVisible ? 'scale-100' : 'scale-0'}`}
                ref={elementRef}
            >
                {children}
            </div>
        );
    }

    if (type === "from-left") {
        return (
            <div
                style={{transitionDelay: delay + "ms", transitionDuration: duration + "ms"}}
                className={`${className} transition ${isVisible ? 'translate-x-0' : '-translate-x-[50%]'}`}
                ref={elementRef}
            >
                {children}
            </div>
        );
    }

};

export default AnimatedElement;