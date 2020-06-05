var firstQuote = [`Vero` , `Paul`, `Frank`, `Flore`];
var secondQuote = [`loathe`, `hates`, `loves`, `ignores`, `abhor`];
var thirdQuote = [`bein alone`, `the book`, `the new phone.`, `the school system`];

function generateQuote() {
  var randomNumber1 = Math.floor(Math.random() * (firstQuote.length));
  var randomNumber2 = Math.floor(Math.random() * (secondQuote.length));
  var randomNumber4 = Math.floor(Math.random() * (thirdQuote.length));
  for (let i = 0; i < firstQuote.length + secondQuote.length + thirdQuote.length; i++)
    var randomQuote = firstQuote[randomNumber1] + ` ` + secondQuote[randomNumber2] + ` ` + ` ` + thirdQuote[randomNumber4];
}



var beg = [`Peter `, `Michael`, `Lorna`, `Diana`, `Maria`]
var mid = [`prefer`, `looks after`, `has`, `works with`, `is breeding`]
var end = [`dobermans`, `labradors`, `grate danes`, `french buldogs`, `rotweilers`]
function generateQuote() {
  var randomNumber1 = Math.floor(Math.random() * (beg.length));
  var randomNumber2 = Math.floor(Math.random() * (mid.length));
  var randomNumber4 = Math.floor(Math.random() * (end.length));
  for (let i = 0; i < beg.length + mid.length + end.length; i++)
    var randomQuote = beg[randomNumber1] + ` ` + mid[randomNumber2] + ` ` + ` ` + end[randomNumber4]
  document.getElementById('quoteDisplay').innerHTML = [randomQuote];
}
var begg = [`She `, `He`, `It`, `Maddie`, `Josh`]
var midd = [`likes`, `hates`, `loves`, `dislikes`, `adores`]
var midd1 = [`well- trained`, `nice`, `adorable`, `fluffy`, `goodlooking`]
var endd = [`animals`, `pets`, `dogs`, `cats`, `spiders`]
function generateQuote1() {
  var randomNumber1 = Math.floor(Math.random() * (begg.length));
  var randomNumber2 = Math.floor(Math.random() * (midd.length));
  var randomNumber3 = Math.floor(Math.random() * (midd1.length));
  var randomNumber4 = Math.floor(Math.random() * (endd.length));
  var randomQuote = begg[randomNumber1] + ` ` + midd[randomNumber2] + ` ` + midd1[randomNumber3] + ` ` + endd[randomNumber4]
  document.getElementById('quoteDisplay').innerHTML = [randomQuote];
}
var quoteNumber = prompt(`How many quotes you would like to generate?`, `1`);
if (quotenumber != null) {}