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
export interface IFileInputProps<T extends FieldValues> extends IBaseType
{
    control:Control<T>;
}
export interface ITextAreaProps<T extends FieldValues>  extends IBaseType{
    rows?:number;
    control:Control<T>
}
export interface ITextInputProps<T extends FieldValues>  extends IBaseType{
    type:HTMLInputTypeAttribute;
control:Control<T>
}
export interface ISingleOption{label:string,value:string}

export interface ISelectOptionsProps<T extends FieldValues> extends IBaseType {
    options: Array<ISingleOption>;
    control:Control<T>
}