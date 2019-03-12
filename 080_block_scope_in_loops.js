// Loops DO NOT create function scope

var animal = 'dog'

for (var i = 1; i < 10; i++) {
  var animal = 'cat'
  void(0)
}

console.log(i) // -> 10
console.log(animal) // -> cat
