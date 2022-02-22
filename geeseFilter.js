function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let bird2 = birds.filter(type => !geese.includes(type));
  
  return bird2
}
