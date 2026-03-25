import { useState } from "react";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import type { ICredentials } from "./Auth.contract";
export default function LoginForm() {

    const[credentials, setCredentails]= useState<ICredentials>({
        username:"",
        password:""
    })
    console.log(credentials);
    return (
        <form action="" className="flex flex-col gap-5">
            <div className="flex w-full items-center">
                <FormLabel htmlfor="username" clasName="">UserName:</FormLabel>
                <div className="w-2/3 flex flex-col">
                    <TextInput type="email" name="username" />
                </div>
            </div>
            <div className="flex w-full items-center">
                <FormLabel htmlfor="password">Password: </FormLabel>
                <div className="w-2/3 flex flex-col">
                    <TextInput type="password" name="username" />
                </div>
            </div>
            <div className="flex w-full items-center justify-end">
                <a href="/forget-password" className="text-teal-500 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96">Forget Password?</a>
            </div>
            <div className="flext w-full items-center gap-3">
                <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2">
                    Reset
                </button>
                <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
                    Submit
                </button>

            </div>
        </form>
    );
}