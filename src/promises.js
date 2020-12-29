// TODO: Interpret the code below to figure out what order the console.log statements generated by the tellEveryone function will print in

const willLearnPromises = new Promise((resolve, reject) => {
  let arePromsisesAwesome = true;
  if (arePromsisesAwesome) {
    const knowledge = {
      topic: "promises",
    };
    resolve(knowledge);
  } else {
    const reason = new Error("promises aren't awesome");
    reject(reason);
  }
});

const showOff = (knowledge) => {
  const message = `Hey friend, I learned ${knowledge.topic}`;

  return Promise.resolve(message);
};

const tellEveryone = () => {
  console.log("before learning promises");
  willLearnPromises
    .then(showOff)
    .then((fulfilled) => console.log(fulfilled))
    .catch((error) => console.log(error.message));
  console.log("after learning promises");
};

tellEveryone();

// TODO QUESTION: In what order will the three console.log statements generated by the tellEveryone function print in? In the answer array below, fill in the strings of the console.log statements in the order they will appear to check if you're correct! Explain why they console.logs print in that particular order.
const tellEveryoneQuestion = () => {
  let answer = [
    "before learning promises",
    "after learning promises",
    "Hey friend, I learned promises",
  ];
  return answer;
};

// TODO QUESTION: What are the three states of promsies? In the promiseStateQuestion function below, fill in your answers as strings of capital letters in the answer array.
const promiseStateQuestion = () => {
  let answer = ["PENDING", "FULFILED", "REJECTED"];
  return answer;
};

// TODO: Complete the function, rememberName, which returns a new Promise that will resolve with a name after 1 second or reject with `Error remembering name` if no name is provided
const rememberName = (name) => {
  return new Promise((resolve, reject) => {
    if (name) {
      setTimeout(() => {
        return resolve(name);
      }, 1000);
    } else {
      reject(`Error remembering name`);
    }
  });
};

// TODO: Complete the function, sayHello, which returns a new Promise that will resolve to `Hello...name` (where name is string passed into the sayHello function) if the rememberName variable is true or rejects with `Error saying Hello` if rememberName is false.
const sayHello = (name) => {
  let rememberName = true;
  return new Promise((resolve, reject) => {
    if (rememberName) {
      resolve(`Hello...${name}!`);
    } else {
      reject(`Error saying Hello`);
    }
  });
};

// TODO: Complete the delayedGreeting function which accepts a name (as a string), and uses promise chaining to combine the results of the rememberName and sayHello functions to form a Hello...name! greeting. Don't forget to handle the errors!
const delayedGreeting = (name) => {
  return rememberName(name)
    .then((data) => {
      return sayHello(data);
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.err(err));
};

// DO NOT edit the code below, since these functions are being exported and used in the promsies.test.js file
module.exports = {
  tellEveryoneQuestion,
  promiseStateQuestion,
  rememberName,
  sayHello,
  delayedGreeting,
};
