import { IRoute } from "../types";
import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react'
const DashboardRoutes: IRoute[] = [
  {
    path: '/dashboard',
    Component: lazy(() => import('pages/Dashboard/index')),
    meta: {
      title: 'Dashboard',
      Icon: DashboardIcon
    }
  }
]
export default DashboardRoutes