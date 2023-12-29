import React, { useEffect, useRef } from 'react';


const Editor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        async function init() {
        }
        init();
    }, []);

    const handleFontSizeChange = (size) => {
        if (editorRef.current) {
            editorRef.current.style.fontSize = `${size}px`;
        }
    };

    return (
        <div className="relative w-full h-full">
            <div className="flex justify-between items-center mb-4">
                <select
                    onChange={(e) => handleFontSizeChange(e.target.value)}
                    className="px-2 py-2 rounded-md  text-black"
                >
                    <option value="14">Small</option>
                    <option value="18">Medium</option>
                    <option value="24">Large</option>
                </select>
               
            </div>
            <textarea
                id="realtimeEditor"
                ref={editorRef}
                className="w-full h-[90%] p-2 rounded-md border border-zinc-600"
            ></textarea>
        </div>
    );
};

export default Editor;
