# Reference or Value

Primitives are passed by value

```
const myNumber = 10;

function sayHello(anotherNumber) {
	anotherNumber+=10;
}

sayHello(myNumber)
// 10
console.log(myNumber);
```

Non primitives are by reference

```
const myArray = [1,2,3]

function sayHello(anotherArray) {
	anotherArray.push(4);
}

sayHello(myArray)
// [1,2,3,4]
console.log(myArray)
```