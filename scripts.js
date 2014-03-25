function workoutTime(){
//declares array for each category
  var warm_up = [
    {name: "Running", time: 3},
    {name: "Jump Rope" , time: 5},
    {name: "Jumping Jacks", time: 2}];
  var main_workout = [
    {name: "Pushups", time: 1},
    {name: "Crunches" , time: 3},
    {name: "Weights", time: 2},
    {name: "Situps", time: 2},
    {name: "Sprints" , time: 4},
    {name: "Ladders", time: 2}];
  var cool_down = [
    {name: "Stretches", time: 5},
    {name: "Jogging" , time: 5},
    {name: "Tequilas", time: 2}];

//generate random num * length of array
  var randomWarmUp = warm_up[Math.floor(Math.random() * warm_up.length)];

//insert result of for loop into array
  var mainWorkouts = [];
  var mainWorkoutsHTML = "";
for (var i = 0; i < 3; i++) {
  var newWorkout = main_workout[Math.floor(Math.random() * main_workout.length)];
mainWorkoutsHTML = mainWorkoutsHTML += "<p>"+newWorkout.name+" for "+newWorkout.time+" minutes</p>";
}

//generate random num * length of array
  var randomCoolDown =  cool_down[Math.floor(Math.random() * cool_down.length)];

//print to p tags in document
  document.getElementById('warm').innerHTML = randomWarmUp.name+" for "+randomWarmUp.time + " minutes";
  document.getElementById('main').innerHTML = mainWorkoutsHTML;
  document.getElementById('cool').innerHTML = randomCoolDown.name + " for " + randomCoolDown.time + " minutes";

  // var endCheck = prompt("Is this ok with you?");

  // if (endCheck === "yes"){
  //   alert("Good! Get to work!");
  // }
  // else {
  //   alert("Too bad! Get to work!");
  // }
}
