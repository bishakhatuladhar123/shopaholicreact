import { useState, type BaseSyntheticEvent } from "react";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import type { ICredentials } from "./Auth.contract";

import { LoginSchema } from "./Auth.contract";
export default function LoginForm() {

    const[credentials, setCredentials]= useState<ICredentials>({
        username:"",
        password:""
    })
    console.log(credentials);

    const handleInputChange=(e:BaseSyntheticEvent)=>{
        const{name,value}=e.target;
        setCredentials({
            ...credentials,
            [name]:value,
        });
    }
    const login=async(e:BaseSyntheticEvent)=>{
        try{
            e.preventDefault()
            await LoginSchema.parseAsync(credentials)
            console.log(credentials);
        }
        catch(exception)
        {
            console.log(exception);
        }
       
    }
    return (
        <form onSubmit={login} className="flex flex-col gap-5">
            <div className="flex w-full items-center">
                <FormLabel htmlfor="username" className="">UserName:</FormLabel>
                <div className="w-2/3 flex flex-col">
                    <TextInput type="email" name="username" handleChange={handleInputChange} />
                </div>
            </div>
            <div className="flex w-full items-center">
                <FormLabel htmlfor="password">Password: </FormLabel>
                <div className="w-2/3 flex flex-col">
                    <TextInput type="password" name="username" handleChange={handleInputChange}/>
                </div>
            </div>
            <div className="flex w-full items-center justify-end">
            <a href="/forget-password" className="text-teal-500 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96">Forget Password?</a>
            </div>
            <div className="flext w-full items-center gap-3">
                <button  type="reset" className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2">
                    Reset
                </button>
                <button type="submit" className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
                    Submit
                </button>

            </div>
        </form>
    );
}