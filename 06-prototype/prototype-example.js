

// prototype

// { toString: () => null }

// hello => String.prototype => Object.prototype
const hello = 'world';
hello.__proto__.__proto__.toString()

// myFunction => Function.prototype => Object.prototype
function myFunction() {
	
}

const myObj = {hello: 'world'}
myObj['foo'] = 'bar';
delete myObj['foo'];
// [hello]
Object.keys(myObj);

// function Person() {}
// Person.prototype.sayHello
class Person {
	
	sayHello() {
		
	}
}

// person => { sayHello: () => ...} => Object.prototype
const person = new Person();