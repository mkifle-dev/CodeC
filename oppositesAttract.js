//instructions: 

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// starter code:
// function lovefunc(flower1,flower2){ *insert your code here* }




function lovefunc(flower1, flower2) {
    if ( flower1 % 2 !== 0 && flower2 % 2 !== 0 || flower1 % 2 === 0 && flower2 % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

//repeat 

function lovefunc(flower1, flower2){
    if ( flower1 % 2 !==0 && flower2 % 2 !==0 ||flower1 % 2 === 0 && flower2 % 2 === 0 ) {
      return false;
    }else { 
      return true;
    }
  }
  
  
//another one: 
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2; // is it assumed to be return true/false; help
  }

//exp of above method

  let a= 5; 
  let b=10; 
//another one: 
function lovefunc(a, b){
  return a % 2 !== b % 2; // this is saying return true if they don't both have the same remainders when divided by two. (if something is even, it'll have a 0 remainder; otherwise it'll be different)
}

console.log(multiply(a,b)); 



  // another way

  function lovefunc(flower1, flower2){
    return ((flower1%2==0 && flower2%2!=0) || (flower1%2!=0 && flower2%2==0)) ? true : false;
  }

  // another way
  const lovefunc = (f1, f2) => {
    return (f1 + f2) % 2 === 0 ? false : true;
    //works b/c two even # equal an even number # ; and 
    // Two odd numbers = odd #; 
  }
