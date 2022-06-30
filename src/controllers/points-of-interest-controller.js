import { db } from "../models/db.js";
import { poiSpec } from "../models/joi-schema.js";

export const poiController = {
  showCreate: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const data = {
        user: loggedInUser,
      };
      return h.view("create-poi", data);
    },
  },

  addPoi: {
    validate: {
      payload: poiSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h
          .view("create-poi", {
            title: "Create Point of interest error",
            errors: error.details,
          })
          .takeover()
          .code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newPoi = {
        title: request.payload.title,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,
        city: request.payload.city,
        country: request.payload.country,
        description: request.payload.description,
        category: request.payload.category,
        user_id: loggedInUser._id,
      };
      console.log(newPoi);
      await db.poiStore.addPoi(newPoi);
      return h.redirect("/dashboard");
    },
  },
};
