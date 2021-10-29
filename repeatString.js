/*

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/



//My Answer
function repeatStr (n, s) {
  return s.repeat([n]); 
  // In JavaScript, the syntax for the repeat() method is:
  // string.repeat([count]);
}

//also works without brackets: 
function repeatStr (n, s) {
  return s.repeat(n); 
  
  // In JavaScript, the syntax for the repeat() method is:
  // string.repeat([count]);
}


//Another Answer: 
repeatStr = (n, s) => s.repeat(n)

//Another Answer: 
function repeatStr(n, str)
{
  return str.repeat(n);
}

//Another Answer: 
function repeatStr (n, s) {
  return n == 1 ? s : s + repeatStr(n-1, s);
}