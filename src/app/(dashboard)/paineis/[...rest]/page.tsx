'use client'

import { DASHBOARD_ROUTES } from '@/data/routes/dashboard'
import { notFound, usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()

  const doesRouteExists = DASHBOARD_ROUTES.some(
    (route) => route.url === pathname,
  )

  if (!doesRouteExists) {
    notFound()
  }

  return (
    <div className="flex max-w-full flex-1 shrink grow flex-col gap-4 pt-0">
      <div className="h-full rounded-xl bg-gray-200" />
    </div>
  )
}
