// js2w1 optional homework

const products = getAvailableProducts();
const productsUl = document.querySelector("ul");
const productsLi = document.createElement("li");
const productsH = document.createElement("h4")
console.log(products);

function displayProducts(products) {
    for (let i = 0; i < products.length; i++) {
        productsH.innerHTML = products[i].name;
        productsLi.appendChild(productsH)
        productsLi.innerHTML += " Price: " + products[i].price;
        productsLi.innerHTML += "<br>" + "Rating: " + products[i].rating;
        productsUl.appendChild(productsLi);
    }
}
displayProducts(products);

