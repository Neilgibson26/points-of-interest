import { db } from "../models/db.js";

function setCurrentUser(user) {
  currentUser = user;
}

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
    auth: false,
    handler: async function (request, h) {
      return h.view("about-view");
    },
  },

  showAdmin: {
    auth: false,
    handler: async function (request, h) {
      return h.view("admin-view");
    },
  },
};
