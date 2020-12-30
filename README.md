# PromisesMiniChallenge

Learn promises by interpreting existing code, and writing your own promises. The goal is to make all the tests pass!

## PENDING Content to be created for this repo

1. Advanced Promises/ Batch Promise methods set

- batch promise methods (.allSettled .any .race)
- range of different promise objects built out, and then different combinations of them in arrays --> goal is to establish which of the batch methods need to be used on each array to get the target output

2. Real World Front End Examples with Fetch / Axios

- would need a react file
- free/no auth APIS: star wars api, free cat-facts api

3. Async Await

## Promises Introduction

Per MDN, a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises">Promise</a> is an object representing the eventual completion or failure of an asynchronous operation. A promise is a returned object which callbacks are attached to instead of passing callbacks into a function.

A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> is in one of these states:

- pending: initial state
- fulfilled: the operation was completed successfully
- rejected: the operation failed

## Requirements

| TASK           | DESCRIPTION                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INTERPRETATION | Interpret the existing code (willLearnPromises, showOff & tellEveryone), to determine the print order of the console.log statements in the tellEveryone func. |
| KNOWLEDGE      | Fill in the variable in the promiseStateQuestion function with the 3 states of promises                                                                       |
| CODE           | Follow the TODOs in promises.js and complete the functions to practice promise syntax, chaining and advanced concepts                                         |

### Installation

To get started:

Navigate to the project Directory

```sh
$ cd PromisesMiniChallenge
```

Install the dependencies

```sh
$ npm install
```

Check if tests are passing

```sh
$ npm run test
```

### Helpful Resources

- <a href="https://web.dev/promises/">JavaScript Promises: An Introduction</a>
- <a href="https://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/">An Incremental Tutorial on Promises in Javascript</a>
- <a href="https://exploringjs.com/es6/ch_promises.html">Promises for Asynchronous Programming</a>
- <a href="https://dev.to/bhagatparwinder/promises-chaining-error-handling-operators-3ccb">Promises - Chaining, Error Handling & Operations</a>

### Technologies

<table style="width:50%">
  <tr>
    <td><a href="https://jestjs.io/">Jest</a></td>
  </tr>
</table>
