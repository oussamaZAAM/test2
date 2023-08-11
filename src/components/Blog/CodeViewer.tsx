"use client";

import { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

type Props = {
    code: string;
    showLines: boolean;
}

const CodeViewer = ({ code, showLines }: Props) => {
    const [darkMode, setDarkMode] = useState(true);

    const replacedDarkText = code
        .replace(/[\+\-*><=?\n\r]/g, '<span class="text-white">$&</span>')
        .replace(/\bconst\b/g, '<span class="text-[#ff79c6]">const</span>')
        .replace(/\bfunction\b/g, '<span class="text-[#ff79c6]">function</span>')
        .replace(/\breturn\b/g, '<span class="text-[#ff79c6]">return</span>')
        .replace(/\bconsole.log\b/g, '<span>console</span>.<span class="text-yellow-300">log</span>')
        .replace(/\/\/(.*)/g, '<span class="text-gray-400">//$1</span>')
        .replace(/(\w+)\s*\(([^)]*)\)/g, '<span class="text-yellow-300">$1</span><span class="text-[#8fd8fe]">($2)</span>')
        .replace(/[.,;:{}()]/g, '<span class="text-white">$&</span>')
    const replacedLightText = code
        .replace(/\bconst\b/g, '<span class="text-pink-600">const</span>')
        .replace(/\bfunction\b/g, '<span class="text-pink-600">function</span>')
        .replace(/\breturn\b/g, '<span class="text-pink-600">return</span>')
        .replace(/\bconsole.log\b/g, '<span class="text-cyan-600">console</span>.<span class="text-yellow-600">log</span>')
        .replace(/\/\/(.*)/g, '<span class="text-gray-400">//$1</span>')
    const replacedText = darkMode ? replacedDarkText : replacedLightText;

    return (
        <div className={"max-w-[85vw] xm:max-w-[60vw] truncate flex flex-col justify-center items-start w-full p-4 rounded-md shadow-md " + (darkMode ? "bg-gray-900 text-[#8fd8fe]" : "bg-gray-200 text-black")}>
            <div className="flex justify-end items-end w-full">
                {darkMode
                    ? <MdLightMode onClick={() => setDarkMode(false)} className="p-1 self-center rounded-md border border-white cursor-pointer" size={30} color="white" />
                    : <MdNightlight onClick={() => setDarkMode(true)} className="p-1 self-center rounded-md border border-black cursor-pointer" size={30} color="black" />
                }
            </div>
            <pre className="flex flex-col justify-start items-start w-full">
                {replacedText.split("\n").map((line, index) => {
                    return (
                        <code key={index}>
                            {showLines && <span className={"mr-10 select-none " + (darkMode ? "text-white" : "text-black")}>{index + 1}</span>}
                            <span dangerouslySetInnerHTML={{ __html: line }} />
                        </code>
                    )
                })}
            </pre>
        </div>
    );
};

export default CodeViewer;