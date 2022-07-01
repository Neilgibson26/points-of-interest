import { dashboardController } from "./controllers/dashboard-controller.js";
import { poiController } from "./controllers/points-of-interest-controller.js";
import { accountsController } from "./controllers/accounts-controller.js";
import { adminController } from "./controllers/admin-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: dashboardController.main },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  {
    method: "POST",
    path: "/authenticate",
    config: accountsController.login,
  },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "POST", path: "/register", config: accountsController.register },
  { method: "GET", path: "/dashboard", config: dashboardController.index },
  {
    method: "POST",
    path: "/dashboard",
    config: dashboardController.filteredIndex,
  },

  // { method: "GET", path: "/about", config: dashboardController.showAbout },
  {
    method: "GET",
    path: "/settings",
    config: dashboardController.showSettings,
  },
  { method: "GET", path: "/create", config: poiController.showCreate },
  { method: "POST", path: "/dashboard/addpoi", config: poiController.addPoi },
  { method: "GET", path: "/admin", config: dashboardController.showAdmin },
  { method: "GET", path: "/edit/{id}", config: adminController.showEdit },
  {
    method: "POST",
    path: "/edit/yes/{id}",
    config: adminController.editProfile,
  },

  { method: "GET", path: "/editpoi/{id}", config: poiController.editPoi },
  { method: "POST", path: "/updatepoi/{id}", config: poiController.updatePoi },
  { method: "GET", path: "/deletepoi/{id}", config: poiController.deletePoi },

  {
    method: "GET",
    path: "/delete/{id}",
    config: adminController.showDelete,
  },
  {
    method: "GET",
    path: "/delete/yes/{id}",
    config: adminController.deleteProfile,
  },
  {
    method: "GET",
    path: "/profile",
    config: dashboardController.showProfile,
  },

  {
    method: "GET",
    path: "/uploadimage/{id}",
    config: poiController.showAddImage,
  },
  {
    method: "POST",
    path: "/poi/uploadimage/{id}",
    config: poiController.uploadImage,
  },
  {
    method: "GET",
    path: "/poi/{id}",
    config: poiController.showPoi,
  },
  {
    method: "GET",
    path: "/{param*}",
    handler: { directory: { path: "./public" } },
    options: { auth: false },
  },
];
