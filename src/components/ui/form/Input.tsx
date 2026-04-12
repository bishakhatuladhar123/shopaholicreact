import type { BaseSyntheticEvent } from "react";
import type { IFileInputProps, ISelectOptionsProps, ISingleOption, ITextAreaProps, ITextInputProps } from "./Form.contract";

export const TextInput = ({ type = 'text', name, className = '',  errMsg = "", handleChange }: Readonly<ITextInputProps>) => {
    return (
        <>
            <input
                type={type}
                name={name}
                placeholder={`Enter your ${name}...`}
                onChange={handleChange}
                className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white  ${className}`}
            />
            <span className="text-red-800 text-sm italic">{errMsg}</span>

        </>
    );
}

export const TextAreaInput = ({ name, className = '', errMsg = "", handleChange }: Readonly<ITextAreaProps>) => {
    return (
        <>
            <textarea
                name={name}
                placeholder={`Enter your ${name}...`}
                onChange={handleChange}
                rows={5}
                className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white  ${className}`}
            ></textarea>
            <span className="text-red-800 text-sm italic">{errMsg}</span>

        </>
    );
}

export const FileInput = ({ name, className = '', errMsg = '', handleChange }: Readonly<IFileInputProps>) => {
    return (
        <>
            <input
                type={'file'}
                name={name}
                placeholder={`Enter you ${name}....`}
                onChange={(e:BaseSyntheticEvent)=>{
                    const files=Object.values(e.target.files)
                    handleChange(name,files [0] as File)
            }}
            className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className} `}
/>  
        </>
    );
}
export const SelectOptionInput = ({ name, className = '', errMsg = "", handleChange, options }: Readonly<ISelectOptionsProps>) => {
    return (
        <>
            <select name={name} onChange={handleChange} className={`border border-gray-300 w-full p-2 h-10 rounded-md shadow bg-white  ${className}`}>
                <option value="">--Select Any One--</option>
                {
                    options && options.map((option: ISingleOption, i: number) => (
                        <option key={i} value ={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
            <span className="text-red-800 text-sm italic">{errMsg}</span>

        </>
    );
}