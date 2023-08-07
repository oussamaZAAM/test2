"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
    children: React.ReactNode;
    duration: number;
    delay: number;
    className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, duration, delay, className }) => {
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

    return (
        <div
            style={{transitionDelay: delay + "ms", transitionDuration: duration + "ms"}}
            className={`${className} transition ${isVisible ? 'scale-100' : 'scale-0'}`}
            ref={elementRef}
        >
            {children}
        </div>
    );
};

export default AnimatedElement;