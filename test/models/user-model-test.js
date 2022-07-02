import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testUsers, neil } from "../dummy-data.js";
import { assertSubset } from "../test-utils.js";

suite("user model tests", () => {
  setup(async () => {
    db.init("mongo");
    await db.userStore.deleteAll();
    for (let i = 0; i < testUsers.length; i += 1) {
      await db.userStore.addUser(testUsers[i]);
    }
  });

  test("create user", async () => {
    const newUser = await db.userStore.addUser(neil);
    assertSubset(neil, newUser);
  });

  test("delete all users and get all users", async () => {
    let allUsers = await db.userStore.getAllUsers();
    assert.equal(allUsers.length, testUsers.length);
    await db.userStore.deleteAll();
    allUsers = await db.userStore.getAllUsers();
    assert.equal(allUsers.length, 0);
  });

  test("get user -- success", async () => {
    let user = testUsers[2];
    let userWithId = await db.userStore.getUserById(user._id);
    assertSubset(userWithId, user);
    let userWithEmail = await db.userStore.getUserByEmail(
      "1neilgibson1@gmail.com"
    );
    assertSubset(userWithEmail, neil);
  });
  test("delete user by id", async () => {
    let allUsers = await db.userStore.getAllUsers();
    assert.equal(allUsers.length, 3);
    await db.userStore.deleteUserById(allUsers[0]._id);
    allUsers = await db.userStore.getAllUsers();
    assert.equal(allUsers.length, testUsers.length - 1);
    const deletedUser = await db.userStore.getUserById(testUsers[0]._id);
    assert.isNull(deletedUser);
  });

  test("delete One User - fail", async () => {
    await db.userStore.deleteUserById("bad-id");
    const allUsers = await db.userStore.getAllUsers();
    assert.equal(testUsers.length, allUsers.length);
  });

  test("get a user - bad params", async () => {
    let nullUser = await db.userStore.getUserByEmail("");
    assert.isNull(nullUser);
    nullUser = await db.userStore.getUserById("");
    assert.isNull(nullUser);
    nullUser = await db.userStore.getUserById();
    assert.isNull(nullUser);
  });

  test("Update user -- success!", async () => {
    await db.userStore.updateUser(testUsers[0], neil);
    assertSubset(neil, testUsers[0]);
  });
  test("Update user -- empty object", async () => {
    const nullCheckOld = await db.userStore.updateUser(testUsers[0], {});
    const nullCheckNew = await db.userStore.updateUser(testUsers[0], {});

    assert.isUndefined(nullCheckOld);
    assert.isUndefined(nullCheckNew);
  });
});
