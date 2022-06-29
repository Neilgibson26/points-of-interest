import { userApi } from "./api/user-api.js";
import { poiApi } from "./api/poi-api.js";

export const apiRoutes = [
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/poi", config: poiApi.create },
  { method: "DELETE", path: "/api/poi", config: poiApi.deleteAll },
  { method: "GET", path: "/api/poi", config: poiApi.find },
  { method: "GET", path: "/api/poi/{id}", config: poiApi.findOne },
  { method: "DELETE", path: "/api/poi/{id}", config: poiApi.deleteOne },
  {
    method: "POST",
    path: "/api/users/authenticate",
    config: userApi.authenticate,
  },
];
