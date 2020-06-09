let array1 = ["Vero loathes bein alone,",
              "It is easy,",
              "Late is better than never,",
              "Be mild-tempered,"
                ];
let array2 = ["I love this car,",
              "the eggs are enough,",
              "you can say that again,",
              "he is ignored by his friends,",
             ];
let array3 = ["generate a new account.",
              "jao got a new book.",
              "the cost of new phone is prohibitive.",
              "your method is updated."
                ];
let randomIndex1 = Math.floor(Math.random() * ( array1.length));
let randomIndex2 = Math.floor(Math.random() * ( array2.length));
let randomIndex3 = Math.floor(Math.random() * ( array3.length));

let string1 = array1[randomIndex1];
let string2 = array2[randomIndex2];
let string3 = array3[randomIndex3];

let quote = `${string1} ${string2} ${string3}`;
console.log(quote);

var quoteNumber = prompt("How many times do you want to generate a random quotes, 1 to 5?");
  if (quoteNumber >= 1 && quoteNumber <= 5) {
    for (let i = 0; i <= 5; i++) {
      function generateQuote() {
        let randomIndex1 = Math.floor(Math.random() * ( array1.length));
        let randomIndex2 = Math.floor(Math.random() * ( array2.length));
        let randomIndex3 = Math.floor(Math.random() * ( array3.length));

        let string1 = array1[randomIndex1];
        let string2 = array2[randomIndex2];
        let string3 = array3[randomIndex3];

        let randomQuote = (" + firstQuote[randomNumber1] + "," + secondQuote[randomNumber2] + "," + thirdQuote[randomNumber3] + ");
    }
  }
  console.log(randomQuote);
}
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes

//   function generateQuote() {
//     var randomNumber1 = Math.floor(Math.random() * (firstQuote.length));
//     var randomNumber2 = Math.floor(Math.random() * (secondQuote.length));
//     var randomNumber3= Math.floor(Math.random() * (thirdQuote.length));
//     for (let i = 0; i < firstQuote.length + secondQuote.length + thirdQuote.length; i++)
//       var randomQuote = (" + firstQuote[randomNumber1] + "," + secondQuote[randomNumber2] + "," + thirdQuote[randomNumber3] + ");
//       console.log(randomQuote);
// }