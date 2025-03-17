import { Header } from '@/app/(dashboard)/components/header'
import { MainHeader } from '@/app/(dashboard)/components/main-header'
import { NavigationTabs } from '@/app/(dashboard)/components/navigation-tabs'
import { LOGIN_ROUTE } from '@/data/routes'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import type React from 'react'

type Props = React.PropsWithChildren

export default async function Layout({ children }: Props) {
  const session = await auth()
  if (!session) return redirect(LOGIN_ROUTE.url)

  return (
    <>
      <Header />
      <NavigationTabs />
      <div className="flex w-full flex-1 justify-center py-8">
        <main className="container flex flex-col gap-8">
          <MainHeader />
          {children}
        </main>
      </div>
    </>
  )
}
