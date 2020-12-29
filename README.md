# PromisesMiniChallenge

Learn promises by interpreting existing code, and writing your own promises. The goal is to make all the tests pass!

## Promises Introduction

Per MDN, a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises">Promise</a> is an object representing the eventual completion or failure of an asynchronous operation. A promise is a returned object which callbacks are attached to instead of passing callbacks into a function.

A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> is in one of these states:

- pending: initial state
- fulfilled: the operation was completed successfully
- rejected: the operation failed

## Requirements

| TASK           | DESCRIPTION                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INTERPRETATION | Interpret the existing code (willLearnPromises, showOff & tellEveryone), to determine the print order of the console.log statements in the tellEveryone func.                           |
| KNOWLEDGE      | Fill in the variable in the promiseStateQuestion function with the 3 states of promises                                                                                                 |
| CODE           | Create a new Promise assigned to the sayHello variable which resolves to 'Hello!' if the goodMood variable is true and rejects to `Error saying Hello if the goodMood variable is false |
| CODE           | Practice promise syntax                                                                                                                                                                 |
| CHAINING       | Practice promise chaining                                                                                                                                                               |

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

### Technologies

<table style="width:50%">
  <tr>
    <td><a href="https://jestjs.io/">Jest</a></td>
  </tr>
</table>
