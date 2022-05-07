// import{myNumer2} from'./js/modal.js';

// myNumer2();
// */ДОМАШНІ ЗАВДАННЯ-ОСНОВИ JS
// змінні Let, зведення двох полів у одне
// alert('!!!')
// let firstName='Lesia';
// let lastName='Derevinska';
// console.log(firstName +' '+ lastName);

// // Hello,Lesia
// let name=prompt('Ваше ім\'я?');
// alert(`Hello, ${name}!`);

// // приколи з датою
// const dateNow='2022';
// let birthdayYear=prompt('Рік вашого народження?');
// alert(dateNow-birthdayYear);

// // квадрат і коло
// let side='4';
// let square=prompt('Яка довжина сторони квадрата?');
// alert(square * side);

// let circle=prompt('Який радіус кола?');
// let pl=(2*circle*Math.PI);

// console.log(`Площа кола становить:${pl}`);

// alert(`Площа кола становить:${pl}`);

// // *ФУНКЦІЇ-ДОМАШКА
// // *ОБ'ЄКТИ-домашка
// const car={
//   produce: 'Mercedes',
//   maxSpeed:360,
//   tank:60,
//   consumption:6,
// };
// console.log(car);
// car.driver='Lesia';
// console.log(car.tank);
// --------------------------------------------------------------------------
// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

// class Circle {

//   constructor(radius) {
//     this.radius = radius || 10;
//   }
//   get rad() {
//     return `Ось Ваш радіус: ${this.radius}`;
//   }
//   set rad(value){
//     this.radius = value;
//   }

// }

// const circle1 = new Circle(prompt());

// -----------------------------------------

// function lesia (a, b, c){};
// console.log(lesia.length);

// --------------------
// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

// const my= createNumber(2,3);
// function createNumber(x,y){
//   if (x<y){
//     return -1;
//   }
//   if (x>y){
//     return 1;
//   }
//   if (x=y){
//     return 0;
//   }
// };
// console.log(createNumber(3,3));

// ---------------------
// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

// !!! чому indefined
// function myNumer2(a,b,c){
//   console.log('1'+'4'+'9');
//   return 33
// }
// let myNumer=myNumer2;
// console.log(myNumer());

// --------------------------------------------------
// !!!
//  Задача про список покупок.

// const calculateTotalPrice = (price,count) => price * count;

// const submitedList = [

//   let list = {
//       product: {
//       name: "apple",
//       price: 10,
//       pieces: 2,
//       suma: sum(10, 2),
//     },
//       product2: {
//       name: "melon",
//       price: 100,
//       pieces: 1,
//       suma: sum(),
//     },
//   }
// //   const product2={
// //   name: "melon",
// //   price: 100,
// //   pieces: 1,
// //   suma: sum(),
// // };
// ];

const manMoney = prompt("Введіть суму вашого вкладу");
const manMoneyValue = manMoney;
console.log(manMoneyValue);
const procent = 15;
const bankingMoney = () => {
  console.log(`${manMoneyValue} * ${procent}`);
};
console.log(bankingMoney);
const finallyMoney = bankingMoney;
