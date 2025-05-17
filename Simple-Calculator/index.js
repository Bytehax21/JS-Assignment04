const display = document.getElementById("display");
// console.log(display, "Display");

const addToDisplay = (input) => {
  display.value += input;
};

const deleteValue = () => {
  display.value = display.value.slice(0, -1);
};
const clearValue = () => {
  display.value = "";
};
const calculate = () => {
  display.value = eval(display.value);
  if (display.value == "Infinity") {
    display.value = "Error Division by 0";
  } else if (display.value == display.input + "undefined") {
    display.value = "Enter a number";
  } else if (display.value == "NaN") {
    display.value = "Enter a valid expression";
  } else if (display.value == "undefined") {
    display.value = "Enter a number";
  }
};