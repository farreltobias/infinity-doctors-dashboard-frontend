import { HOME_ROUTE } from '@/data/routes'
import { redirect } from 'next/navigation'

export default function Page() {
  return redirect(HOME_ROUTE.url)
}
