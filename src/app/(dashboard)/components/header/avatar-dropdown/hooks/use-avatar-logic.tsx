import { signOut } from '@/lib/auth'
import type { Session } from 'next-auth'

type Props = {
  session: Session
}

export const useAvatarLogic = ({ session }: Props) => {
  const { initials, image, name } = session.user

  const singOutUser = async () => {
    'use server'
    await signOut()
  }

  return {
    singOutUser,
    initials,
    image: {
      src: image || '',
      alt: name || 'Avatar Image',
    },
  }
}
