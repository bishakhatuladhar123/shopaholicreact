// import { useState } from "react";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import type { IUsername } from "./Auth.contract";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useFormState } from "react-dom";
import { CancelButton, SubmitButton } from "../ui/button/Button";
import { LuSend, LuX } from "react-icons/lu";

const ForgetPasswordSchema = z.object({
    username: z.string().email("Invalid email address").min(1, "Email is required")
    // username: z.email().nonempty().nonoptional()
})

export default function ForgetPasswordForm() {

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues:
        {
            username: ""
        },
        resolver: zodResolver(ForgetPasswordSchema)
    })

    const submitHandle = async (data: IUsername) => {
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
                <FormLabel htmlfor="username" className="">UserName:</FormLabel>
                <div className="w-2/3 flex flex-col">
                <TextInput control={control} errMsg={errors?.username?.message} type="email" name="username" />
                </div>
            </div>

            <div className="flex w-full items-center gap-3">
                <CancelButton className="gap-2" disabled={isSubmitting}><LuX /> Reset</CancelButton>
                <SubmitButton className="gap-2" disabled={isSubmitting}><LuSend /> Submit</SubmitButton>
            </div>
        </form>
    );
}