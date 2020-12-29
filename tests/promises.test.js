const {
  tellEveryoneQuestion,
  promiseStateQuestion,
  sayHello,
} = require("../src/promises");

describe("tellEveryoneQuestion", () => {
  it("returns the console.log statements in the correct order", () => {
    expect(tellEveryoneQuestion()).toEqual([
      "before learning promises",
      "after learning promises",
      "Hey friend, I learned promises",
    ]);
  });
});

describe("promiseStateQuestion", () => {
  it("returns an array containing the 3 states of promsies", () => {
    expect(promiseStateQuestion()).toContain("PENDING");
    expect(promiseStateQuestion()).toContain("FULFILED");
    expect(promiseStateQuestion()).toContain("REJECTED");
    expect(promiseStateQuestion()).toHaveLength(3);
  });
});

describe("sayHello", () => {
  it("should resolve to `Hello!`", () => {
    return sayHello.then((result) => {
      expect(result).toEqual(`Hello!`);
    });
  });
  it("should reject to `Error saying Hello`", () => {
    return sayHello.catch((error) => {
      expect(error).toEqual(`Error saying Hello`);
    });
  });
});
