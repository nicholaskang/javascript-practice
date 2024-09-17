const myString = 'jonathan';
let myNewString;

const capitalizeFirstLetter = (string) => {
  // Attempt 1
  // let firstLetter = string[0].toUpperCase();
  // let remainingLetters = string.slice(1);
  // Attempt 2
  // let newWord = firstLetter + remainingLetters;
  // let newWord = string[0].toUpperCase() + string.slice(1);
  // return newWord
  // Attempt 3
  // return string[0].toUpperCase() + string.slice(1);
  // Attempt 4
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

myNewString = capitalizeFirstLetter(myString);
console.log(myNewString)
