import { AvatarDropdown } from '@/app/(dashboard)/components/header/avatar-dropdown'
import { SelectLanguage } from '@/app/(dashboard)/components/header/select-language'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

export async function Header() {
  return (
    <header className="flex w-screen justify-center bg-white">
      <div className="container flex w-full items-center justify-between py-6">
        <Logo className="h-8 w-fit" variant="light" />
        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <div className="relative">
              <Bell />
              <div className="-top-0.25 absolute right-0.5 size-1.25 rounded-full bg-destructive" />
            </div>
          </Button>

          <SelectLanguage />
          <AvatarDropdown />
        </div>
      </div>
    </header>
  )
}
