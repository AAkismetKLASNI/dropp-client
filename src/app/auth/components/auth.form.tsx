import { useState } from 'react';
import { useAuthForm } from '../hooks/use.auth.form';
import Form from 'next/form';
import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { ToggleForm } from './toggle.form';
import { VALIDATION_SCHEMES } from '@/configs/validation.schemes';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const { handleSubmit, isPending, onSubmit, register } = useAuthForm(isLogin);

  return (
    <div className='space-y-6'>
      <ToggleForm
        isLogin={isLogin}
        setLogin={setIsLogin}
      />

      <Form
        action='/'
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <Field
          {...register('email', VALIDATION_SCHEMES.email)}
          placeholder='Email'
        />

        <Field
          {...register('password', VALIDATION_SCHEMES.password)}
          placeholder='Password'
        />

        <Button disabled={isPending}>{isLogin ? 'Log in' : 'Sign up'}</Button>
      </Form>
    </div>
  );
}
