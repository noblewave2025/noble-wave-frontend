'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthSchema } from '@/schemas/auth-schema';
import { z } from 'zod';
import { FC } from 'react';
import { createUserAction } from '@/server-actions/createUserAction';
import { toast } from 'sonner';
import { loginAction } from '@/server-actions/loginAction';

interface IAuthFormProps {
  isRegister?: boolean;
}

export const AuthForm: FC<IAuthFormProps> = ({ isRegister = false }) => {
  const form = useForm<z.infer<typeof AuthSchema>>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: z.infer<typeof AuthSchema>) => {
    try {
      if (isRegister) {
        await createUserAction(formData);
      } else {
        await loginAction(formData);
      }
    } catch {
      toast.error('Произошла ошибка. Повторите позже...');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 rounded-4xl border px-2 pt-22 pb-10 md:px-6"
      >
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-black md:text-7xl">
            {isRegister ? 'Регистрация' : 'Вход в аккаунт'}
          </p>
          <p className="text-muted-foreground font-semibold">
            Введите данные для{' '}
            {isRegister ? 'создания аккаунта' : 'входа в аккаунт'}
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Почта</FormLabel>
              <FormControl>
                <Input placeholder="Введите почту" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isRegister ? 'Создать акканут' : 'Войти'}
        </Button>
      </form>
    </Form>
  );
};
