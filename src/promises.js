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

// TODO QUESTION: What are the three states of promsies? In the promiseStateQuestion function below, fill in your answers as strings of capital letters in the answer array
const promiseStateQuestion = () => {
  let answer = ["PENDING", "FULFILED", "REJECTED"];
  return answer;
};

// TODO: Create a new Promise that will resolve with the string `Hello` if the variable goodMood is true, and rejects with the string "Error saying Hello" if goodMood is false
const sayHello = new Promise((resolve, reject) => {
  let goodMood = true;
  if (goodMood) {
    resolve(`Hello!`);
  } else {
    reject(`Error saying Hello`);
  }
});

// TODO:
const getCatFacts = () => {
  fetch(`https://cat-fact.herokuapp.com/facts`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(`Error getting cat facts from cat-facts API`));
};

// DO NOT edit the code below, since these functions are being exported and used in the promsies.test.js file
module.exports = {
  tellEveryoneQuestion,
  promiseStateQuestion,
  sayHello,
};
