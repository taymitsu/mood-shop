function replace_text() {


  // TODO: Complete this function to change the color of the h1 tag:
  const h1 = document.querySelector('h1');
  h1.color = 'blue'
  // STEP 1: Get the h1 element as a variable using document.querySelector.
  const h1 = document.querySelector('h1');

  // STEP 2: Get the input element with the ID of "new_text" using document.querySelector.
const userInput = document.querySelector('new_text');

  // STEP 3: Get the value of the input element using dot notation.
  //.value
  const inputValue = userInput.value;
  // At this point, it may be useful to print the color value to the console to make sure your code's working so far.
console.log(inputValue);
  // STEP 4: Change the innerHTML property of the h1 element to match the value from step 3 using dot notation.
  h1Header.innerHTML.user_input = inputValue;
}