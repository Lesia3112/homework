// Створи обєкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
// обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції 
// для роботи з цим обєктом:
// Висновок на екран з інформацією про автомобіль.
// Додавання водія, який має право керувати автомобілем.
// Заправка автомобіля.
// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
// а також потрібно перевіряти чи має право водій керувати даним автомобілем (імя водія
// функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, 
// для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, 
// про це і запропонувати заправити автомобіль.

const car={
  produce: 'Mercedes',
  maxSpeed:360,
  tank:60,
  consumption:6,
  gasoline:20,
  driver:{
    license:'',
    name:''
  },
  setDriver: function(driverName){
    this.driver.name = driverName
  },
  // !!!чому не знайдено(і шо таке Value)
  setTank: function(tankValue){
    this.tank += tankValue;
    return this.tank;
  },
  
}

console.log(car.setTank(20));
// car.setDriver = ('Lesia');
// console.log(car.setDriver);
// console.log(car);
// console.log(car.tank);
// // car.setTank=(100);


// const refuling=30;
// const refuelingCar=()=>{
// (car.gasoline+refuling);
// }
// console.log(refuelingCar);
const licenseDriver=()=>{
  if (car.driver.license) {
    return (`GO`);
  }else{
    return (`You dont have license`);
  }
  
}
console.log(licenseDriver());

// setInterval(() => {
//   car.tank -= 1;
//   console.log(car);
// }, 1000);
