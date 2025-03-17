import type { Route } from '@/data/routes/route'
import { ChartColumnBig } from 'lucide-react'

export const DASHBOARD_ROUTES = [
  {
    title: 'Visão geral',
    url: '/paineis/visao-geral',
    icon: ChartColumnBig,
  },
  {
    title: 'Atendimento Clínico 24h',
    url: '/paineis/atendimento-clinico',
    icon: ChartColumnBig,
  },
  {
    title: 'Consultas Especialidades',
    url: '/paineis/especialidades',
    icon: ChartColumnBig,
  },
  {
    title: 'Profissionais de Saúde',
    url: '/paineis/profissionais',
    icon: ChartColumnBig,
  },
  {
    title: 'Financeiro',
    url: '/paineis/financeiro',
    icon: ChartColumnBig,
  },
] satisfies readonly Route[]
