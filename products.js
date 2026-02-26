let products = [];

fetch("products/products.json")
.then(res => res.json())
.then(data => {

products = data;

if(typeof loadProducts === "function")
loadProducts();

});

