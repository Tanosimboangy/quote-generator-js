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

const generateQuote = () => {
	let randomIndex1 = Math.floor(Math.random() * array1.length);
	let randomIndex2 = Math.floor(Math.random() * array2.length);
	let randomIndex3 = Math.floor(Math.random() * array3.length);
	let string1 = array1[randomIndex1];
	let string2 = array2[randomIndex2];
	let string3 = array3[randomIndex3];
	let quote = `${string1} ${string2} ${string3}`;
	return quote;
};


//1. use prompt to ask the user how many times we want to generate a random quote
const numberOfQuotes = prompt('How many random quotes do you want to generate? (1 to 5)');
//2. check if the prompt give us something between 1 and 5
if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
	//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
	for (let i = 0; i < numberOfQuotes; i++) {
		//4. refactor our code into a function, and put the function call inside the loop
		//4.1 generate random numbers
		//4.2 show the generated quotes
		let quote = generateQuote();
		console.log(quote);
	}
} else {
	console.error("Your number should less than or equal to 5 but greater than or equal to 1");
}
