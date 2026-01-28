'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Field, FieldError } from '@/components/ui/field';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, registerSchema } from '@/lib/schemas/registerSchema';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors, isValid, isSubmitting } } = useForm({
        resolver: zodResolver(registerSchema),
        mode: 'onTouched'
    });

    const onSubmit = async (data: RegisterSchema) => {
        await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name
        }, {
            onSuccess: () => {
                router.push('/members')
            },
            onError: (ctx) => {
                setError('root', {message: ctx.error.message})
            }
        })
    }

    return (
        <Card className='w-full max-w-md shadow-xl'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 items-center'>
                    <div className='flex flex-row items-center gap-3 text-primary'>
                        <Lock size={30} />
                        <h1 className='text-3xl font-semibold'>Register</h1>
                    </div>
                    <p className='text-muted-foreground'>Sign up to here to create an account</p>
                </div>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 px-6'>
                <div className='flex flex-col gap-1'>
                    <Field data-invalid={!!errors.name}>
                        <Input
                            placeholder='Enter your name'
                            aria-invalid={!!errors.name}
                            {...register('name')}
                        />
                        <FieldError>{errors.name?.message}</FieldError>
                    </Field>
                </div>
                <div className='flex flex-col gap-1'>
                    <Field data-invalid={!!errors.email}>
                        <Input
                            type='email'
                            placeholder='Enter your email'
                            aria-invalid={!!errors.email}
                            {...register('email')}
                        />
                        <FieldError>{errors.email?.message}</FieldError>
                    </Field>

                </div>

                <div className='flex flex-col gap-1'>
                    <Field data-invalid={!!errors.password}>
                        <Input
                            type='password'
                            placeholder='Enter your password'
                            aria-invalid={!!errors.password}
                            {...register('password')}
                        />
                        <FieldError>{errors.password?.message}</FieldError>
                    </Field>

                </div>

                {errors.root && (
                    <div className='text-destructive text-sm text-center'>
                        {errors.root.message}
                    </div>
                )}

                <Button disabled={!isValid || isSubmitting} type='submit' className='w-full'>
                    {isSubmitting ? 'Registering...' : 'Register'}
                </Button>
            </form>
        </Card>
    );
}