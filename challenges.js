/////////////////////////////////
///Challenge 1 (Reverse Array)////
/////////////////////////////////

const sentence = ['sense.','make', 'all', 'will', 'This'];

//Takes an array and returns it reversed
const reverseArray = sentence => {
   let reversed = []
   for(let i = 0; i < sentence.length; i++) {
      reversed.unshift(sentence[i]);
   }
   console.log(reversed);
 };

reverseArray(sentence);

/////////////////////////////////
///Challenge 2 (Greet Aliens)////
/////////////////////////////////

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

//Takes alien names and surrenders to them
const greetAliens = aliens => {
  for(let i = 0; i < aliens.length; i++) {
    console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
  }
};

/////////////////////////////////
///Challenge 3 (ConvertToBaby)///
/////////////////////////////////

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

//Adds 'baby' before every animal name
const convertToBaby = animals => {
  for(let i = 0; i < animals.length; i++) {
     animals[i] = 'baby ' + animals[i];
  }
  console.log(animals);
};

/////////////////////////////////
///////Challenge 4 (fixIt)///////
/////////////////////////////////

//Returns
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            x = 1;
            while (x < number) {
               console.log(x);
               x = x * 2;
            }
            results.push(x);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

/////////////////////////////////
///Challenge 5 (Accept/Decline)//
/////////////////////////////////

//Decline Everything in array
const declineEverything = veggies.forEach(veggie => { console.log(`No ${veggie} please. I will have pizza with extra cheese.`)});

//Accept Everything in array
const acceptEverything = veggies.forEach(veggie => { console.log(`Ok, I guess I will eat some ${veggie}.`)});

/////////////////////////////////
///Challenge 6 (Square Numbers)//
/////////////////////////////////

const numbers = [2, 7, 9, 171, 52, 33, 14]

//Squares the numbers in an array and returns the Array
const squareNums = numbers.map(numbers => numbers * numbers )

console.log(squareNums);

/////////////////////////////////
///Challenge 7 (Shout Greetings)/
/////////////////////////////////

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = greetings.map(greeting => greeting.toUpperCase());

console.log(shoutGreetings);

/////////////////////////////////
//////Challenge 8 (sortYears)////
/////////////////////////////////

const years = [2001, 2002, 1990, 1985, 2049, 600, 1000]

const sortYears = years.sort((a, b) => b-a);

console.log(sortYears);

/////////////////////////////////
///Challenge 9 (Cool Stuff)//////
/////////////////////////////////

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

let justCoolStuff = arr1.filter(item => arr2.includes(item));

console.log(justCoolStuff);

/////////////////////////////////
//Challenge 10 (Dinner is Vegan)/
/////////////////////////////////

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

const isTheDinnerVegan = meal => {
  for(let i = 0; i < meal.length; i++) {
    if(meal[i].source !== 'plant') {
      return false;
    }
  }
  return true;
};

console.log(isTheDinnerVegan(meal));

/////////////////////////////////
///Challenge 11 (Dog Factory)////
/////////////////////////////////

const dogFactory = (name, breed, weight) => {
  let dog = {name: name, breed: breed, weight: weight};
  console.log(dog);
}

dogFactory('Julio', 'Lab', 58)
