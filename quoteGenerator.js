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

function generateQuote() {
  let randomIndex1 = Math.floor(Math.random() * ( array1.length));
  let randomIndex2 = Math.floor(Math.random() * ( array2.length));
  let randomIndex3 = Math.floor(Math.random() * ( array3.length));
  let string1 = array1[randomIndex1];
  let string2 = array2[randomIndex2];
  let string3 = array3[randomIndex3];
  let randomQuote =   string1 + string2 + string3;
  console.log(randomQuote);
  }

var quoteNumber = prompt("How many times do you want to generate a random quotes, 1 to 5?");
  if (quoteNumber >= 1 && quoteNumber <= 5) {
    for (let i = 0; i <= quoteNumber; i++) {
      generateQuote();
    } 
  } else {
    console.log("Your number should less than or equal to 5 but greater than or equal to 1");
  } 

//4.1 generate random numbers
//4.2 show the generated quotes
