var arePromsisesAwesome = true;

const willLearnPromises = new Promise((resolve, reject) => {
  if (arePromsisesAwesome) {
    const knowledge = {
      topic: "promises",
    };
    resolve(knowledge);
  } else {
    var reason = new Error("promises aren't awesome");
    reject(reason);
  }
});

const showOff = (knowledge) => {
  var message = `Hey friend, I learned ${knowledge.topic}`;

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

// In what order will the three console.log statements print in? Enter the strings in order in the answer array below to check if you're correct!
const tellEveryoneQuestion = () => {
  let answer = [
    "before learning promises",
    "after learning promises",
    "Hey friend, I learned promises",
  ];
  return answer;
};

module.exports = {
  tellEveryoneQuestion,
};
