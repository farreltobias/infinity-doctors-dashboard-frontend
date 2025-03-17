import { PowerBi } from '@/components/power-bi'
import { env } from '@/lib/env'

export default function Page() {
  return <PowerBi embedUrl={env.NEXT_PUBLIC_SPECIALITIES_EMBED_URL} />
}
