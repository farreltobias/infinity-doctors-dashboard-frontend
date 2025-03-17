import { Typography } from '@/components/ui/typography'
import { DASHBOARD_ROUTES } from '@/data/routes/dashboard'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
      {DASHBOARD_ROUTES.map((route) => (
        <Link key={route.url} href={route.url} className="col-span-1">
          <section className="flex flex-col gap-6 rounded-xl border bg-white p-6">
            <div className="w-fit rounded-md bg-primary p-2">
              <route.icon className="size-9 text-white" />
            </div>
            <Typography variant="h3" asChild className="border-none">
              <h1>{route.title}</h1>
            </Typography>
          </section>
        </Link>
      ))}
    </div>
  )
}
