'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

export const SelectLanguage = () => {
  const [language, setLanguage] = useState('pt-br')

  return (
    <Select onValueChange={setLanguage} value={language}>
      <SelectTrigger className="border-none shadow-none focus-visible:border-none focus-visible:ring-0">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en-us">🇺🇸 English</SelectItem>
        <SelectItem value="pt-br">🇧🇷 Português</SelectItem>
      </SelectContent>
    </Select>
  )
}
