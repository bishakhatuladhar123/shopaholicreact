import type { BaseSyntheticEvent, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

export interface IFormLabelProps{
    htmlfor?:string;
    className?:string;
    children:ReactNode;
}

export interface ITextInputProps {
    type:HTMLInputTypeAttribute;
    className?:string;
    name:string;
    placeholder?:string;
    errMsg?:string;
    handleChange (e:BaseSyntheticEvent):void;
}