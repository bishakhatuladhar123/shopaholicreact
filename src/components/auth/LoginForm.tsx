import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";

import { LoginSchema, type ICredentials } from "./Auth.contract";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import Cookies from "js-cookie";
export default function LoginForm() {

    const { control, handleSubmit, formState: { errors } } = useForm<ICredentials>({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(LoginSchema)
    })
    // console.log(credentials);

     
    const login = async (credentials: ICredentials) => {
        try {
            const response = {
                token: "alphanumeric text"
            }
            //Local Storages
            localStorage.setItem("token", response.token)
            const tokenLocalStorage = localStorage.getItem("token");
            console.log(tokenLocalStorage);
            //localStorage.removeItem("token");
            // localStorage.clear()

            //session Storages
            sessionStorage.setItem("token", response.token);
            const tokenSessionStorage = sessionStorage.getItem("token");
            console.log(tokenSessionStorage);
            sessionStorage.clear();
            sessionStorage.removeItem("token");

            //cookies
            // document.cookie="token="+response.token+"; expiresIn="+new Date()+"; path=/" //js default
            Cookies.set("token", response.token, {
                path: "/",
                expires: 1,
                secure: true,
                sameSite: "Lax"
            })
            //get
            const tokenCookie = Cookies.get('token');
            console.log(tokenCookie);

            //remove
            Cookies.remove('token');

            console.log(credentials);
        }
        catch (exception) {
            console.log(exception);
        }
    }

    return (
        <form onSubmit={handleSubmit(login)} className="flex flex-col gap-5">
            <div className="flex w-full items-center">
                <FormLabel htmlfor="username" className="">UserName:</FormLabel>
                <div className="w-2/3 flex flex-col">
                    <TextInput control={control} errMsg={errors?.username?.message} type="email" name="username" />
                </div>
            </div>
            <div className="flex w-full items-center">
                <FormLabel htmlfor="password">Password: </FormLabel>
                <div className="w-2/3 flex flex-col">
                    <TextInput control={control} errMsg={errors?.password?.message} type="password" name="password" />
                </div>
            </div>
            <div className="flex w-full items-center justify-end">
                <a href="/ForgetPassword" className="text-teal-500 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96">Forget Password?</a>
            </div>
            <div className="flex w-full items-center gap-3">
                <button type="reset" className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2">
                    Reset
                </button>
                <button type="submit" className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
                    Submit
                </button>

            </div>
        </form>
    );
}