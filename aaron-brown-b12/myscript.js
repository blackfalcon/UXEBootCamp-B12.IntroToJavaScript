/** global array to add all roll results to */
var allRolls = [];

/** diceSides is number of sides on the dice, diceNumber is the number of times the dice is rolled; these numbers are retrieved from the input fields in the form */
var diceRoll = function(diceSides, diceNumber) {
  /** declare variable that will be our final result, set to 0 initially */
  var nResult = 0;
  /** Make sure user input variables are whole numbers and not fractions or decimals */
  diceSides = Math.floor(diceSides);
  diceNumber = Math.floor(diceNumber);
  /** Both numbers should be positive integers or else it is effectively rolling no dice at all */
  if(diceNumber > 0 && diceSides > 0){
    /** Iterate loop for as many times as the dice are rolled */
    for(n = 0; n < diceNumber; n++){
      /** Roll dice and add the roll to the final result variable */
      nResult = nResult + (Math.ceil(Math.random() * diceSides));
    }
    /** Tell user the final result of the roll */
    alert("Your roll: " + nResult);
    /** Add roll to global array */
    allRolls.push(nResult);
    alert("Your total rolls: " + allRolls);
    return nResult;
  } else {
    /** If dice gets rolled < 1 times or dice has < 1 side, i.e. the user done goofed */
    alert("Invalid input!!!");
    return nResult;
  }
}
