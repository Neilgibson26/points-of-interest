import { db } from "../models/db.js";
import { currentUser } from "../Consts/index.js";

export const accountsController = {
  showSignup: {
    auth: false,
    handler: async function (request, h) {
      return h.view("signup-view");
    },
  },

  register: {
    auth: false,
    handler: async function (request, h) {
      const user = request.payload;
      console.log("This is user\n", user);
      await db.userStore.addUser(user);
      return h.redirect("/");
    },
  },

  showLogin: {
    auth: false,
    handler: async function (request, h) {
      return h.view("login-view");
    },
  },

  login: {
    auth: false,
    handler: async function (request, h) {
      const { email, password } = request.payload;
      console.log("email: ", email);
      const user = await db.userStore.getUserByEmail(email);
      console.log(user.password);
      if (!user || user.password !== password) {
        return h.redirect("/");
      }
      request.cookieAuth.set({ id: user._id });
      return h.redirect("/dashboard");
    },
  },

  logout: {
    auth: false,
    handler: async function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  async validate(request, session) {
    const user = await db.userStore.getUserById(session.id);
    if (!user) {
      return { valid: false };
    }
    return { valid: true, credentials: user };
  },
};
