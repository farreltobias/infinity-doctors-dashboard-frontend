'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ROUTES } from '@/data/routes'
import type { Route } from '@/data/routes/route'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname()
  const pathnameFormatted = pathname.split('/').filter(Boolean)

  const breadcrumbRoutes = pathnameFormatted
    .map((_, index, self) => {
      const fullPath = self.slice(0, index + 1).join('/')
      const route = ROUTES.find(({ url }) => url === `/${fullPath}`)

      if (!route) {
        return {
          title: 'Página não encontrada',
          url: '/dashboards',
        }
      }

      return route
    })
    .reduce((acc, route) => {
      const hasRouteAlready = acc.some(
        ({ url, title }) => url === route.url && route.title === title,
      )

      if (hasRouteAlready) {
        return acc
      }

      acc.push(route)
      return acc
    }, [] as Route[])

  if (breadcrumbRoutes.length < 2) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbRoutes.map((route, index, self) => {
          const isLast = index === self.length - 1

          return (
            <Fragment key={`${route.url}-${route.title}`}>
              <BreadcrumbItem className="first-of-type:not-only-of-type:hidden first-of-type:not-only-of-type:md:block">
                {isLast ? (
                  <BreadcrumbPage>{route.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={route.url}>{route.title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator className="hidden md:block" />}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
