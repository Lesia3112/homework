const calculateTotalPrice = (price,count) => price * count;
const sum = calculateTotalPrice;

const product1 = {
  name: "apple",
  price: 10,
  pieces: 2,
  suma: sum(10, 2),
};
const product2 = {
  name: "melon",
  price: 100,
  pieces: 1,
  suma: sum(),
};
const product3 = {
  name: "lemon",
  price: 20,
  pieces: 1,
  suma: sum(),
};
const shoppingList = [product1,product2,product3];
  
    // ]

console.log(shoppingList);