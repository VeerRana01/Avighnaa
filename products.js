let products = [];

function loadProductsFromJSON(callback){

fetch("products/products.json")
.then(res => res.json())
.then(data => {

products = data;

if(callback) callback();

});
}
