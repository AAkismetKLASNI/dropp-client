import { useState } from 'react';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  return <div>{isLogin ? 'log in' : 'sign up'}</div>;
}
