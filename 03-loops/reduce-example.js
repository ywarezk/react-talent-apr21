
// { type: 'some name', payload: }
// [action1, action2]
const ourAge = [37, 36, 27];

// reduce => X
const sum = ourAge.reduce(
	// 1.      0, 37 => 37
	// 2.      37, 36 => 73
	// 3.      73, 27 => 100
	(accumulator, numberFromArray) => {
		return accumulator + numberFromArray;
	},
	
	0
)

console.log(sum);