
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    async convertToCurrency(currency) {
        try {
            const fetchApi = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=59cc9db7a6c3570a340fc7bb48635976');
            const jsonResponse = await fetchApi.json();
            const data = jsonResponse.rates
            const currencyInArray = Object.entries(data);

              
    // for (let index = 0; index < Object.keys(data).length; index++) {
    //     const element = Object.keys(data)[index];
    //     const options = document.createElement('option')
    //     options.innerHTML = element
    //     lcd.convertToCurrency(element);
    //     priceConvert.appendChild(options)
    //     console.log(Object.keys(data));
    // }
console.log(currencyInArray);
console.log(Object.keys(data));
console.log(Object.keys(data));
const priceConvertSelect = document.querySelector('#priceConvertSelect')
for (const item of Object.keys(data)) {
    console.log(item);
const priceConvertSelectOption = document.createElement('option')
priceConvertSelectOption.innerHTML = item
priceConvertSelect.appendChild(priceConvertSelectOption)
}

priceConvertSelect.addEventListener('select',()=>{

    getTotalPriceConvert.innerHTML = `Convverted Price : ${(this.price * value[1]).toFixed(2)} ${currency}`
    

})

            
            currencyInArray.filter((value) => {
                // const getTotalPriceConvert = document.querySelector('#getTotalPriceConvert')
                if (value.includes(currency)) {

                    getTotalPriceConvert.innerHTML = `Convverted Price : ${(this.price * value[1]).toFixed(2)} ${currency}`
                    console.log(`Price : ${(this.price * value[1]).toFixed(2)} ${currency}`);
                    return this.price * value[1];
                } else if (currency === '') {
                    getTotalPriceConvert = `Price : ${(this.price.toFixed(2))} Euro`
                    console.log(`Price : ${(this.price.toFixed(2))} Euro`);
                }

            })
        } catch (error) {
            return error;
        }
    }
}


class ShoppingCart {

    constructor() {
        this.products = [];
        this.searchedProducts = [];
    }


    addDefaultProduct(product) {
        this.products.push(product)
        const productCollection = document.querySelector('#productCollection');
        const productUL = document.createElement('ul')
        const prductli = document.createElement('li')
        this.products.map(product => {

            console.log(product)
            prductli.innerHTML = `${product.name}  =>  Price: ${product.price} €`
            productUL.appendChild(prductli)
            productCollection.appendChild(productUL)

        })
    }

    addProduct(product) {

        this.products.push(product)


    }

    removeProduct(product) {

        const nameP = Object.values(this.products).map(jj => jj.name)
        if (product === '') {
            const msg = document.querySelector('#msg');
            msg.innerHTML = `provide product name to remove`

        } else if (nameP.includes(product)) {
            console.log(nameP);
            const index = nameP.indexOf(product);
            console.log(index);
            if (index > -1) {
                const removedItemFromArray = this.products.splice(index, 1);

                console.log(removedItemFromArray);
                const msg = document.querySelector('#msg');
                msg.innerHTML = `${removedItemFromArray[0].name} deleted form list`
                console.log(this.products);
            }
        } else {
            const msg = document.querySelector('#msg');
            msg.innerHTML = `${product} not available to delete`
        }

    }

    searchProduct(productName) {
        // const search = this.products.map((product) => product.name)
        // if (search.includes(productName)) {
        //     this.searchedProducts.push(productName)
        //     console.log(this.searchedProducts);
        //     return productName + " found";
        // } else {
        //     return productName + " Not found"
        // }

        const searchItems = this.products
            .map((product) => product.name)
            .filter((product) => product.includes(productName));
        this.searchedProducts.push(productName)
        const searchMsg = document.querySelector('#searchMsg')
        searchMsg.innerHTML = searchItems

        // console.log(this.searchedProducts);
        console.log(searchItems);

    }

    getTotal() {
        const total = this.products.map((product) => product.price).reduce(((total, currentPrice) => total + currentPrice), 0)
        const getTotal = document.querySelector('#getTotal')
        getTotal.innerHTML = ` Total Price: ${total} €`;
  console.log(typeof total);
        return total;
    }

    renderProducts() {
        console.log(this.products);
        const productCollection = document.querySelector('#productCollection');
        const ProductName = document.querySelector('#ProductName');
        const ProductPrice = document.querySelector('#ProductPrice');
        const productUL = document.createElement('ul')
        const prductli = document.createElement('li')

        if (ProductName.value === '') {
            const msg = document.querySelector('#addMsg');
            msg.innerHTML = `provide product name to add`

        } else {

            prductli.innerHTML = `${ProductName.value} => Price: ${ProductPrice.value}`
            productUL.appendChild(prductli);
            productCollection.appendChild(productUL)
            const msg = document.querySelector('#addMsg');
            msg.innerHTML = `${ProductName.value} added to list`

            console.log(ProductName.value + ProductPrice.value);
        }


    }

    getUser(user) {
        fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                console.log(data.email)
                const getUser = document.querySelector('#getUser')
                getUser.innerHTML = `  Name: ${data.name} <br/>  Email: ${data.email} <br/>  Phone: ${data.phone}<br/>  City: ${data.address.city}`
            });
    }
}

const shoppingCart = new ShoppingCart();

// creating and adding some default products to shopping cart
const led = new Product("LED", 3500)
const lcd = new Product("LCD", 7500)
const qled = new Product("QLED", 7500)
const iphone = new Product("iphone", 6500)
const ipad = new Product("ipad", 4000)
const watch = new Product("watch", 3000)
const car = new Product("car", 80000)

shoppingCart.addDefaultProduct(led);
shoppingCart.addDefaultProduct(lcd);
shoppingCart.addDefaultProduct(qled);
shoppingCart.addDefaultProduct(iphone);
shoppingCart.addDefaultProduct(ipad);
shoppingCart.addDefaultProduct(watch);
shoppingCart.addDefaultProduct(car);
console.log(shoppingCart);


const addProductButton = document.querySelector('#addProductButton');
addProductButton.addEventListener('click', () => {
    const product = new Product(ProductName.value, Number(ProductPrice.value));// create product
    shoppingCart.addProduct(product);// add products
    shoppingCart.getTotal()
    shoppingCart.renderProducts()
    console.log(shoppingCart);
})

//remove products
// shoppingCart.removeProduct(led)

const deleteProductButton = document.querySelector('#deleteProductButton');
deleteProductButton.addEventListener('click', () => {
    //remove products 
    const deleteProduct = document.querySelector('#deleteProduct');
    const producttoRemove = deleteProduct.value;
    shoppingCart.removeProduct(producttoRemove)
})

// search default products
const searchProduct = document.querySelector('#searchProduct');
searchProduct.addEventListener('keypress', () => {
    const searchText = searchProduct.value;
    const searchResult = shoppingCart.searchProduct(searchText);
    console.log(searchResult);
    // const searchResult2 = shoppingCart.searchProduct("LCD");
    // console.log(searchResult2);
})

//get total of default products
const total = shoppingCart.getTotal();
console.log(total);

// get user
shoppingCart.getUser((() => Math.floor(Math.random() * 10) + 1)())

// currency convert
// led.convertToCurrency('');
// lcd.convertToCurrency('DKK');
// led.convertToCurrency('NPR');//??

const priceConvert = document.querySelector('#priceConvertSelect')

const car1 = new Product("car", 80000)
shoppingCart.addDefaultProduct(car1);
lcd.convertToCurrency('DKK');

 



         








