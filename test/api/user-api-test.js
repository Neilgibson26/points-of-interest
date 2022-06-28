import { assert } from "chai";
import { poiService } from "./poi-service.js";
import { assertSubset } from "../test-utils.js";
import { neil } from "../dummy-data.js";

suite("User API tests", () => {
  setup(async () => {});
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await poiService.createUser(neil);
    assertSubset(neil, newUser);
    assert.isDefined(newUser._id);
  });
});
