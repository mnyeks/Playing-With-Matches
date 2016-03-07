// JavaScript code goes here at the bottom
		// Returns a random number between min (inclusive) and max (exclusive)
		// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
	  document.getElementById("Rand").innerHTML = getRandomIntInclusive(1, 3);
	  document.getElementById("Rand1").innerHTML = getRandomIntInclusive(1, 3);
	  document.getElementById("Rand2").innerHTML = getRandomIntInclusive(1, 3);
	  

	  
