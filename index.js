function receivesAFunction(callback) {
   return callback()
 }

 function returnsANamedFunction() {
   name = function () {
     'hi'
   }
   return name
 }

 function returnsAnAnonymousFunction() {
   return function () {
     'hi'
   }
 }
