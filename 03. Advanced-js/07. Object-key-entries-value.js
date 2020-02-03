// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle.padStart(10);
rabbit.padEnd(10);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value =>
  value.join(' ')).join(' ');

// Object.values
// Object.entries
// Object.keys

let obj1 = {
  username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Julia',
}

Object.keys(obj1).forEach((key, index)=>{
  console.log(key, obj1[key]);
})

Object.values(obj1).forEach(value => {
  console.log(value);
})

Object.entries(obj1).forEach(value => {
  console.log(value);
})

