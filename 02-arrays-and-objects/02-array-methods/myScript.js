let x;
const arr = [1,2,3,4,5,6,7,8,9];

// arr.push(100);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// arr.reverse();
// console.log(arr);

// x = arr.includes(1);
// x = arr.indexOf(1);
// x = arr.slice(2,5); // doesn't change the original arr
// x = arr.splice(2,3); // takes elements out of array
// x = arr.splice(0,1); // splice can be used to just take out 1 item

x = arr.splice(1,4).reverse().toString().charAt(0);

console.log(x, arr);