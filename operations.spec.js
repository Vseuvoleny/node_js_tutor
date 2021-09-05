const opertions = require("./operations");
const assert = require("assert");

describe("Operations tests", () => {
  it("should return multiply two number", () => {
    const result = opertions.multiply(3, 5);
    assert.strictEqual(result, 15);
  });

  it("should return sum of two numbers", () => {
    const result = opertions.summurize();
    assert.strictEqual(result, 10);
  });
  it("should async return two numbers", () => {
    opertions.summurizeDelay(4, 3, (result) => {
      assert.strictEqual(result, 12);
    });
  });
});
