// // JavaScript program to print date and time from the date object
// const date = new Date();
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(
//   `Current Time is: ${date.toLocaleTimeString()}, Today is: ${
//     days[date.getDay()]
//   }`
// );
// console.log(
//   `${date.getDate()} - ${months[date.getMonth()]} - ${date.getFullYear()}`
// );

// // JavaScript program to rotate the string in the right direction.
// const rotate = (word) => {
//   let reversedWord = "";
//   for (let i = word.length - 1, j = 0; i >= 0, j < word.length; i--, j++) {
//     reversedWord = reversedWord + word[i];
//   }
//   console.log(reversedWord);
// };
// rotate("ABC");

// //find the extension type of a filename
// const fileName = "filename.js";
// const extension = fileName.split(".").pop();
// console.log(extension);

// // JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
// const _50Finder = (num1, num2) => {
//   if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
//     console.log(true);
//   }
//   else console.log(false);
// };
// _50Finder(0, 50);

// // JavaScript program to check whether a given integer is within 20 of 100 or 400
// const integerRangeFinder = (integer) => {
//   if (
//     (integer >= 100 && integer <= 120) ||
//     (integer >= 400 && integer <= 420)
//   ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// integerRangeFinder(410);

// const stringModifier = (string) => {
//     if(string[0] === 'P' && string[1] === 'y') {
//         console.log(string)
//     }
//     else {
//         console.log('Py' + string);
//     }
// };
// stringModifier('pyrate');

// // JavaScript program to remove a character at the specified position in a given string and return the modified string.
// const charRemover = (string, position) => {
//   const adjustedPosition = position - 1;
//   let modifiedString = '';
//   let flag = false;
//   for (let i = 0; i < string.length; i++) {
//     if (i === adjustedPosition) {
//       flag = true; // position has matched
//     }
//     if (!flag) {
//       modifiedString = modifiedString + string[i];
//     }
//     if (flag) {
//       if (i + 1 === string.length && adjustedPosition === i) {
//         return console.log(modifiedString);
//       }
//       if (i + 1 === string.length) {
//         return console.log(modifiedString);
//       }
//       modifiedString = modifiedString + string[i + 1];
//     }
//   }
//   console.log(modifiedString);
// };
// charRemover("script", 1);

// // JavaScript program to check whether a given positive number is a multiple of 3 or 7.
// const multiple_3_or_7 = (number) => {
//   if (number % 3 === 0 || number % 7 === 0) {
//     console.log("Divisible by 3 or 7");
//   } else {
//     console.log("Not divisible by 3 or 7");
//   }
// };
// multiple_3_or_7(88);

// // JavaScript program to find the largest of three given integers.
// const largestInteger = (number1, number2, number3) => {
//     let largest;
//     if(number1 >= number2 && number1 >= number3) {
//         return console.log('Largest Number: ', number1);
//     }
//     else if(number2 >= number1 && number2 >= number3) {
//         return console.log('Largest Number: ', number2)
//     }
//     else return console.log('Largest Number: ', number3)
// };
// largestInteger(1,2,3);

// //  check whether a specified character exists between the 2nd and 4th positions in a given string.
// const charDetecter = (string, char) => {
//   if (string[1] === char || string[3] === char) {
//     return console.log(true);
//   } else return console.log(false);
// };
// charDetecter('java','b');

// // JavaScript program that checks whether the last digit of three positive integers is the same
// const lastDigitChecker = (number1, number2, number3) => {
//   if (number1 % 10 === number2 % 10 && number2 % 10 === number3 % 10) {
//     return console.log("Similar last digit");
//   } else {
//     return console.log("Last digits are not same");
//   }
// };
// lastDigitChecker(21, 31, 41);
// lastDigitChecker(21, 31, 43);
// lastDigitChecker(22, 31, 41);
// lastDigitChecker(20, 30, 10);

// // This is how strings are modified in JavaScript. The array methodifications are not applicaple on strings.
// let string = "";
// console.log(string.length, string = string + 'A', string.length);

// // JavaScript program to capitalize the first letter of each word in a given string.
// const capitalizeFirstLetter = (sentence) => {
//   let modifiedString = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (i === 0) {
//       modifiedString = modifiedString + sentence[i].toUpperCase();
//     } else if (sentence[i] === " ") {
//       modifiedString = modifiedString + sentence[i];
//     } else if (sentence[i - 1] === " ") {
//       modifiedString = modifiedString + sentence[i].toUpperCase();
//     } else {
//       modifiedString = modifiedString + sentence[i];
//     }
//   }
//   return console.log(modifiedString);
// };
// capitalizeFirstLetter("hi my name is akshay. what is your name?");

// // JavaScript program to convert a given number into hours and minutes.
// const hours_minutes = (number) => {
//     if(number > 0 && number < 60) {
//         return console.log(`${number} minutes`);
//     }
//     else {
//         const hours = parseInt(Math.floor(number/60));
//         const minutes= number%60;
//         return console.log(`${hours} hours : ${minutes} minutes`);
//     }
// }
// hours_minutes(179);
// hours_minutes(29);
// hours_minutes(61);

// // JavaScript program to extract the first half of a even string.
// const extract = (string) => {
//     let modified = "";
//     for(let i = 0; i < string.length/2; i++) {
//         modified = modified + string[i];
//     }
//     return console.log(modified);
// }
// extract("java");

// // JavaScript program to find the maximum difference among all possible pairs of a given array of integers
// const compareIntegers = (integers) => {
//   let maxDiff = 0;
//   for (let i = 0; i < integers.length - 1; i++) {
//     for (let j = i + 1; j < integers.length; j++) {
//       if (Math.abs(integers[i] - integers[j]) > maxDiff) {
//         maxDiff = Math.abs(integers[i] - integers[j]);
//       }
//     }
//   }
//   console.log(maxDiff);
// };

// compareIntegers([1,20,551,4,201,800]);

// // JavaScript program to find the number appearing most frequently in a given array of integers.
// const integerCount = (integers) => {
//   const records = [];
//   const counts = [];
//   let position = false
//   for (let i = 0; i < integers.length; i++, position = false) {
//     for (let j = 0; j < records.length; j++) {
//       if (integers[i] === records[j]) {
//         counts[j] = counts[j] + 1; // increment the count
//         position = true; // record the position
//         j = records.length; // break the inner loop if the integer is found
//       }
//     }
//     if (position === false) {
//       records.push(integers[i]); // add the integer to the array for the first time
//       counts.push(1); // increment the count to 1 for the first entry
//     }
//   }
//   console.log(records);
//   console.log(counts);
// };

// integerCount([10, 20, 80, 40, 50, 40, 50, 50, 40, 90, 90]);

// // JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.
// const sumOfDifferences = (integers) => {
//   let sum = 0;
//   for (let i = 0; i < integers.length - 1; i++) {
//     sum += Math.abs(integers[i] - integers[i + 1]);
//   }
//   console.log(sum);
// };
// sumOfDifferences([10,20,30,60,100]);

// // JavaScript program to check if a given integer has an increasing digit sequence
// const checkSequence = (integer) => {
//   if (typeof intger === NaN) {
//     return console.log("Invalid Integer");
//   }
//   const length = integer.toString().length;
//   if (length === 1) {
//     return console.log("Integer should be of multi digits");
//   } else {
//     let flag = false;
//     const int = integer.toString();
//     for (let i = 0; i < length - 1; i++) {
//       if (int[i + 1] > int[i]) {
//         flag = true;
//       } else {
//         return console.log(
//           integer,
//           " does not have an increasing digit sequence"
//         );
//       }
//     }
//     return console.log(integer, " has an increasing digit sequence");
//   }
// };
// checkSequence(123459);

// // JavaScript program to find the smallest round number not less than a given value.
// const roundNum = (numbers, limit) => {
//   let number = null;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 10 === 0 && numbers[i] < limit) {
//       if (number === null) {
//         number = numbers[i];
//       } else if (numbers[i] < number) {
//         number = numbers[i];
//       }
//     }
//   }
//   if(number === null) {
//     return console.log("There is no smallest round number lesser than", limit);
//   }
//   return console.log("smallest round number is", number);
// };
// roundNum([20, 30, 40, 50, 10], 50);

// // JavaScript program to remove all characters from a given string that appear more than once.
// const removeRepeatedCharacters = (string) => {
//   console.log("Orignal String: ", string);
//   let characters = "";
//   let modifiedString = "";
//   const countOfCharacter = [];
//   let foundFlag = false;
//   for (let i = 0; i < string.length; i++, foundFlag = false) {
//     for (let j = 0; j < characters.length || j === 0; j++) {
//       if (string[i] === characters[j]) {
//         countOfCharacter[j] = countOfCharacter[j] + 1;
//         foundFlag = true;
//         j = characters.length; // break the loop
//       }
//     }
//     if (!foundFlag) {
//       characters += string[i];
//       countOfCharacter.push(1);
//     }
//   }

//   for (let j = 0; j < countOfCharacter.length; j++) {
//     if (countOfCharacter[j] > 1) {
//       string = string.replace(new RegExp(characters[j], "gi"), "");
//     }
//   }
//   return console.log("Modified String: ", string);
// };

// removeRepeatedCharacters("akshayksh");

