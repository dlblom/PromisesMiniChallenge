const {
  tellEveryoneQuestion,
  promiseStateQuestion,
  addTwo,
  keepAddingByTwo,
  rememberName,
  sayHello,
  delayedGreeting,
  promiseAllQuestion,
  promiseOne,
  promiseTwo,
  promiseThree,
  addPromiseResults,
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

describe("addTwo", () => {
  it("should resolve to the number passed in as an argument plus two", async () => {
    await addTwo(2).then((result) => {
      expect(result).toEqual(4);
    });
  });
  it("should reject to `Error remembering name` if a data type other than a number is passed in", async () => {
    await addTwo(`A`).catch((error) => {
      expect(error).toEqual(`Error: Please enter a number`);
    });
  });
});

describe("keepAddingByTwo", () => {
  it("should resolve to the number passed in added by two, three times", async () => {
    await keepAddingByTwo(2).then((result) => {
      expect(result).toEqual(8);
    });
  });
  it("should reject to `Error: Please enter a number`", async () => {
    await keepAddingByTwo().catch((error) => {
      expect(error).toBe(`Error: Please enter a number`);
    });
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
    await sayHello().catch((error) => {
      expect(error).toEqual(`Error saying Hello`);
    });
  });
});

describe("delayedGreeting", () => {
  it("should resolve to Hello...name based on the name passed in as an argument", async () => {
    await delayedGreeting(`Bob`).then((result) => {
      expect(result).toEqual(`Hello...Bob!`);
    });
  });
  it("should reject to `Error saying Hello`", async () => {
    await sayHello().catch((error) => {
      expect(error).toEqual(`Error saying Hello`);
    });
  });
});

describe("promiseAllQuestion", () => {
  it("returns a string with an eight letter word describing an instance where Promise.all() is useful", () => {
    expect(promiseAllQuestion()).toBe("PARALLEL");
  });
});

describe("addPromiseResults", () => {
  it("should add the results of all three promises together", async () => {
    await addPromiseResults(
      promiseOne,
      promiseTwo,
      promiseThree
    ).then((result) => expect(result).toEqual(6));
  });
});
