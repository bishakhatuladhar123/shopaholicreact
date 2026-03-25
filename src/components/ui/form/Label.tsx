
import type { IFormLabelProps } from "./Form.contract";
export const FormLabel=({htmlfor="", className="font-semibold",children}:Readonly<IFormLabelProps>)=>{
    return(
        <label htmlFor={htmlfor} className={`w-2/3 font-semibold ${className}`} >{children}</label>
    );
}