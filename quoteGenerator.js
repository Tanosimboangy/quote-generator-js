var quoteNumber = prompt("How many quotes you would want?");

  var firstQuote = ["Vero" , "Paul", "Frank", "Flore"];
  var secondQuote = ["loathe", "hates", "loves", "ignores", "abhor"];
  var thirdQuote = ["bein alone", "the book", "the new phone.", "your method"];

  function generateQuote() {
    var randomNumber1 = Math.floor(Math.random() * (firstQuote.length));
    var randomNumber2 = Math.floor(Math.random() * (secondQuote.length));
    var randomNumber3= Math.floor(Math.random() * (thirdQuote.length));
    for (let i = 0; i < firstQuote.length + secondQuote.length + thirdQuote.length; i++)
      var randomQuote = (" + firstQuote[randomNumber1] + "," + secondQuote[randomNumber2] + "," + thirdQuote[randomNumber3] + ");

      console.log(randomQuote);
}
