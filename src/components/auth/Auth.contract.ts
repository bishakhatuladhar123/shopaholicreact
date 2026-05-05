import z from "zod";
export interface IUsername {
    username: string;
}

export interface ICredentials extends IUsername {
    password: string;
}

export interface IResetPassword{
    password:string;
    confirmPassword:string;
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
export interface IUserDetail {
    id: number | string;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    birthDate: string;
    image: string;
    address: {
      address: string;
      city: string,
      state: string,
      stateCode: string,
      postalCode: string,
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
    role: string;
  }
  
export const LoginSchema = z.object({
    username: z.string().nonempty("Username is required.").nonoptional(),
    password: z.string().nonempty("Password is required.").nonoptional(),
})


export const UserRegisterSchema = z.object({
    name: z.email().nonempty("Name is required.").nonoptional(),
    address: z.string().nonempty("Address is required.").nonoptional(),
})