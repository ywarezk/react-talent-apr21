
// Promise<string>
const helloWorld = new Promise((resolve, reject) => {
	
	setTimeout(() => {
		
		resolve('hello world');
		// reject(new Error('something happened'));
		
	}, 1000)
	
});

// Promise<number | string>
const another = helloWorld
	.then(
		(msg) => {
			console.log(msg);
			// number
			return msg.length;
		},
		(err) => {
			// string
			return err.message;
		}
	)
	// then(undefined, () => {})
	.catch((err) => {
		return 'hello'
	})
	.then(
		(numOrStr) => {
			return true
		},
		(err) => {
			return {}
		}
	)
	.then(
		(boolOrObj) => {
		
		}
	)
	.catch((err) => {
		
	})

helloWorld.then(
	(msg) => {
		console.log(msg);
	}
)

/**
 * @returns Promise
 */
async function somethingAsync() {
	
	try {
		const promiseResult = await fetch();
		const promiseResult = await eventPromise();
	} catch(err) {
		
	}
	
		
	
	
	/*
	
	fetch - promise1
	   - we know how to deal with it
	   - we have what we need
	   - and we are always dealing with it in the same way
	
	eventPromise - promise2
	   - you do not have the ability to deal with this error
	   
	return eventPromise.then(
		() => {
			
		}
	)
	
	timerPromise - promise3
		- consisten stuff
		- stuff that you don't know how to deal with	

	return timerPromise.then(
		(success) => {
			
		},
		(err) => {
			// do something you can here
			
			throw err;	
		}
	)
	
	*/
	
}