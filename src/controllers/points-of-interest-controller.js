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
      let owner = false;
      const poi = await db.poiStore.getPoiById(request.params.id);
      const loggedInUser = request.auth.credentials;

      if (loggedInUser._id.toString() == poi.user_id) {
        owner = true;
      }
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
      const oldUser = await db.userStore.getUserById(loggedInUser._id);
      const creator = loggedInUser.firstName + " " + loggedInUser.lastName;

      const newPoi = {
        title: request.payload.title,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,
        city: request.payload.city,
        country: request.payload.country,
        description: request.payload.description,
        category: request.payload.category,
        creator: creator,
        user_id: loggedInUser._id,
      };

      const poi = await db.poiStore.addPoi(newPoi);
      if (poi) {
        console.log("successfully created: ", poi);
        loggedInUser.poiCount = loggedInUser.poiCount + 1;
        await db.userStore.updateUser(oldUser, loggedInUser);
      }
      const data = {
        user: loggedInUser,
        poi: poi,
      };
      return h.view("add-image", data);
    },
  },

  editPoi: {
    handler: async function (request, h) {
      const poi = await db.poiStore.getPoiById(request.params.id);
      const user = request.auth.credentials;
      const data = {
        user: user,
        poi: poi,
      };
      return h.view("edit-poi-view", data);
    },
  },

  updatePoi: {
    handler: async function (request, h) {
      const updatedPoi = request.payload;
      const oldPoi = await db.poiStore.getPoiById(request.params.id);
      const returnedUser = await db.poiStore.updatePoi(oldPoi, updatedPoi);

      return h.redirect(`/uploadimage/${request.params.id}`);
    },
  },

  deletePoi: {
    handler: async function (request, h) {
      await db.poiStore.deletePoiById(request.params.id);

      return h.redirect("/dashboard");
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      const oldPoi = await db.poiStore.getPoiById(request.params.id);
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
