var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item
 var itemPrice = Math.floor(Math.random() * Math.floor(100))
 cart.push({itemName: itemName, itemPrice: itemPrice})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  else
    for(let i = 0; i < cart.length; i++){
      var items = []
      for(var item in cart){
        items.push(`${cart[item].itemName} at $${cart[item].itemPrice}`)}
      }
      if(cart.length == 1)
       return `In your cart, you have ${items}.` 
      if(cart.length > 1)
       
    
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
