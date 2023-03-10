import LoginRoutes from "./routes/login";
import DashboardRoutes from "./routes/dashboard";
import {IRoute} from "./types";

const route:IRoute[] = [{
  path: '/',
  redirect: '/dashboard'
}]

export default [...LoginRoutes, ...DashboardRoutes, ...route]