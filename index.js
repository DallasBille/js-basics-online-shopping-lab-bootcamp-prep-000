var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var Object={itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100)+1};
  cart.push(Object);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  for(let)
if (cart.length===0){
 return "Your shopping cart is empty."}
}

   
   

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
