
// Fizz Buzz

/*
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

*/

//paramamers, return(type), example, psychodcode; 


// parameters (numbers)
//return: nums 1-100 ; 
// x3 = Fizz
// x5 = Buzz 
// x(3 &&5) = FizzBuzz

//example: 

// when 2 return 2 
// when 3 return Fizz
// When 5 return Buzz
// When 10 return 10 
// When 30 return FizzBuzz


// when 1 return 1
// when 2 return 2
// when 3 return Fizz
// when 4 return 4
// when 5 return Buzz
// when 6 return Fizz
// when 30 return FizzBuzz 


// for loop 
for( i=1; i<=100;  i++){
	if ( n % 3 === 0) {
		return "Fizz"
	}else if  (n % 5 === 0 ){
		return "Buzz"
	}else if (n % 15 === 0){
		return "FizzBuzz"
	}else{
		return "n"
	}
}

// fucntion / array 

function fizzBuzzGame(n){
	let newArr= []
	for( i=1; i<101; i++){
		if(i % 3 === 0 && i % 5 === 0 ){ // optimal order 
			newArray.push('FizzBuzz')
		}else if(i % 3 === 0 && i % 5 !== 0 ){
			newArray.push('Buzz')
		}else if (i % 3 !== 0 && i % 5 === 0 ){
			newArray.push('Fizz')
		}else{
			newArray.push(i)
		}

	}

}


function fizzbuzz(n) {
  
	let newArray = []
	for (let i = 1; i <= n; i++) {
	  if (i % 3 === 0 & i % 5 === 0) {
		newArray.push('FizzBuzz')
	  } else if (i % 3 === 0 & i % 5 !== 0) {
		newArray.push('Fizz')
	  } else if (i % 3 !== 0 & i % 5 === 0) {
		newArray.push('Buzz')
	  } else {
		newArray.push(i)
	  }
	} 
	return newArray
}



























// first way
for (let i=1; i <= 100; i++){
			
	if( i % 3 === 0){
		console.log("Fizz")
	}if (i % 5 === 0){
		console.log("Buzz")
		
	}if (i % 15 ===0 ){
		console.log("FizzBuzz")
	}else{
		console.log(i)
	}
}

//answer one 

for (var i=1; i < 101; i++){

    if (i % 15 == 0){
		console.log("FizzBuzz");
	}else if (i % 3 == 0){ 
		console.log("Fizz")
	}else if (i % 5 == 0){
		console.log("Buzz")
}

// Another One: Function/array 
function fizzbuzz(n) {
  
	let newArray = []
	for (let i = 1; i <= n; i++) {
	  if (i % 3 === 0 & i % 5 === 0) {
		newArray.push('FizzBuzz')
	  } else if (i % 3 === 0 & i % 5 !== 0) {
		newArray.push('Fizz')
	  } else if (i % 3 !== 0 & i % 5 === 0) {
		newArray.push('Buzz')
	  } else {
		newArray.push(i)
	  }
	} 
	return newArray
}


//another  
for (let i=1 ; i <=100; i++){
	let outuput =" ";
	if(i % 3 == 0){
		output += "Fizz"
	}if (i % 5 == 0 ){
		console.log("Buzz")
	}if (i % 15 == 0){
		console.log("FizzBuzz")
	}
}


// example continuing the %'s...

for (let i= 1 ; i <=  100; i++){
	// let i=1 ; i < 101; i++ 
	let outuput = " ";
	if(i % 3 == 0){
		output += "Fizz"
	}if (i % 5 == 0 ){
		console.log("Buzz")
	}if (i % 15 == 0){
		console.log("FizzBuzz")
	}if ( i % 7 == 0) {
		console.log("Savage")
	}if (i % 8 == 0){
		console.log("Castillo")
	}
}



//another one conditional operators 

for( let i = 0; i < 100;){
	console.log(( ++i % 3 ? '': 'fizz')+(i % 5 ? '': 'buzz')||i)
}
//same one 
for (let i = 0; i <100;){
	console.log(
		(++i % 3 ? '': 'Fizz') + ( i % 5 ? '' : "buzz") || i) 
}


//same one 
for (let i = 0; i <100;){
	console.log(
		(++i % 3 ? '': 'Fizz') + ( i % 5 ? '' : "buzz") || i) }
}
