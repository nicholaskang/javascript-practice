const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sumOutput = (a, b) => {
  return `${a} + ${b} = ${a + b}`  
}
const differenceOutput = (a, b) => {
  return `${a} - ${b} = ${a - b}`  
}
const productOutput = (a, b) => {
  return `${a} * ${b} = ${a * b}`  
}
const quotientOutput = (a, b) => {
  return `${a} / ${b} = ${(a / b).toFixed(1)}`  
}
const remainderOutput = (a, b) => {
  return `${a} % ${b} = ${a % b}`  
}

console.log(sumOutput(x,y) );
console.log(differenceOutput(x,y) );
console.log(productOutput(x,y) );
console.log(quotientOutput(x,y) );
console.log(remainderOutput(x,y) );
