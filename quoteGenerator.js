var firstQuote = ["The brightest light casts the darkest shadow. You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity."];
// The first qoute for this object. Declalration for each variable. 

var secondQuote = ["To condense fact from the vapor of nuance. No matter where you go, everyone’s connected. All those moments will be lost in time, like tears in rain."];
// The second qoute for this object. Declalration for each variable.

var thirdQuote = ["Falling burned and blinded through a Siberian sky. It’s impossible to move, to live, to operate at any level without leaving traces. See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places."];
// The third qoute for this object. Declalration for each variable.

function generateQuote() {
  var randomNumber1 = Math.floor(Math.random() * (firstQuote.length));
  var randomNumber2 = Math.floor(Math.random() * (secondQuote.length));
  var randomNumber4 = Math.floor(Math.random() * (thirdQuote.length));
  for (let i = 0; i < firstQuote.length + secondQuote.length + thirdQuote.length; i++)
    var randomQuote = firstQuote[randomNumber1] + ` ` + secondQuote[randomNumber2] + ` ` + ` ` + thirdQuote[randomNumber4];
}

for (i = 0; i < generateQuote.length; i++) {
	if (generateQuote === firstQuote) {
		return firstQuote;
	} else if (generateQuote === secondQuote) {
		return secondQuote;
	} else {
		return thirdQuote;
	}
}


var quoteNumber = prompt("How many quotes you would like to generate?", "1");
// Create the first uotput for the user to write by using var. 
if (quotenumber != null) {}
