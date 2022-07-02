import { User } from "./user.js";
export const userMongoStore = {
  async getAllUsers() {
    const users = await User.find().lean();
    return users;
  },

  async getUserById(id) {
    if (id) {
      const user = await User.findOne({ _id: id }).lean();
      return user;
    }
    return null;
  },

  async addUser(user) {
    let current = new Date();
    current.getFullYear();
    current.getMonth();
    current.getDate();
    current.getHours();
    current.getMinutes();
    current.getSeconds();

    const time = current.toLocaleTimeString();
    const date = current.toLocaleDateString();

    user.timeCreated = time;
    user.dateCreated = date;
    user.poiCount = 0;

    if (user.accountType === "Admin") user.isAdmin = true;
    const newUser = new User(user);
    const userObj = await newUser.save();
    const u = await this.getUserById(userObj._id);
    return u;
  },

  async getUserByEmail(email) {
    const user = await User.findOne({ email: email }).lean();
    return user;
  },

  async deleteUserById(id) {
    try {
      await User.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAll() {
    await User.deleteMany({});
  },

  async updateUser(oldUser, updatedUser) {
    if (updatedUser == {} || oldUser == {}) return null;

    updatedUser._id = oldUser._id;
    if (updatedUser.accountType === "Admin") {
      updatedUser.isAdmin = true;
    } else {
      updatedUser.isAdmin = false;
    }

    let doc = await User.findOneAndUpdate({ _id: oldUser._id }, updatedUser, {
      new: true,
    });
  },
};
