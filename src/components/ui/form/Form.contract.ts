import type { BaseSyntheticEvent, HTMLInputTypeAttribute, ReactNode } from "react";

export interface IFormLabelProps {
    htmlfor?: string;
    className?: string;
    children: ReactNode;
}
export interface IBaseType {
    name: string;
    className?: string;
    errMsg?: string;
}
export interface IFileInputProps extends IBaseType
{
    handleChange(name:string, files:File|Array<File>):void;
}
export interface ITextAreaProps extends IBaseType{
    rows?:number;
    handleChange(e: BaseSyntheticEvent): void;
}
export interface ITextInputProps extends IBaseType{
    type:HTMLInputTypeAttribute;
    handleChange(e: BaseSyntheticEvent): void;
}
export interface ISingleOption{label:string,value:string}

export interface ISelectOptionsProps extends IBaseType {
    options: Array<ISingleOption>;
    handleChange(e: BaseSyntheticEvent): void;
}