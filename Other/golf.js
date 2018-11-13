var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);


// each hole = par
// strokes = average num expected to make
// above or below par your strokes = different nickname
// par an strokes will be positive numeric

// Strokes	        Return
// 1	            "Hole-in-one!"
// <= par - 2	    "Eagle"
// par - 1	      "Birdie"
// par	          "Par"
// par + 1	      "Bogey"
// par + 2	      "Double Bogey"
// >= par + 3	    "Go Home!"
