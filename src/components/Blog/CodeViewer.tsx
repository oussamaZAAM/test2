
type Props = {
    code: string;
    showLines: boolean;
}

const CodeViewer = ({ code, showLines }: Props) => {
    const replacedText = code
                            .replace(/\bconst\b/g, '<span class="text-[#ff79c6]">const</span>')
                            .replace(/\bfunction\b/g, '<span class="text-[#ff79c6]">function</span>')
                            .replace(/\breturn\b/g, '<span class="text-[#ff79c6]">return</span>')
                            .replace(/\bconsole.log\b/g, '<span class="text-[#8fd8fe]">console</span>.<span class="text-[#d9dcaa]">log</span>')
                            .replace(/\/\/(.*)/g, '<span class="text-gray-400">//$1</span>');
    console.log()
    return (
        <div className="bg-gray-900 p-4 rounded-md shadow-md">
            <pre className="flex flex-col justify-start items-start w-full text-white">
                {replacedText.split("\n").map((line, index) => {
                    return (
                        <code key={index}>
                            {showLines && <span className="text-white mr-10">{index + 1}</span>}
                            <span dangerouslySetInnerHTML={{__html: line}} />
                        </code>
                    )
                })}
            </pre>
        </div>
    );
};

export default CodeViewer;