import { db } from "../models/db.js";
import { currentUser } from "../Consts/index.js";

export const accountsController = {
  showSignup: {
    handler: async function (request, h) {
      return h.view("signup-view");
    },
  },

  register: {
    handler: async function (request, h) {
      const user = request.payload;
      console.log("This is user\n", user);
      await db.userStore.addUser(user);
      return h.redirect("/");
    },
  },

  showLogin: {
    handler: async function (request, h) {
      return h.view("login-view");
    },
  },

  login: {
    handler: async function (request, h) {
      const { email, password } = request.payload;
      console.log("email: ", email);
      const user = await db.userStore.getUserByEmail(email);
      console.log(user.password);
      if (!user || user.password !== password) {
        return h.redirect("/");
      } else {
        await function () {
          currentUser = user._id;
        };
        return h.redirect("/dashboard");
      }
    },
  },
};
