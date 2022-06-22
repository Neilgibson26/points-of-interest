import { v4 } from "uuid";
import { JSONFile, Low } from "lowdb";

const db = new Low(new JSONFile("./src/models/json/points.json"));
db.data = { pointsOfInterest: [] };

export const poiJsonStore = {
  async getAllPoi() {
    await db.read();
    return db.data.pointsOfInterest;
  },

  async addPoi(poi) {
    await db.read();
    poi._id = v4();
    db.data.pointsOfInterest.push(poi);
    await db.write();
    return poi;
  },

  async getPoiById(id) {
    await db.read();
    let u = db.data.pointsOfInterest.find((poi) => poi._id === id);
    if (u === undefined) u = null;
    return u;
  },

  async deletePoiById(id) {
    await db.read();
    const index = db.data.pointsOfInterest.findIndex((poi) => poi._id === id);
    if (index !== -1) db.data.pointsOfInterest.splice(index, 1);
    await db.write();
  },

  async deleteAll() {
    db.data.pointsOfInterest = [];
    await db.write();
  },
};
