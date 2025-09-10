import { LoginForm } from '@/components/login-form/LoginForm';
import { RegisterForm } from '@/components/register-form/RegisterForm';

export default async function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-sm">
        <LoginForm />
        <hr />
        <RegisterForm />
      </div>
    </div>
  );
}
