
var allRolls = [];

var diceRoll = function(diceSides, diceNumber) {
  var nResult = 0;
  diceSides = Math.floor(diceSides);
  diceNumber = Math.floor(diceNumber);
  if(diceNumber > 0 && diceSides > 0){
    for(n = 0; n < diceNumber; n++){
      nResult = nResult + (Math.ceil(Math.random() * diceSides));
    }
    alert("Your roll:" + nResult);
    allRolls.push(nResult);
    alert("Your total rolls:" + allRolls);
    return nResult;
  } else {
    alert("Invalid input!!!");
    return nResult;
  }
}
