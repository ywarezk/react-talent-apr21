

// Error Handling

// class TypeError extends Error
// class EvalError extends Error
// stacktrace
const myError = new Error();

try {
	throw myError;	
} catch(err) {
	console.log(err.message);
}


console.log('something happened');

function sayHello() {
	/*
	try{
		error1 
	} catch(err) {
		consistent operations
	}
	
	// error1 
	//    - i have what i need to deal this error
	//    - it is dealt in the same way all the time    
	
	// error2 - you dont do anything you let it bubble
	      - i dont what i need to deal with this error
		  - the operation due to this error is different
	
	try {
		error3
	} catch(err) {
		throw err;
	}
	
	// error3
	    - i need to do x,y you have what you need to do it
		- i have to z which is unknown
	*/
	
}

// Promise
fetch('https://...')