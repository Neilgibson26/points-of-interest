import { db } from "../models/db.js";
import { userSpec } from "../models/joi-schema.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;

      const allPoi = await db.poiStore.getAllPoi();
      const data = {
        user: loggedInUser,
        pointsOfInterest: allPoi,
      };

      return h.view("dashboard-view", data);
    },
  },

  main: {
    auth: false,
    handler: async function (request, h) {
      return h.view("main");
    },
  },

  showAbout: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const data = {
        user: loggedInUser,
      };
      return h.view("about-view", data);
    },
  },

  showAdmin: {
    handler: async function (request, h) {
      const allUsers = await db.userStore.getAllUsers();
      const loggedInUser = request.auth.credentials;
      const data = {
        users: allUsers,
        user: loggedInUser,
      };
      return h.view("admin-view", data);
    },
  },
};
