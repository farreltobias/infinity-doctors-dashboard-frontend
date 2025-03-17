import type { Route } from '@/data/routes/route'
import {
  BriefcaseMedical,
  ChartPie,
  CircleDollarSign,
  Component,
  HeartPulse,
  PersonStanding,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from 'lucide-react'

export const MAIN_ROUTES = [
  {
    title: 'Dashboards',
    url: '/paineis',
    icon: ChartPie,
  },
  {
    title: 'Consultas',
    url: '/consultas',
    icon: Stethoscope,
  },
  {
    title: 'Pacientes',
    url: '/pacientes',
    icon: ShieldCheck,
  },
  {
    title: 'Vidas',
    url: '/vidas',
    icon: HeartPulse,
  },
  {
    title: 'Profissionais',
    url: '/profissionais',
    icon: BriefcaseMedical,
  },
  {
    title: 'Parceiros',
    url: '/parceiros',
    icon: UsersRound,
  },
  {
    title: 'Produtos',
    url: '/produtos',
    icon: Component,
  },
  {
    title: 'Financeiro',
    url: '/financeiro',
    icon: CircleDollarSign,
  },
  {
    title: 'Acessos',
    url: '/acessos',
    icon: PersonStanding,
  },
] satisfies readonly Route[]
