import { useAvatarLogic } from '@/app/(dashboard)/components/header/avatar-dropdown/hooks/use-avatar-logic'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LOGIN_ROUTE } from '@/data/routes'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export const AvatarDropdown: React.FC = async () => {
  const session = await auth()
  if (!session) return redirect(LOGIN_ROUTE.url)

  const { singOutUser, initials, image } = useAvatarLogic({ session })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={image.src} alt={image.alt} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <form action={singOutUser}>
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="w-full">
            <button type="submit">Sair</button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
