'use client'

import { Breadcrumbs } from '@/app/(dashboard)/components/breadcrumbs'
import { Typography } from '@/components/ui/typography'
import { MAIN_ROUTES } from '@/data/routes/main'
import { usePathname } from 'next/navigation'

export const MainHeader = () => {
  const pathname = usePathname()
  const [currentRoute] = pathname.split('/').filter(Boolean)

  const route = MAIN_ROUTES.find(({ url }) => url === `/${currentRoute}`)
  const routeTitle = route ? route.title : 'Página não encontrada'

  return (
    <header className="shrink space-y-2">
      <Typography variant="h1">{routeTitle}</Typography>
      <Breadcrumbs />
    </header>
  )
}
