import { db } from "../models/db.js";
import { imageStore } from "../models/image-store.js";
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

  showPoi: {
    handler: async function (request, h) {
      const owner = false;
      const poi = await db.poiStore.getPoiById(request.params.id);
      const loggedInUser = request.auth.credentials;
      if (loggedInUser._id === poi.user_id) owner = true;
      const data = {
        poi: poi,
        user: loggedInUser,
        owner: owner,
      };

      return h.view("show-poi", data);
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
  updatePoi: {
    handler: async function (request, h) {
      const updatedPoi = request.payload;
      const oldPoi = await db.poiStore.getPoiById(request.params.id);
      await db.poiStore.updatePoi(oldPoi, updatedPoi);

      h.redirect("/dashboard");
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      const oldPoi = await db.poiStore.getPoiById(request.params.id);
      console.log("This is the old poi: ", oldPoi);
      try {
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          oldPoi.img = url;
          const newPoi = oldPoi;
          db.poiStore.updatePoi(oldPoi, newPoi);
        }
        return h.redirect(`/dashboard`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/dashboard`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

  showAddImage: {
    handler: async function (request, h) {
      const poi = await db.poiStore.getPoiById(request.params.id);
      const data = {
        poi: poi,
      };
      return h.view("add-image", data);
    },
  },
};
