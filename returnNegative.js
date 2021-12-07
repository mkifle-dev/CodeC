// In this assignment you are given a number and have to make it negative. But maybe the number is already negative? 

function makeNegative(num) { 
	//answer 
}


// my answer: 
function makeNegative(num) {
	return (num < 0) ? num : -num;
}


// another answer: 
function makeNegative(num) {
	if ( num > 0 ) {
		  return -num;
	  }
	  else {
		  return num;
	  }
}


// top answer: 
function makeNegative(num) {
	return -Math.abs(num);
}