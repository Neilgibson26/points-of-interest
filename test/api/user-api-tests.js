import { assert } from "chai";
import { poiService } from "./poi-service.js";
import { assertSubset } from "../test-utils.js";
import { neil, neilCredentials, testUsers } from "../dummy-data.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    await poiService.clearAuth();
    await poiService.createUser(neil);
    await poiService.authenticate(neilCredentials);
    await poiService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      users[0] = await poiService.createUser(testUsers[i]);
    }
    await poiService.createUser(neil);
    await poiService.authenticate(neilCredentials);
  });
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await poiService.createUser(neil);
    assertSubset(neil, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all users", async () => {
    let returnedUsers = await poiService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await poiService.deleteAllUsers();
    await poiService.createUser(neil);
    await poiService.authenticate(neilCredentials);
    returnedUsers = await poiService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user - success", async () => {
    const newUser = await poiService.createUser(neil);
    assertSubset(neil, newUser);
    assert.isDefined(newUser._id);
    const returnedUser = await poiService.getUser(newUser._id);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await poiService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
    }
  });

  test("get a user - deleted user", async () => {
    await poiService.deleteAllUsers();
    try {
      const returnedUser = await poiService.getUser(testUsers[0]._id);

      assert.fail("Should not return a response");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});
