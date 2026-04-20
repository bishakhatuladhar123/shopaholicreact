import z from "zod";
export interface IUsername {
    username: string;
}

export interface ICredentials extends IUsername {
    password: string;
}

export interface IUserRegister {
    password: string;
    name: string;
    email: string;
    role: string;
    gender: string;
    phone: string;
    address: string;
    image: string;
}
export const LoginSchema = z.object({
    username: z.email().nonempty("Username is required.").nonoptional(),
    password: z.string().nonempty("Password is required.").nonoptional(),
})


export const UserRegisterSchema = z.object({
    name: z.email().nonempty("Name is required.").nonoptional(),
    address: z.string().nonempty("Address is required.").nonoptional(),
})