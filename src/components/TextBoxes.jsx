import React, { useRef } from 'react';
import { FiSend, FiX } from "react-icons/fi";
import useApiFetch from '../Hooks/useApiFetch';
import { useState } from 'react';


const TextArea = ({ prompt, value , onChange}) => {

    const TextAreaRef = useRef();

    const handleChange = (e) => {
        if (onChange) {
            onchange(e.target.value)//check on this if statement if it is necessary
        }
        TextAreaRef.current.style.height = "auto";
        TextAreaRef.current.style.width = "auto";
        TextAreaRef.current.style.width = TextAreaRef.current.scrollWidth + "px";//check wether this style works 
        TextAreaRef.current.style.height = TextAreaRef.current.scrollHeight + "px";
    };

    return (
        <textarea
            className="w-full px-4 py-2 bg-gray-800
         text-white border-none rounded-md resize-none h-[10rem]
         md:h-[20rem]  lg:h-[30rem] shadow-md shadow-neutral-900
         focus:outline-none "
            placeholder={prompt}
            value={value}
            onChange={handleChange}
            ref={TextAreaRef}
            style={{ overflow: "hidden" }} /*check if this should be hidden if not then style the scroll bar */
        />
    )

}


export const InputArea = ({ InputText, setInputText, handleSubmit, prompt }) => {

    const handleClear = () => {
        setInputText('');
    }

    return (
        <div className="flex-1 flex flex-col text-black p-10 max-h-screen">
            <TextArea
                value={InputText}
                onChange={setInputText}
                prompt={prompt}
            />
            <div className="relative">
                {InputText && (
                    <FiX
                        className="absolute bottom-0 left-0  m-0 text-blue-500 cursor-pointer"
                        onClick={handleClear}
                    />
                )

                }
                
                    <FiSend
                        className="absolute bottom-0 right-0 m-2 text-white cursor-pointer"
                        onClick={handleSubmit}
                    />
                

                

            </div>
        </div>
    )
}



export const OutputArea = ({ outputText, handleClear }) => {
    return (
        <div className="flex-1 flex flex-col text-black p-10 max-h-screen">
            <TextArea
                value={outputText}
                onChange={() => { }}
                onClear={handleClear}
            />
            <div className="relative">
                {outputText && (
                    <FiX
                        className="absolute bottom-0 left-0 m-2 text-blue-500 cursor-pointer"
                        onClick={handleClear}
                    />
                )

                }
            </div>
        </div>
    )
}





function TextBoxes({ prompt }) {

    const [InputText, setInputText] = useState("");
    const [ApiResponse, ApiFetch] = useApiFetch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            model: "text-davinci-003",
            prompt: prompt + InputText,
            temperature: 0,
            top_p: 1,
            max_tokens: 100,
        };
        ApiFetch(body);
    };

    const handleClear = () => {
        setInputText("");
    }

    return (
        <div className="md:flex md:flex-row items-center justify-center bg-neutral-800  py-4  h-full w-full">
            <InputArea
                inputText={InputText}
                setInputText={setInputText}
                handleSubmit={handleSubmit}
                prompt={prompt}
            />
            <OutputArea
                outputText={ApiResponse}
                handleClear={handleClear}
            />
        </div>
    )
}

export default TextBoxes