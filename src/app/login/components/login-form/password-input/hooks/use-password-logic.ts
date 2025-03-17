import { Eye, EyeOff } from 'lucide-react'
import { useCallback, useState } from 'react'

const PASSWORD_EXAMPLE = 'MinhaSenh@123'

export const usePasswordLogic = () => {
  const [showPassword, setShowPassword] = useState(false)
  const onShowPasswordToggle = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }, [])

  const Icon = showPassword ? EyeOff : Eye
  const type = showPassword ? 'text' : 'password'
  const placeholder = showPassword
    ? PASSWORD_EXAMPLE
    : PASSWORD_EXAMPLE.replace(/./g, '•')

  return {
    Icon,
    type,
    placeholder,
    onShowPasswordToggle,
  }
}
