"use strict"

function sayHello(hello = 'world') {
	
}

const hello = function() {
	// unknown
	// determined during runtime
	// the object that is calling the function
	console.log(this)
	debugger;
}

// this?
const lambdaExample = () => {
	// lambda example
	console.log(this === module.exports);
	debugger;
	return 10
}

const lambdaExample1 = (arg1) => 10

const lambdaExample2 = arg1 => 10;

// global
hello();

// a = {someFunction}
const a = {someFunction: hello, lambda: lambdaExample};
a['someFunction']();
a['lambda']();


// Person.prototype.birthday = function() {}
//// Person.prototype.birthday2 = () => {}
// person.birthday2 = () => {}
class Person {
	birthday() {
		console.log(this);
	}
	
	birthday2 = () => {
		console.log(this);
	}
}

const person = new Person();

person.birthday();
const b = {bir: person.birthday};
b['bir']()
