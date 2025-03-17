import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string
  label: React.ReactNode
  description?: React.ReactNode
  children: React.ReactElement | React.ReactElement[]
}

export const FormInputField: React.FC<Props> = ({
  name,
  label,
  description,
  children,
}) => {
  const form = useFormContext()

  let inputComponentIndex = -1

  React.Children.forEach(children, (child, index) => {
    if (child.type === Input) {
      inputComponentIndex = index
    }
  })

  if (inputComponentIndex < 0) {
    throw new Error('Input component is required in FormInputField')
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="*:not-[input]:-translate-y-1/2 relative *:not-[input]:absolute *:not-[input]:top-1/2">
                {React.Children.map(children, (child, index) =>
                  inputComponentIndex === index && React.isValidElement(child)
                    ? React.cloneElement(child, field)
                    : child,
                )}
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
