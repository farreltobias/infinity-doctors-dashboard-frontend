'use client'

import { MAIN_ROUTES } from '@/data/routes/main'
import { notFound, usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()

  const doesRouteExists = MAIN_ROUTES.some((route) => route.url === pathname)

  if (!doesRouteExists) {
    notFound()
  }

  return (
    <div className="flex max-w-full flex-1 flex-col gap-4 pt-0 lg:shrink lg:grow">
      <div className="flex h-full flex-col gap-4 lg:h-1/3 lg:flex-row">
        <div className="shrink grow rounded-xl bg-gray-200" />
        <div className="shrink grow rounded-xl bg-gray-200" />
        <div className="shrink grow rounded-xl bg-gray-200" />
      </div>
      <div className="h-full rounded-xl bg-gray-200 lg:h-2/3" />
    </div>
  )
}
