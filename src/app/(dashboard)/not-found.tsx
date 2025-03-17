'use client'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { HOME_ROUTE } from '@/data/routes'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <Typography variant="h1" className="text-secondary">
        Página não encontrada
      </Typography>

      <Button variant="secondary" size="lg">
        <Link href={HOME_ROUTE.url}>Voltar para início</Link>
      </Button>
    </div>
  )
}
