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
  
const generateQuote1 = () => {
	let randomIndex1 = Math.floor(Math.random() * array1.length);
	let randomIndex2 = Math.floor(Math.random() * array2.length);
	let randomIndex3 = Math.floor(Math.random() * array3.length);
	let string1 = array1[randomIndex1];
	let string2 = array2[randomIndex2];
	let string3 = array3[randomIndex3];
	let quote = `${string1} ${string2} ${string3}`;
  return quote; 
};

let array4 = ['Treat me well,',
  'I am not like that,',
  'Please, forgive me',
  'Why, I do not understand'
];
let array5 = ['natural, and so beautiful',
  'perfect, do it again',
  'blanck, but full',
  'life style, like an ant',
];
let array6 = ['is it ?',
  'I am pretty sure.',
  'mutation.',
  'that is enough.'
];

const generateQuote2 = () => {
	let randomIndex4 = Math.floor(Math.random() * array4.length);
	let randomIndex5 = Math.floor(Math.random() * array5.length);
	let randomIndex6 = Math.floor(Math.random() * array6.length);
	let string4 = array4[randomIndex4];
	let string5 = array5[randomIndex5];
	let string6 = array6[randomIndex6];
	let quote1 = `${string4} ${string5} ${string6}`;
  return quote1;
};

const numberOfQuotes = prompt('How many random quotes do you want to generate? (1 to 5)');
const typeOfQuotes = prompt('What kind of quotes do you want to generate? (1 or 2)');
  if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
      if (typeOfQuotes === 1) {
        for (let i = 0; i < numberOfQuotes; i++) {
          let quote = generateQuote1();
          console.log(quote);
        }
      } else {
        for (let i = 0; i < numberOfQuotes; i++) {
          let quote1 = generateQuote2();
          console.log(quote1);
      }
    }
  } else {
    console.error("Your number should be less than or equal to 5 but greater than or equal to 1");
  }
  const ifYouWantToStop = prompt('Do you want to continue it or no? (Yes or no)');




















