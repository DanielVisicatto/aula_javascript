var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
/*aqui eu tentei fazer o elemento mudar de cor, verde se for maior que zero e vermelho se for menor que zero, mas não consegui ainda.
function green() {
  currentNumber.style.color = green;
}

function red() {
  currentNumber.style.color = red;
}
currentNumber.addEventListener(currentNumber.valueOf < 0, red);
currentNumber.addEventListener(currentNumber.valueOf > 0, green);*/
