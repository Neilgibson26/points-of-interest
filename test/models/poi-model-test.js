import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { isabelles, testPoints } from "../dummy-data.js";
import { assertSubset } from "../test-utils.js";

suite("poi api tests", () => {
  setup(async () => {
    db.init("mongo");
    await db.poiStore.deleteAll();
    for (let i = 0; i < testPoints.length; i++) {
      await db.poiStore.addPoi(testPoints[i]);
    }
  });

  test("Create a poi - success", async () => {
    const newPoi = await db.poiStore.addPoi(isabelles);
    assertSubset(newPoi, isabelles);
  });

  test("Get a poi - success", async () => {
    const poiById = await db.poiStore.getPoiById(testPoints[0]._id);
    assertSubset(poiById, testPoints[0]);
  });

  test("get a poi - bad params", async () => {
    let nullPoi = await db.poiStore.getPoiById("");
    assert.isNull(nullPoi);
    nullPoi = await db.poiStore.getPoiById("");
    assert.isNull(nullPoi);
    nullPoi = await db.poiStore.getPoiById();
    assert.isNull(nullPoi);
  });

  test("Get all -- success", async () => {
    let allPoints = await db.poiStore.getAllPoi();
    assert.equal(allPoints.length, testPoints.length);
  });

  test("Delete all when empty", async () => {
    db.poiStore.deleteAll();
    db.poiStore.deleteAll();
  });

  test("delete poi by id", async () => {
    let allPoints = await db.poiStore.getAllPoi();
    assert.equal(allPoints.length, 3);
    await db.poiStore.deletePoiById(allPoints[0]._id);
    allPoints = await db.poiStore.getAllPoi();
    assert.equal(allPoints.length, testPoints.length - 1);
    const deletedPoi = await db.poiStore.getPoiById(testPoints[0]._id);
    assert.isNull(deletedPoi);
  });

  test("Delete poi - bad params", async () => {
    let allPoints = await db.poiStore.getAllPoi();
    assert.equal(allPoints.length, testPoints.length);
    db.poiStore.deletePoiById(123);
    allPoints = await db.poiStore.getAllPoi();
    assert.equal(allPoints.length, testPoints.length);
  });

  test("Update poi -- success!", async () => {
    await db.poiStore.updatePoi(testPoints[0], isabelles);
    assertSubset(isabelles, testPoints[0]);
  });
  test("Update poi -- empty object", async () => {
    const nullCheckOld = await db.poiStore.updatePoi(testPoints[0], {});
    const nullCheckNew = await db.poiStore.updatePoi(testPoints[0], {});

    assert.isNull(nullCheckOld);
    assert.isNull(nullCheckNew);
  });
});
