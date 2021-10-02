//question: 

	// Debugging sayHello function
	// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

	// Example output:
	// Hello, Mr. Spock

	// Starter code: 
	// 	function sayHello(name) {
	// 	  return 'Hello'
	// 	}



// My response: 

function sayHello(name) {
	return `Hello, ${name}`
  }

// Alternative responses: 

//Ex1
function sayHello(name) {      //Added an actual name to the function
  return 'Hello, ' + name;     //Added '+' operator to combine strings
}

//Ex2
const sayHello = name => `Hello, ${name}`;

