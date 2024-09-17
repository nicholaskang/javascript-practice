let myString = 'jonathan';

const capitalizeFirstLetter = (string) => {
  let firstLetter = string[0].toUpperCase();
  let remainingLetters = string.slice(1);
  let newWord = firstLetter + remainingLetters;
  console.log(newWord)
}

capitalizeFirstLetter(myString);

// testing github contributions