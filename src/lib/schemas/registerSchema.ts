import z from "zod";

export const registerSchema = z.object({
    name: z.string().min(1, {error: 'Name is required'}),
    email: z.email({error: 'Email is invalid'}),
    password: z.string().min(6, {error: 'Passsword must be at least 6 characters'})
});

export type RegisterSchema = z.infer<typeof registerSchema>
