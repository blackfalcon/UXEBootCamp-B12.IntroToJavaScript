var papa_bear = "Joe";
var mama_bear = "Joe Anne";
var jr_bear = "Joe Jr.";
var daughter_bear = "Pear";

var bears = [papa_bear, mama_bear, jr_bear, daughter_bear];

alert("Warning! There are four bears near your home! Papa Bear " + bears[0] + " is staring right at you.");

var input = prompt("Are the bears hungry or fed?");



function insertPhoto(url){
  var img = document.createElement("img");
  img.src = url;
  var src = document.getElementById("photo");
  src.appendChild(img);
}


  if (input === "hungry"){
    insertPhoto('http://2.bp.blogspot.com/-f3-ffQ0Wbu0/Ticihyo0juI/AAAAAAAAAI8/CjmL3ItNOgM/s1600/angry-bear.jpg');
    for(i=0; i< bears.length; ++i) {
      alert("No biggie but " + bears[i] + " is coming to kill you.");
    };

	}

  else if (input === "fed") {

    insertPhoto('http://calibermag.org/wp-content/uploads/2012/10/sleepy_bear.jpg');

  }

  else {

		insertPhoto('http://drawception.com/pub/panels/2012/6-26/ByzG1AfTGD-2.png');

  };





