import type { HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";

export interface IFormLabelProps{
    htmlfor?:string;
    clasName?:string;
    children:ReactNode;
}

export interface ITextInputProps {
    text:HTMLInputTypeAttribute;
    className?:string;
    name:string;
    placeholder?:string;
}