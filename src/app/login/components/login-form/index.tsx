'use client'

import { PasswordInput } from '@/app/login/components/login-form/password-input'
import { FormInputField } from '@/components/form/input'
import { Icon } from '@/components/icon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import { useFormLogic } from '@/app/login/components/login-form/hooks/use-form-logic'

export function LoginForm() {
  const { form, formRef, formAction, shouldSubmit } = useFormLogic()

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        className="mx-auto flex h-fit max-w-sm flex-col justify-center gap-4 rounded-lg bg-white p-6 shadow-lg md:p-10 lg:col-span-5 lg:gap-6"
      >
        <header className="flex items-center gap-2">
          <Icon className="h-10 w-fit fill-black" />
          <Typography asChild variant="large" className="font-bold">
            <h1>Infinity Doctors</h1>
          </Typography>
          <Badge variant="gray">dashboard</Badge>
        </header>

        <div>
          <Typography variant="large" className="font-bold">
            Entrar em Infinity Doctors
          </Typography>
          <Typography variant="small" className="text-foreground">
            Não está no seu dispositivo? Use uma janela privada ou anônima para
            entrar.
          </Typography>
        </div>

        <FormInputField name="email" label="Email">
          <Input placeholder="joaosilva@mail.com" />
        </FormInputField>
        <PasswordInput />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={!shouldSubmit}
        >
          Acessar
        </Button>
      </form>
    </Form>
  )
}
