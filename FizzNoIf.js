// FizzBuzz with no If
//uses: arrow function 

let fizzBuzz = n => {
	return (n % 15 === 0 && "FizzBuzz") ||
			(n % 3===0 && "Fizz") || 
			(n %5 === 0 && "Buzz") ||
			 n 

}



//another one using ARROW FUNCTION 
const fizzBuzz = n => n%15 ? n%5 ? n%3 ? n : "Fizz" : "Buzz" : "FizzBuzz" ;


// another one

function fizzBuzz(n){
	return n % 3 === 0 && n % 5 === 0 ? "FizzBuzz" : n % 5 === 0 ? "Buzz" : n % 3 === 0 ? "Fizz" : n
}; 
