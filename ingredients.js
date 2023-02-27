const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// While loop that prints out each item of ingredients
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// For loop that prints out each item of ingredients
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}