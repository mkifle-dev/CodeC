// Is it Even? 

// My answer: 
function testEven(n) {
    return n % 2 === 0 ? true: false; 
}

//Another way: 
// What's different: true false assumed 

function testEven(n) {
    return (n % 2) == 0;
}

// Another answer: 
// What's diff: if/else statement 
function testEven(n) {
	if ( n % 2 === 0 ){
	  return true;
	}
	else return false;
 }