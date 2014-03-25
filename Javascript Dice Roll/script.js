// start with variable die
var die = null;
// start with variable dice
var dice = null;

//declare a function and give it a name: dice_roll
//the parameters of the function: die, dice
function dice_roll(die, dice) {
  var roll = 0;
  
  // set the initial var
    // i = 0
    // tells computer to start with a value of 0 for i
  
  // then define the conditions
    // i < dice
    // the loop will keep running depending on the number of dice
  
  // define increments
    // i++
    // i = i + 1 === i++
    // efficient way to code, increment up by 1
    // i+=# # = increment 
  
  //i, our counting variable, can be any name
  
  for (i=0; i < dice; i++) {
    
    // if above all true, run this code
    // Math.random() generates a number between 0 and 1
    // Math.random() * 10 generates a number between 0 and 10
    // Math.round() rounds to a whole number
    
    // basic random number:
      // Math.round(Math.random() * (maximum - minimum + 1)) + minimum;
    
    
    roll = roll + Math.round(Math.random() * (die - 1)) + 1;}
  
  document.form.text.value = roll;
}
