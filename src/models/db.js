import { userMemStore } from "./mem/user-mem-store.js";
import { poiMemStore } from "./mem/poi-mem-store.js";
import { poiJsonStore } from "./json/poi-json-store.js";
import { userJsonStore } from "./json/user-json-store.js";

export const db = {
  userStore: null,
  poiStore: null,

  init() {
    this.userStore = userJsonStore;
    this.poiStore = poiJsonStore;
  },
};
