function getCart(){
return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
}

function updateCartCount(){
let cart = getCart();
let count = cart.reduce((total,item)=> total+item.quantity,0);
let cartCount = document.getElementById("cart-count");
if(cartCount){
cartCount.innerText = count;
}
}

function addToCart(id){

let cart = getCart();
let existing = cart.find(item => item.id === id);

if(existing){
existing.quantity += 1;
}else{
cart.push({id:id, quantity:1});
}

saveCart(cart);
alert("Product added to cart");
}
