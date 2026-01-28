import z from "zod";

export const loginSchema = z.object({
    email: z.email({error: 'Email is invalid'}),
    password: z.string().min(6, {error: 'Passsword must be at least 6 characters'})
});

export type LoginSchema = z.infer<typeof loginSchema>
