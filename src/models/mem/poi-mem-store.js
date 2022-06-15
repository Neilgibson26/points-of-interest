import { v4 } from "uuid";

let pointsOfInterest = [];

export const poiMemStore = {
  async getAllPoi() {
    return pointsOfInterest;
  },

  async getAllUserPoi() {
    return pointsOfInterest;
  },

  async addPoi(poi) {
    poi._id = v4();
    pointsOfInterest.push(poi);
    return poi;
  },

  async getPoiById(id) {
    return pointsOfInterest.find((poi) => poi.id === id);
  },

  async deletePoiById(id) {
    const index = pointsOfInterest.findIndex((poi) => poi._id === id);
    pointsOfInterest.splice(index, 1);
  },

  async deleteAllPoi() {
    pointsOfInterest = [];
  },
};
