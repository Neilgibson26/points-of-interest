import { assert } from "chai";
import { poiService } from "./poi-service.js";
import { assertSubset } from "../test-utils.js";
import { isabelles, testPoints } from "../dummy-data.js";

suite("Poi API tests", () => {
  setup(async () => {
    poiService.deleteAllPoi();
  });

  teardown(async () => {});

  test("create poi", async () => {
    const createdPoi = await poiService.createPoi(isabelles);
    assert.isNotNull(createdPoi);
    assertSubset(createdPoi, isabelles);
  });

  test("delete a poi", async () => {
    const createdPoi = await poiService.createPoi(isabelles);
    assert.isNotNull(createdPoi);
    const res = await poiService.deletePoi(createdPoi._id);
    assert.equal(res.status, 204);
  });

  test("create multiple point, then delete them", async () => {
    for (let i = 0; i < testPoints.length; i++) {
      testPoints[0] = await poiService.createPoi(testPoints[i]);
    }

    let allPoints = await poiService.getAllPoi();
    assert.equal(allPoints.length, testPoints.length);
    await poiService.deleteAllPoi();
    allPoints = await poiService.getAllPoi();
    assert.equal(allPoints.length, 0);
  });

  test("find a poi by id", async () => {
    const createdPoi = await poiService.createPoi(isabelles);
    assert.isNotNull(createdPoi);
    const returnedPoi = await poiService.getPoi(createdPoi._id);
    assertSubset(createdPoi, returnedPoi);
  });

  test("remove non-existant poi", async () => {
    try {
      const response = await poiService.deletePoi(1234);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(
        error.response.data.message === "No Playlist with this id",
        "Incorrect Response Message"
      );
    }
  });
});
