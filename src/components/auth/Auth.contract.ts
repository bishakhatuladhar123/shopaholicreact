import z from "zod";
export interface IUserNameType {
    username?: string;
}

export interface ICredentials extends IUserNameType {
    password?: string;
}

export const LoginSchema = z.object({
    username:z.email().nonempty().nonoptional(),
    password:z.string().nonempty().nonoptional(),
})