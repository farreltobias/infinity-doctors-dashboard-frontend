import { DASHBOARD_ROUTES } from '@/data/routes/dashboard'
import { MAIN_ROUTES } from '@/data/routes/main'
import type { Route } from '@/data/routes/route'

export const ROUTES = [...MAIN_ROUTES, ...DASHBOARD_ROUTES]

export const HOME_ROUTE = MAIN_ROUTES[0]
export const LOGIN_ROUTE: Route = {
  title: 'Login',
  url: '/login',
}
