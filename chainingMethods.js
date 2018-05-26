//A closure is the combination of a function and the lexical environment within which that function was declared. 
function one(x) {
   return function(y) {
       console.log (x + y);
   };
}

one(2)(4);

// function(4) {
//     console.log(2 + 4);
// }