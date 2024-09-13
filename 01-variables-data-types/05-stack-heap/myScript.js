// const firstName = 'Nick';
// console.log(firstName, typeof firstName);

// const obj = {
//   name: 'Nick',
//   occupation: {
//     employment: 'Unemployed',
//     industry: 'Software',
//   }
// }
// // console.log(obj);

// // const obj1 = obj;
// // obj1.age = 35;
// // console.log(obj, obj1)

// const obj1 = {...obj};
// obj1.age = 35;
// obj1.name = 'Jonathan';
// // Nested objects still reference original obj with spread operator
// obj1.occupation.employment = 'Full-Time'
// console.log(obj, obj1)


/*  Primitive values are stored in the stack */

// let oldName = 'Nick';
// let newName = oldName;
// newName = 'Jonathan';
// console.log(oldName, newName)


/*  Reference values are stored in the heap
      Below, two variables point to the same object, in the heap
      Variables are the address, object is the house, 2 variables with same address point to the same house
*/

// let oldPerson = {
//   name: 'Nick'
// }
// let newPerson = oldPerson;
// newPerson.name = 'Jonathan';
// newPerson.age = 35;
// console.log(oldPerson, newPerson);
