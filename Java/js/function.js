// Визначити кількість параметрів
function lesia (a, b, c){};
console.log(lesia.length);

// --------------------
// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

const my= createNumber(2,3);
function createNumber(x,y){
  if (x<y){
    return -1;
  }
  if (x>y){
    return 1;
  }
  if (x=y){
    return 0;
  }
};
console.log(createNumber(3,3));

// ---------------------
// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function myNumer2(a,b,c){
  console.log('1'+'4'+'9');
  return 33
}
let myNumer=myNumer2;
console.log(myNumer());