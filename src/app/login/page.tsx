import { LoginForm } from '@/app/login/components/login-form'
import { HOME_ROUTE } from '@/data/routes'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = await auth()
  if (session) return redirect(HOME_ROUTE.url)

  return (
    <main className="grid min-h-svh items-center overflow-hidden bg-background p-0">
      <LoginForm />
    </main>
  )
}
