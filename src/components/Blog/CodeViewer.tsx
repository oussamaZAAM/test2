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
        .replace(/(\w+)\s*\(([^)]*)\)/g, '<span class="text-yellow-300">$1</span><span class="text-[#8fd8fe]">($2)</span>')
        .replace(/[.,;:{}()]/g, '<span class="text-white">$&</span>')
        .replace(/\/\/(.*)/g, '<span class="text-gray-400">//$1</span>')
    const replacedLightText = code
        .replace(/[\+\-*><=?\n\r]/g, '<span class="text-black">$&</span>')
        .replace(/\bconst\b/g, '<span class="text-pink-600">const</span>')
        .replace(/\bfunction\b/g, '<span class="text-pink-600">function</span>')
        .replace(/\breturn\b/g, '<span class="text-pink-600">return</span>')
        .replace(/\bconsole.log\b/g, '<span>console</span>.<span class="text-yellow-600">log</span>')
        .replace(/(\w+)\s*\(([^)]*)\)/g, '<span class="text-yellow-600">$1</span><span class="text-cyan-600">($2)</span>')
        .replace(/[.,;:{}()]/g, '<span class="text-black">$&</span>')
        .replace(/\/\/(.*)/g, '<span class="text-gray-400">//$1</span>')
    const replacedText = darkMode ? replacedDarkText : replacedLightText;

    return (
        <div className={"relative max-h-[400px] overflow-y-auto max-w-[92.5vw] fold:max-w-[85vw] xm:max-w-[60vw] text-ellipsis flex flex-col justify-start items-start w-full p-4 rounded-md shadow-md " + (darkMode ? "bg-gray-900 text-[#8fd8fe]" : "bg-gray-200 text-black")}>
            <div className="sticky top-0 left-[95%] flex justify-end z-40">
                {darkMode
                    ? <MdLightMode onClick={() => setDarkMode(false)} className="p-1 self-center rounded-md border bg-gray-900 border-white cursor-pointer" size={30} color="white" />
                    : <MdNightlight onClick={() => setDarkMode(true)} className="p-1 self-center rounded-md border bg-gray-200 border-black cursor-pointer" size={30} color="black" />
                }
            </div>
            <pre className="flex flex-col justify-start items-start w-full mt-1">
                {replacedText.split("\n").map((line, index) => {
                    return (
                        <code key={index}>
                            {showLines && <span className={"absolute left-0 ml-2 select-none " + (darkMode ? "text-white" : "text-black")}>{index + 1}</span>}
                            <span className="ml-8" dangerouslySetInnerHTML={{ __html: line }} />
                        </code>
                    )
                })}
            </pre>
        </div>
    );
};

export default CodeViewer;