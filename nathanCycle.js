/*
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5

function litres(time) { 
	return //insert code here 
*/


// first way 
function litres(time) {
	let water = (0.5 * time)
	return Math.floor(water);  // math.floor returns the smallest integer greater than or equal to the value we pass
}

  
  
//another way of solving it 
  function litres(time){
	return Math.floor(0.5 * time); 
}
  
  
  // things I learned: the M in Math.floor has to be capitalized!! 
  // also: math.floor gives us the rounded down number (whole number). 