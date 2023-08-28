// Print date and time from the date object
const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(
  `Current Time is: ${date.toLocaleTimeString()}, Today is: ${days[date.getDay()]}`
);

