const {
  tellEveryoneQuestion,
  promiseStateQuestion,
  rememberName,
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

describe("rememberName", () => {
  it("should resolve to the name passed in as an argument", async () => {
    await rememberName(`Bob`).then((result) => {
      expect(result).toEqual(`Bob`);
    });
  });
  it("should reject to `Error remembering name` if no name is passed in", async () => {
    await rememberName().catch((error) => {
      expect(error).toEqual(`Error remembering name`);
    });
  });
});

describe("sayHello", () => {
  it("should resolve to `Hello...name` based on name passed in as an argument", async () => {
    await sayHello(`Bob`).then((result) => {
      expect(result).toEqual(`Hello...Bob!`);
    });
  });
  it("should reject to `Error saying Hello`", async () => {
    await sayHello(`Bob`).catch((error) => {
      expect(error).toEqual(`Error saying Hello`);
    });
  });
});
