
var diceRoll = function(diceSides, diceNumber) {
  var nResult = 0;
  diceSides = Math.floor(diceSides);
  diceNumber = Math.floor(diceNumber);
  if(diceNumber > 0 && diceSides > 0){
    for(n = 0; n < diceNumber; n++){
      nResult = nResult + (Math.ceil(Math.random() * diceSides));
    }
  } else {
    alert("Invalid input!!!");
  }
  return nResult;
}
