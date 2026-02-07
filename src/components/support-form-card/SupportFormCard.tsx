'use client';

import { useForm } from 'react-hook-form';
import { Meteors } from '../magicui/meteors';
import { SupportSchema } from '@/schemas/support-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useFetch } from '@/hooks/useFetch';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const SupportFormCard = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof SupportSchema>>({
    resolver: zodResolver(SupportSchema),
    defaultValues: {
      fio: '',
      email: '',
      message: '',
    },
  });

  const { loading, makeRequest } = useFetch();

  const onSubmit = async (formData: z.infer<typeof SupportSchema>) => {
    try {
      await makeRequest({
        url: '/api/support',
        method: 'POST',
        body: JSON.stringify(formData),
      });

      toast.success('Форма успешно отправлена!');
      router.replace('/');
    } catch {
      toast.error('Произошла ошибке при отправке формы. Повторите позже');
    }
  };

  return (
    <div className="relative flex flex-col gap-8 overflow-hidden rounded-4xl border px-2 pt-22 pb-4 md:px-6">
      <Meteors number={60} className="top-0 bottom-0 z-10" />
      <div className="z-20 flex flex-col gap-2">
        <p className="text-5xl font-black md:text-7xl">Поддержка</p>
        <p className="text-muted-foreground font-semibold">
          Мы всегда рядом, чтобы помочь! Напишите нам через форму поддержки, и
          мы постараемся ответить как можно скорее.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="z-20 flex flex-col gap-4 rounded-4xl border p-6 backdrop-blur-sm"
        >
          <FormField
            control={form.control}
            name="fio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="ФИО для обращения"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Почта для отправки ответа"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Сообщение</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    placeholder="Сообщение"
                    {...field}
                    className="min-h-44"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            Отправить
          </Button>
        </form>
      </Form>
    </div>
  );
};
