const display = document.getElementById("display");
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
  let input = display.value;
  if (input === "") {
    display.value = "Enter a number";
    return;
  }

  let lastChar = input.slice(-1);
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    display.value = "Incomplete Expression";
    return;
  }

  if (input.includes("/0")) {
    display.value = "Error: Division by 0";
    return;
  }

  let result = eval(input);

  if (isNaN(result)) {
    display.value = "Error: Invalid Expression";
  } else {
    display.value = result;
  }
};
