import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const poiApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const allPoi = db.poiStore.getAllPoi();
        return allPoi;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (!poi) {
          return Boom.notFound("No Poi with this id");
        }
        return poi;
      } catch (err) {
        return Boom.serverUnavailable("No Poi with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const newPoi = db.poiStore.addPoi(request.payload);
        if (newPoi) {
          return h.response(user).code(201);
        }
        return Boom.serverUnavailable("Database error");
      } catch (err) {
        return Boom.serverUnavailable(
          "User coukld not be created at this time"
        );
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.poiStore.deletePoiById(request.params.id);
        return h.response(user).code(201);
      } catch (err) {
        return Boom.serverUnavailable("No poi by this ID");
      }
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.poiStore.deleteAll();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },
};
