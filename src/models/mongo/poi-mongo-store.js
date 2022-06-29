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
    const newPoi = new Poi(poi);
    const poiObj = await newPoi.save();
    const u = await this.getPoiById(poiObj._id);
    return u;
  },

  async deletePoiById(id) {
    try {
      await Poi.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAll() {
    await Poi.deleteMany({});
  },

  async updatePoi(poi, updatedPoi) {
    let doc = await Poi.findOneAndUpdate({ _id: poi._id }, updatedUser, {
      new: true,
    });
  },
};
