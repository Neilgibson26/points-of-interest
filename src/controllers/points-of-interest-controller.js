import { db } from "../models/db.js";

export const poiController = {
  showCreate: {
    handler: async function (request, h) {
      return h.view("create-poi");
    },
  },

  addPoi: {
    handler: async function (request, h) {
      const newPoi = {
        title: request.payload.title,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,
        city: request.payload.city,
        country: request.payload.country,
        description: request.payload.description,
        // uid: currentUser._id,
      };
      console.log(newPoi);
      await db.poiStore.addPoi(newPoi);
      return h.redirect("/dashboard");
    },
  },
};
