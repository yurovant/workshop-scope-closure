// Brackets do not create a function scope

var animal = "dog"

if (true) {
  var animal = "cat"
}

console.log(animal) // -> cat
