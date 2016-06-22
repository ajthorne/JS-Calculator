document.querySelector('button').onclick = calculate;

function calculate() {
  var firstNumber = document.querySelector('.number-1').value;
  var secondNumber = document.querySelector('.number-2').value;
  var sum = Number(firstNumber) + Number(secondNumber);
  console.log(sum);
}
