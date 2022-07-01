import axios from "axios";

import { serviceUrl, secondUrl } from "../dummy-data.js";

export const poiService = {
  poiUrl: serviceUrl,
  //since i switched to heroku the url has changed
  secUrl: secondUrl,

  async createUser(user) {
    const res = await axios.post(`${this.secUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.secUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.secUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.secUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(
      `${this.secUrl}/api/users/authenticate`,
      user
    );

    axios.defaults.headers.common["Authorization"] =
      "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common["Authorization"] = "";
  },

  async createPoi(poi) {
    const res = await axios.post(`${this.secUrl}/api/poi`, poi);
    return res.data;
  },

  async getAllPoi() {
    const res = await axios.get(`${this.secUrl}/api/poi`);
    return res.data;
  },

  async getPoi(id) {
    const res = await axios.get(`${this.secUrl}/api/poi/${id}`);
    return res.data;
  },

  async deleteAllPoi() {
    const res = await axios.delete(`${this.secUrl}/api/poi`);
    return res.data;
  },

  async deletePoi(id) {
    const res = await axios.delete(`${this.secUrl}/api/poi/${id}`);
    return res;
  },
};
