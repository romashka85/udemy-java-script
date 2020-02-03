var todos = [
   'clean room',
   'cook food',
   'study javascript',
   'say hallo',
   'do laundry'
];


// for (var i = 0; i < todos.length; i++){
//      todos.pop();
// }
// console.log(todos);

function logTodos(todo, i){
   console.log(todo, i);
};

todos.forEach(logTodos);

// todos.forEach(function(todo, i){
//    console.log(todo, i);
// });

var countOne = 10;

while (countOne > 10){
   console.log(countOne);
   countOne--;
};

var countTwo = 10;
do{
   console.log(countTwo);
   countTwo--;
} while(countTwo > 10);