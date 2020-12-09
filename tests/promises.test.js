const promises = require("../src/promises");

describe("tellEveryoneQuestion", () => {
  it("returns the console.log statements in the correct order", () => {
    expect(promises.tellEveryoneQuestion()).toEqual([
      "before learning promises",
      "after learning promises",
      "Hey friend, I learned promises",
    ]);
  });
});
