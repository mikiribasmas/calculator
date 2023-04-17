const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('.func-button button');
const equals = document.getElementById('equals-button');
const reset = document.getElementById('ac');
const ce = document.getElementById('CE');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (screen.value == 0) {
      screen.value = button.dataset.value;
    }
    else if (button.dataset.value != '=' /*&& button.dataset.value === '0'*/) {
      screen.value += button.dataset.value;
    }
  });
});

reset.addEventListener('click', () => {
  screen.value = 0;}
);

ce.addEventListener('click', () => { 
  screen.value = screen.value.slice(0, -1);
});

equals.addEventListener('click', () => {

  const expression = screen.value;

  try {
    screen.value = eval(expression);

  } catch (error) {
    screen.value = "Error: expresión no válida";
  }
});



