import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
    children: React.ReactNode;
    duration: number;
    delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, duration, delay }) => {
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
        handleScroll(); // Check initial visibility

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`transition delay-${delay} duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
            ref={elementRef}
        >
            {children}
        </div>
    );
};

export default AnimatedElement;