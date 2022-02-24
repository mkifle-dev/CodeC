// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

function isRubyComing(list) {
    // thank you for checking out my kata :)
    let count = 0
    for(let i = 0; i < list.length ; i++){
      let {firstName, lastName, country, contient, age, language} = list[i]
      if(language === "Ruby"){
        count = count + 1;
      }  
      
    }
    if(count > 0) return true 
    else return false
  
}