import { dashboardController } from "./controllers/dashboard-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: dashboardController.index },
  { method: "GET", path: "/login", config: dashboardController.showLogin },
  {
    method: "POST",
    path: "/authenticate",
    config: dashboardController.login,
  },
  { method: "GET", path: "/signup", config: dashboardController.showSignup },
  { method: "POST", path: "/register", config: dashboardController.register },
  { method: "GET", path: "/dashboard", config: dashboardController.dashboard },
];
