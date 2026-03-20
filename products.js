let products = [];

function loadProductsFromJSON(callback){

fetch("products/")
.then(res => res.json())
.then(data => {

products = data;

if(callback) callback();

});
}
