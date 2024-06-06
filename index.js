// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');
// 
// console.log(`Random number: ${generateRandomNumber()}`)
// console.log(`26 celcius to fahrenheit: ${celciusToFahrenheit(26)}`)

// ------------------------------------------------
// import { getPosts } from './postController.js'; // without 'default'
import  getPosts, {getPostsLength}  from './postController.js'; // without 'default'
console.log(getPosts());
console.log(`posts length: ${getPostsLength()}`);