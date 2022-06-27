import { userMemStore } from "./mem/user-mem-store.js";
import { poiMemStore } from "./mem/poi-mem-store.js";
import { poiJsonStore } from "./json/poi-json-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { poiMongoStore } from "./mongo/poi-mongo-store.js";

export const db = {
  userStore: null,
  poiStore: null,

  // init() {
  //   this.userStore = userJsonStore;
  //   this.poiStore = poiJsonStore;
  // },

  init(storeType) {
    switch (storeType) {
      case "mem":
        this.userStore = userMemStore;
        this.trackStore = poiMemStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        this.poiStore = poiMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userJsonStore;
        this.trackStore = poiJsonStore;
    }
  },
};
