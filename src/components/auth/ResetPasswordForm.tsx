// import { useState } from "react";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import type { IResetPassword, IUsername } from "./Auth.contract";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useFormState } from "react-dom";
import { CancelButton, SubmitButton } from "../ui/button/Button";
import { LuSend, LuX } from "react-icons/lu";

const ResetPasswordSchema = z.object({
    password: z.string().min(8).nonempty().nonoptional(),
    confirmPassword: z.string().min(8).nonempty().nonoptional()
})

export default function ResetPasswordForm() {

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues:
        {
            password: "",
            confirmPassword:"",
        },
        resolver: zodResolver(ResetPasswordSchema)
    })

    const submitHandle = async (data: IResetPassword) => {
        try {
            console.log(data);
        }
        catch (exception) {
            console.log(exception);
        }
    }
    return (
        <form onSubmit={handleSubmit(submitHandle)} className="flex flex-col gap-5">
            <div className="flex w-full items-center">
                <FormLabel htmlfor="password" className="">Password:</FormLabel>
                <div className="w-2/3 flex flex-col">
                <TextInput control={control} errMsg={errors?.password?.message} type="email" name="password" />
                </div>
            </div>
            <div className="flex w-full items-center gap-1 ">
                <FormLabel htmlfor="confirmPassword" className="">Re-Password:</FormLabel>
                <div className="w-2/3 flex flex-col gap-1">
                <TextInput control={control} errMsg={errors?.confirmPassword?.message} type="email" name="confirmPassword" />
                </div>
            </div>

            <div className="flex w-full items-center gap-3">
                <CancelButton className="gap-2" disabled={isSubmitting}><LuX /> Cancel</CancelButton>
                <SubmitButton className="gap-2" disabled={isSubmitting}><LuSend /> Reset</SubmitButton>
            </div>
        </form>
    );
}