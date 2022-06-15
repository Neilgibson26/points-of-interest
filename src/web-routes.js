import { dashboardController } from "./controllers/dashboard-controller.js";
import { poiController } from "./controllers/points-of-interest-controller.js";
import { accountsController } from "./controllers/accounts-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: dashboardController.main },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  {
    method: "POST",
    path: "/authenticate",
    config: accountsController.login,
  },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "POST", path: "/register", config: accountsController.register },
  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "GET", path: "/about", config: dashboardController.showAbout },
  { method: "GET", path: "/create", config: poiController.showCreate },
  { method: "POST", path: "/dashboard/addpoi", config: poiController.addPoi },
];
