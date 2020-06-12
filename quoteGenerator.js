// const array1 = [
//                 ["Vero loathes bein alone,",
//                 "It is easy,",
//                 "Late is better than never,",
//                 "Be mild-tempered,"
//                 ]
//                 ['Treat me well,',
//                 'I am not like that,',
//                 'Please, forgive me',
//                 'Why, I do not understand'
//                 ]
//                 ];
// const array2 = [["I love this car,",
//                 "the eggs are enough,",
//                 "you can say that again,",
//                 "he is ignored by his friends,",
//                 ],
//                 ['natural, and so beautiful',
//                 'perfect, do it again',
//                 'blanck, but full',
//                 'life style, like an ant',
//                 ]];
// const array3 = [["generate a new account.",
//               "jao got a new book.",
//               "the cost of new phone is prohibitive.",
//               "your method is updated."
//               ],  
//                ['is it ?',
//               'I am pretty sure.',
//               'mutation.',
//               'that is enough.'
//               ]];

// const generateQuote = () => {
// 	let randomIndex1 = Math.floor(Math.random() * array1.length);
// 	let randomIndex2 = Math.floor(Math.random() * array2.length);
//   let randomIndex3 = Math.floor(Math.random() * array3.length);
  
// 	let string1 = array1[randomIndex1];
// 	let string2 = array2[randomIndex2];
//   let string3 = array3[randomIndex3];
  
// 	const generatedQuote = `"${string1} ${string2} ${string3}"`;
//   return generatedQuote; 
// };

// // const generateQuote2 = () => {
// // 	let randomIndex4 = Math.floor(Math.random() * array4.length);
// // 	let randomIndex5 = Math.floor(Math.random() * array5.length);
// // 	let randomIndex6 = Math.floor(Math.random() * array6.length);
// // 	let string4 = array4[randomIndex4];
// // 	let string5 = array5[randomIndex5];
// // 	let string6 = array6[randomIndex6];
// // 	let quote1 = `${string4} ${string5} ${string6}`;
// //   return quote1;
// // };

// let numberOfQuotes = prompt('How many random quotes do you want to generate? (1 to 5)');

// // while (let i = 0; i < numberOfQuotes; i++) {

// // }
// const typeOfQuotes = prompt('What kind of quotes do you want to generate? (1 or 2)');
//   if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
//       if (typeOfQuotes === 1) {
//         for (let i = 0; i < numberOfQuotes; i++) {
//           let quote = generateQuote1();
//           console.log(quote);
//         }
//       } else {
//         for (let i = 0; i < numberOfQuotes; i++) {
//           let quote1 = generateQuote2();
//           console.log(quote1);
//       }
//     }
//   } else {
//     console.error("Your number should be less than or equal to 5 but greater than or equal to 1");
//   }


  const happyQuotes = [
    [
      'Amateurs look for inspiration;',
      'We have to be honest about what we want',
      'All my life, I kept waiting for things to get better',
      'Accidents happen',
      'Either be a good parent',
    ],
    [
      'the rest of us just',
      'and take risks rather than lie to ourselves',
      'But a funny thing happened while I was waiting for the world to change',
      'Our bones shatter, our skin splits, our hearts break',
      'to your career or ',
    ],
    [
      'get up and go to work.',
      'and make excuses to stay in our comfort zone.',
      "Because I didn't change it.",
      'We burn, we drown, we stay alive.',
      'just give your dream up for adoption.',
      'get up and go to work.',
      'and make excuses to stay in our comfort zone.',
      "Because I didn't change it.",
      'We burn, we drown, we stay alive.',
      'just give your dream up for adoption.',
      'get up and go to work.',
      'and make excuses to stay in our comfort zone.',
      "Because I didn't change it.",
      'We burn, we drown, we stay alive.',
      'just give your dream up for adoption.',
    ],
  ];
  const sadQuotes = [
    [
      'It made me realize that Beatrice had changed;',
      "Don't mistake me for a friend",
      'With the Smithies, it was different',
      'One of the hallmarks of social wellness',
      'Only by binding together',
    ],
    [
      'that she did not spoke her mind',
      'because I sometimes',
      'was sometimes no telling where one of them',
      'is being inclusive, not exclusive,',
      'as a single force',
    ],
    [
      'it was not the real deal.',
      'choose to be friendly.',
      'began and the others left off.',
      'with our friendship.',
      'will we remain strong and unconquerable.',
    ],
  ];
  const generateQuote = (quotesArray) => {
    let randomIndex1 = Math.floor(Math.random() * quotesArray[0].length);
    let randomIndex2 = Math.floor(Math.random() * quotesArray[1].length);
    let randomIndex3 = Math.floor(Math.random() * quotesArray[2].length);
    let string1 = quotesArray[0][randomIndex1];
    let string2 = quotesArray[1][randomIndex2];
    let string3 = quotesArray[2][randomIndex3];
    const generatedQuote = `Generated quote : "${string1} ${string2} ${string3}"`;
    return generatedQuote;
  };
  let continueProgram = 'yes';
  while (continueProgram === 'yes') {
    let numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
    while (numberOfQuotes < 0 || numberOfQuotes > 5) {
      numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
    }
    let typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
    while (typeOfQuote !== 'happy' && typeOfQuote !== 'sad') {
      typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
    }
    let alertText = '';
    if (typeOfQuote === 'happy') {
      for (let i = 0; i < numberOfQuotes; i++) {
        alertText += '\n' + generateQuote(happyQuotes) + '\n';
      }
    } else {
      for (let i = 0; i < numberOfQuotes; i++) {
        alertText += '\n' + generateQuote(sadQuotes) + '\n';
      }
    }
    alert(alertText);
    continueProgram = prompt('Do you want to run the program again? (yes, no)');
  }
  alert('Thank you for using my quote generator ❤️');
