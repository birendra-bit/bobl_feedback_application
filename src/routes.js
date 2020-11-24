import Dashboard from "./containers/dashboard/dashboard";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";

var dashRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  }
];
export default dashRoutes;