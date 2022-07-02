import { Poi } from "./poi.js";
export const poiMongoStore = {
  async getAllPoi() {
    const points = await Poi.find().lean();
    return points;
  },

  async getPoiById(id) {
    if (id) {
      const poi = await Poi.findOne({ _id: id }).lean();
      return poi;
    }
    return null;
  },

  async addPoi(poi) {
    let current = new Date();
    current.getFullYear();
    current.getMonth();
    current.getDate();
    current.getHours();
    current.getMinutes();
    current.getSeconds();

    const time = current.toLocaleTimeString();
    const date = current.toLocaleDateString();

    poi.timeCreated = time;
    poi.dateCreated = date;

    const newPoi = new Poi(poi);
    const poiObj = await newPoi.save();
    const u = await this.getPoiById(poiObj._id);
    return u;
  },

  async deletePoiById(id) {
    try {
      await Poi.deleteOne({ _id: id });
      console.log("Success");
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAll() {
    await Poi.deleteMany({});
  },

  async updatePoi(oldPoi, updatedPoi) {
    if (updatedPoi == {} || oldPoi == {}) return undefined;

    updatedPoi._id = oldPoi._id;
    updatedPoi.img = oldPoi.img;
    updatedPoi.user_id = oldPoi.user_id;

    try {
      let doc = await Poi.findOneAndUpdate({ _id: oldPoi._id }, updatedPoi, {
        new: true,
      });
    } catch {
      console.log("Bad Id somewhere");
      return undefined;
    }
    return this.getPoiById(updatedPoi._id);
  },
};
