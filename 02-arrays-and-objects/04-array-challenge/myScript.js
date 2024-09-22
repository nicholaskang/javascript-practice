// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// arr.reverse()
// console.log(arr)

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// arr1.pop();
// const arr3 = [...arr1, ...arr2];
// arr3.splice (4,1);
// const arr3 = arr1.slice(0,4).concat(arr2);
// console.log(arr3)

// const arr4 = [...arr1, ...arr2];
// arr4.splice(arr4.indexOf(5), 1);
// console.log(arr4);

// const myArray = [1,2,3,4,5,5,6, 5,7,8];
// const removeDuplicatesInArray = (array) => {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if (!newArray.includes(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   console.log(newArray)
// }
// removeDuplicatesInArray(myArray);

const numbers = [5,2,9,1,9,5,2,9,6,3,8,5,0];

// const reOrderNumbers = (array) => {
//   const newArray = [];
//   // Iterate through all numbers in array
//   for (let i = 0; i < array.length; i++) {
//     // Auto add first number
//     if (i === 0) {
//       newArray.push(array[i]);
//     }
//     // Don't add duplicate numbers
//     if (!newArray.includes(array[i])) {
//       // If iterated number is higher than latest number, add to end
//       // console.log(array[i], newArray[newArray.length], array[i] > newArray[newArray.length])
//       if (array[i] > newArray[newArray.length - 1]) {
//         newArray.push(array[i]);
//       } else if (array[i] < newArray[newArray.length - 1]) {
//         newArray.unshift(array[i]);
//       }

//       // If number is lower than existing number, 
//     }
//   }
//   console.log(newArray);
// }
// reOrderNumbers(numbers);

// console.log(numbers.sort());