/*

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

INSERT YOUR CODE BELOW
function greet(name){
  //your code here
}

*/


// way 1
function greet(name){
	return `Hello, ${name} how are you doing today?`
  }
  
  // way 2 
  
  function greet (name){
	return "Hello, " + name + " how are you doing today?"
  }

// way 3

const greet = name => `Hello, ${name} how are you doing today?`

