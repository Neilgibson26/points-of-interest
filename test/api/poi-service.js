import axios from "axios";

import { serviceUrl } from "../dummy-data.js";

export const poiService = {
  poiUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.poiUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.poiUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.poiUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.poiUrl}/api/users`);
    return res.data;
  },

  async createPoi(poi) {
    const res = await axios.post(`${this.poiUrl}/api/poi`, poi);
    return res.data;
  },

  async getAllPoi() {
    const res = await axios.get(`${this.poiUrl}/api/poi`);
    return res.data;
  },

  async getPoi(id) {
    const res = await axios.get(`${this.poiUrl}/api/poi/${id}`);
    return res.data;
  },

  async deleteAllPoi() {
    const res = await axios.delete(`${this.poiUrl}/api/poi`);
    return res.data;
  },

  async deletePoi(id) {
    const res = await axios.delete(`${this.poiUrl}/api/poi/${id}`);
    return res.data;
  },
};
