function one(x) {
   return function(y) {
       console.log (x + y);
   };
}

one(2)(4);

// function(4) {
//     console.log(2 + 4);
// }