// js2w1 optional homework

const products = getAvailableProducts();


// search product by product name

// this is working

const searchBar = document.querySelector("#ProductNameSearchInput");
searchBar.addEventListener('keyup', function (search) {
  const searchWord = search.target.value.toLowerCase();
  console.log(searchWord);
  const filteredProduct = products.filter(product => {
    document.querySelector("ul").innerHTML = ""; // to clear the parrent element 
    return product.name.toLowerCase().includes(searchWord);
  });

  console.log(filteredProduct);
  displayProducts(filteredProduct); 

})

// search product by product price
// this is working

const searchBarPrice = document.querySelector("#ProductPricesearchInput");
searchBarPrice.addEventListener('keyup', function (searchPrice) {
  const searchWordPrice = + searchPrice.target.value;
  console.log(searchWordPrice);
  // const filteredProduct = products.filter(product => product.name.toLowerCase().indexOf(searchWord > -1));
  const filteredProductPrice = products.filter(product => {
    document.querySelector("ul").innerHTML = ""; // to clear the parrent element 
    return product.price < searchWordPrice;

  });
  console.log(filteredProductPrice);
  displayProducts(filteredProductPrice);

})


// how to write  product sort function ??
 /* 
 logic :
 should sort the rendered list either by product name or price or rating
 
 solution : 
 pass sort() funct in displayProducts() 

 */

 // sort function needs to look, it should sort the list of items ??
function sort() {
  if (document.querySelector('#namesort').checked) {
      let productName = products.map(product => product.name);
      productName.sort();
     
      console.log(productName);
  } else if(document.querySelector('#pricesort').checked){
    let productPrice = products.map(product => product.price);
    productPrice.sort();
    console.log(productPrice);
  }else if(document.querySelector('#ratingsort').checked){
    let productRating = products.map(product => product.rating);
    productRating.sort();
    console.log(productRating);

}
displayProducts(sort);
}
// sort();


console.log(products);

function displayProducts(products) {
  for (let i = 0; i < products.length; i++) {

    let productsUl = document.querySelector("ul");
    const productsH = document.createElement("h4")
    let  productsLi = document.createElement("li");;
   
    productsH.innerHTML = products[i].name;
    productsLi.appendChild(productsH)
    productsLi.innerHTML += " Price: " + products[i].price;
    productsLi.innerHTML += "<br>" + "Rating: " + products[i].rating;
    productsUl.appendChild(productsLi);
  }
}
const renderProduct = displayProducts(products);
// console.log(renderProduct); // why undefined??





