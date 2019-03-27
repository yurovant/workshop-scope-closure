# Scope and closures in JavaScript

### Scope
Scope - context in which variable exists

### Undefined variable
Assigning a value to the undefined variable creates a variable in global scope

```javascript
animal = 'dog'

console.log(animal) // -> dog
```

### Global variable
```javascript
var animal = 'dog'

console.log(animal) // -> dog
```

### Local variable (function scope)
```javascript
var animal = 'dog'

function showAnimal() {
  var animal = 'cat'
  console.log(animal)
}

showAnimal()        // -> cat
console.log(animal) // -> dog
```

### No block scope
```javascript
var animal = 'dog'

function showAnimal() {
  animal = 'cat'
  console.log(animal)
}

showAnimal()        // -> cat
console.log(animal) // -> cat
```

### Variable mismatch
```javascript
var animal = 'dog'

function showAnimal() {
  console.log(animal)
}

function showFish() {
  animal = 'fish'
  console.log(animal)
}

showAnimal() // -> dog
showFish()   // -> fish
showAnimal() // -> fish
```

### Scope priority
Local variables have priority over global variables

```javascript
var animal1 = 'dog'
var animal2 = 'cat'

function showAnimals() {
  var animal2 = 'fish'
  console.log(animal1)
  console.log(animal2)
}

showAnimals() // -> dog, fish
```

### Variable in brackets
Brackets DO NOT create a function scope for variables defined with `var` keyword

```javascript
var animal = 'dog'

{
  var animal = 'cat'
}

console.log(animal) // -> cat
```

### Variable in loop
Loops DO NOT create a function scope for variables defined with `var` keyword

```javascript
var animal = 'dog'

for (var i = 1; i < 10; i++) {
  var animal='cat'
  void(0)
}

console.log(i)      // -> 10
console.log(animal) // -> cat
```

### ```let```
```let``` defines variable within a block scope

```javascript
{
  let animal = 'cat'
}

console.log(typeof animal) // -> undefined

for (let i = 1; i < 10; i++) {
  void(0)
}

console.log(typeof i) // -> undefined
```

### Timeouts and intervals

```setTimeout``` and ```setInterval``` are executed in global scope
