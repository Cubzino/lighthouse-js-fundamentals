const rainingCode1 = true;

if (rainingCode1) {
  console.log("Don't forget your umbrella!");
}


//new code
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


//new code
const temperature = 17;

if (temperature < 2) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 10) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
 
// new code logical operators
const isCitizen = true;
const age = 14;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
 // new code
if (temperature < 20 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// new code
if (!raining) {
  console.log("Leave your umbrella at home!");
}