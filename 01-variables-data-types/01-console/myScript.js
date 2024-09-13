const add = (a, b) => {
  console.log(a+b);
  return a+b
}

add(3,5);

console.group('test');
console.log('Testing');
console.log('My object');
console.groupEnd();

const styles = 'padding: 10px; background-color: darkGreen; color: white;';
console.log('%cHello World', styles)