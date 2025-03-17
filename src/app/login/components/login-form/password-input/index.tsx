'use client'

import { usePasswordLogic } from '@/app/login/components/login-form/password-input/hooks/use-password-logic'
import { FormInputField } from '@/components/form/input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const PasswordInput: React.FC = () => {
  const { type, Icon, onShowPasswordToggle, placeholder } = usePasswordLogic()

  return (
    <FormInputField name="password" label="Senha">
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className="right-0 hover:bg-transparent"
        tabIndex={-1}
        onClick={onShowPasswordToggle}
      >
        <Icon />
      </Button>
      <Input
        className="pr-8 text-black"
        type={type}
        placeholder={placeholder}
      />
    </FormInputField>
  )
}
