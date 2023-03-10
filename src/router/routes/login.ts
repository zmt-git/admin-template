import {IRoute} from "../types";
import {lazy} from "react";

const LoginRoutes: IRoute[] = [
  {
    path: '/signIn',
    Component: lazy(() => import('pages/Login/Login')),
    meta: {
      title: '登录',
      isFullPage: true
    }
  }
]

export default LoginRoutes