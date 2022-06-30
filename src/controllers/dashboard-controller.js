import { db } from "../models/db.js";

const choices = [
  { choice: "All" },
  { choice: "Bar" },
  { choice: "Pub" },
  { choice: "Restaurant" },
  { choice: "Cocktail Bar" },
  { choice: "Nightclub" },
];

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const category = "All";

      let filteredChoices = choices.filter((cat) => cat.choice !== category);
      console.log("filtered choices are:", filteredChoices);

      const allPoi = await db.poiStore.getAllPoi();
      const data = {
        user: loggedInUser,
        pointsOfInterest: allPoi,
        choices: filteredChoices,
        category: category,
      };

      return h.view("dashboard-view", data);
    },
  },

  filteredIndex: {
    handler: async function (request, h) {
      console.log();
      const category = request.payload.category;
      const loggedInUser = request.auth.credentials;
      const allPoi = await db.poiStore.getAllPoi();

      let filteredChoices = choices.filter((cat) => cat.choice !== category);
      let filteredPoi = allPoi.filter((poi) => poi.category === category);
      console.log("Filtered poi is: ", filteredPoi);
      console.log("filtered choices are:", filteredChoices);
      const data = {
        user: loggedInUser,
        pointsOfInterest: filteredPoi,
        category: category,
        choices: filteredChoices,
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

  showSettings: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const data = {
        user: loggedInUser,
      };
      return h.view("settings-view", data);
    },
  },

  showProfile: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const data = {
        user: loggedInUser,
      };
      return h.view("profile-view", data);
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
