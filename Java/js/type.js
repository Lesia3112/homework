// ввести суму зарплати, і додати 15% до неї, вивести загальну суму зарплати.
const PROCENT = 15;
const manMoney = +prompt("Введіть суму вашого вкладу");

const bankingMoney = () => manMoney + (manMoney / 100) * PROCENT;

console.log(bankingMoney());
