let x;
const person = {
  name: 'John Doe',
  age: 35,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  },
  hobbies: ['music', 'sports']
}
x = person;

// x = person.name;
// x = person.address.state;
// x = person.hobbies[0];
// person.name = 'Jane Doe';
// person.isAdmin = false;
// delete(person.age); // possible to delete properties
// person.isMarried = false;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
}

person.greet();
// console.log(x);