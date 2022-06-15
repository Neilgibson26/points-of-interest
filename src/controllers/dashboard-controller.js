import { db } from "../models/db.js";
import { currentUser } from "../Consts/index.js";

function setCurrentUser(user) {
  currentUser = user;
}

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const allPoi = await db.poiStore.getAllPoi();
      const data = {
        pointsOfInterest: allPoi,
      };

      return h.view("dashboard-view", data);
    },
  },
  main: {
    handler: async function (request, h) {
      return h.view("main");
    },
  },
  showAbout: {
    handler: async function (request, h) {
      return h.view("about-view");
    },
  },
};
