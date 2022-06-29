import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import {
  IdSpec,
  userArray,
  userSpec,
  userSpecPlus,
} from "../models/joi-schema.js";
import { validationError } from "./logger.js";

export const userApi = {
  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const user = await db.userStore.addUser(request.payload);
        if (user) {
          return h.response(user).code(201);
        }
        return Boom.badImplementation("error creating user");
        return user;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a User",
    notes: "Returns the newly created user",
    validate: { payload: userSpec, failAction: validationError },
    response: { schema: userSpecPlus, failAction: validationError },
  },

  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const users = await db.userStore.getAllUsers();
        return users;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all userApi",
    notes: "Returns details of all userApi",
    response: { schema: userArray, failAction: validationError },
  },

  findOne: {
    auth: false,
    handler: async function (request, h) {
      console.log("outside try catch find one", request.params.id);

      try {
        const user = await db.userStore.getUserById(request.params.id);
        console.log("Inside find one", user);
        if (!user) {
          return Boom.notFound("No User with this id");
        }

        return user;
      } catch (err) {
        return Boom.serverUnavailable("No User with this id");
      }
    },
    tags: ["api"],
    description: "Get a specific user",
    notes: "Returns user details",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: userSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.userStore.deleteAll();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all userApi",
    notes: "All userApi removed from RestaurantBuddy",
  },
};
