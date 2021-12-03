// js2w1 optional homework

const products = getAvailableProducts();

// search product by product name

const searchBar = document.querySelector("#ProductNameSearchInput");
searchBar.addEventListener('keyup', function (search) {
  const searchWord = search.target.value.toLowerCase();
  console.log(searchWord);
  const filteredProduct = products.filter(product => {
    document.querySelector("#productDisplayUL").innerHTML = ""; // to clear the parrent element 
    return product.name.toLowerCase().includes(searchWord);
  });
  console.log(filteredProduct);
  displayProducts(filteredProduct);
})

// search product by product price

const searchBarPrice = document.querySelector("#ProductPricesearchInput");
searchBarPrice.addEventListener('keyup', function (searchPrice) {
  const searchWordPrice = + searchPrice.target.value;
  console.log(searchWordPrice);
  // const filteredProduct = products.filter(product => product.name.toLowerCase().indexOf(searchWord > -1));
  const filteredProductPrice = products.filter(product => {
    document.querySelector("#productDisplayUL").innerHTML = ""; // to clear the parrent element 
    return product.price < searchWordPrice;
  });
  console.log(filteredProductPrice);
  displayProducts(filteredProductPrice);

})

// sort function 
function sort() {
  document.querySelector("#productDisplayUL").innerHTML = "";
  if (document.querySelector('#namesort').checked) {
    let productName = products.filter(product => product.name);
    productName.sort((firstProduct, secondProduct) => {
      if (firstProduct.name > secondProduct.name) {
        return 1;
      } else if (firstProduct.name < secondProduct.name) {
        return -1;
      } else if (firstProduct.name === secondProduct.name) {
        return 0;
      }
    });
    displayProducts(productName);

  } else if (document.querySelector('#pricesort').checked) {

    let productPrice = products.filter(product => product.price);
    productPrice.sort((firstProduct, secondProduct) => {
      if (firstProduct.price > secondProduct.price) {
        return 1;
      } else if (firstProduct.price < secondProduct.price) {
        return -1;
      } else if (firstProduct.price === secondProduct.price) {
        return 0;
      }
    });
    displayProducts(productPrice);

  } else if (document.querySelector('#ratingsort').checked) {

    let productRating = products.filter(product => product.rating);
    productRating.sort((firstProduct, secondProduct) => {
      if (firstProduct.rating > secondProduct.rating) {
        return 1;
      } else if (firstProduct.rating < secondProduct.rating) {
        return -1;
      } else if (firstProduct.rating === secondProduct.rating) {
        return 0;
      }
    });
    displayProducts(productRating);
  }
}


function displayProducts(products) {
  for (let i = 0; i < products.length; i++) {

    let productsUl = document.querySelector("#productDisplayUL");
    const productsH = document.createElement("h4")
    let productsLi = document.createElement("li");;

    productsH.innerHTML = products[i].name;
    productsLi.appendChild(productsH)
    productsLi.innerHTML += " Price: " + products[i].price;
    productsLi.innerHTML += "<br>" + "Rating: " + products[i].rating;
    productsUl.appendChild(productsLi);
  }
}
const renderProduct = displayProducts(products);
// console.log(renderProduct); // why undefined?? because variable?





