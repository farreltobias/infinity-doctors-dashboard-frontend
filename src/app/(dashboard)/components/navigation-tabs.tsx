'use client'

import { Button } from '@/components/ui/button'
import { MAIN_ROUTES } from '@/data/routes/main'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavigationTabs = () => {
  const pathname = usePathname()

  return (
    <nav className="no-scrollbar flex w-screen justify-center overflow-x-auto border-border border-b">
      <ol className="container flex h-fit gap-8 pt-6">
        {MAIN_ROUTES.map((route) => {
          const basePathname = pathname.split('/')[1]
          const routeWithoutFirstSlash = route.url.slice(1)

          const isCurrentRoute = basePathname === routeWithoutFirstSlash

          return (
            <li key={route.url} className="h-fit">
              <Button
                asChild
                size="lg"
                variant="ghost"
                className={cn(
                  '!px-0 rounded-none pb-0.5 text-card-foreground text-lg',
                  isCurrentRoute &&
                    'border-primary border-b-2 pb-0 text-foreground',
                )}
              >
                <Link href={route.url}>
                  <route.icon className="size-5 text-secondary" />
                  {route.title}
                </Link>
              </Button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
