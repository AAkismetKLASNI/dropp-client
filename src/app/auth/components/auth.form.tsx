import { useState } from 'react';
import { useAuthForm } from '../hooks/use.auth.form';
import Form from 'next/form';
import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { ToggleForm } from './toggle.form';
import { VALIDATION_AUTH } from '@/configs/validation.schemes';
import { Logo } from '@/components/ui/logo';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const { handleSubmit, isPending, onSubmit, register } = useAuthForm(
    isLogin ? 'login' : 'register'
  );

  return (
    <div className='space-y-6 py-10 px-2 rounded-xl'>
      <Logo
        className='w-10 h-10 mx-auto'
        size={40}
      />

      <ToggleForm
        isLogin={isLogin}
        setLogin={setIsLogin}
      />

      <Form
        action='/'
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-6'
      >
        <Field
          {...register('email', VALIDATION_AUTH.email)}
          placeholder='Email'
        />

        <Field
          {...register('password', VALIDATION_AUTH.password)}
          placeholder='Password'
          type='password'
        />

        <Button disabled={isPending}>{isLogin ? 'Log in' : 'Sign up'}</Button>
      </Form>
    </div>
  );
}
