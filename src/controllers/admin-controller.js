import { db } from "../models/db.js";

export const adminController = {
  showEdit: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;

      const clickedUser = await db.userStore.getUserById(request.params.id);
      console.log(clickedUser);
      const data = {
        user: loggedInUser,
        userToBeEdited: clickedUser,
      };
      return h.view("edit-view", data);
    },
  },

  editProfile: {
    handler: async function (request, h) {
      const updatedUser = request.payload;
      const oldUser = await db.userStore.getUserById(request.params.id);
      await db.userStore.updateUser(oldUser, updatedUser);
      return h.redirect("/dashboard");
    },
  },

  showDelete: {
    handler: async function (request, h) {
      const clickedUser = await db.userStore.getUserById(request.params.id);
      const data = {
        user: clickedUser,
      };
      return h.view("delete-view", data);
    },
  },

  deleteProfile: {
    handler: async function (request, h) {
      const clickedUser = await db.userStore.getUserById(request.params.id);
      await db.userStore.deleteUserById(clickedUser._id);
      const loggedInUser = request.auth.credentials;
      const data = {
        user: loggedInUser,
      };

      if (clickedUser._id === loggedInUser._id) {
        return h.redirect("/logout");
      } else {
        return h.redirect("/admin");
      }
    },
  },
};
