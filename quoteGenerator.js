 var firstQuote = [`Vero` , `Paul`, `Frank`, `Flore`];
 var secondQuote = [`loathe`, `hates`, `loves`, `ignores`, `abhor`];
 var thirdQuote = [`bein alone`, `the book`, `the new phone.`, `the school system`];

 function generateQuote() {
   var randomNumber1 = Math.floor(Math.random() * (firstQuote.length));
   var randomNumber2 = Math.floor(Math.random() * (secondQuote.length));
   var randomNumber4 = Math.floor(Math.random() * (thirdQuote.length));
   for (let i = 0; i < firstQuote.length + secondQuote.length + thirdQuote.length; i++)
     var randomQuote = firstQuote[randomNumber1] + secondQuote[randomNumber2] + thirdQuote[randomNumber4];
 }

console.log(Math.floor(Math.random() * (beg.length)));
var quoteNumber = prompt(`How many quotes you would like to generate?`);
