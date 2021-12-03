/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
const listings = [];
function generateListings(numberOfListings) {
    // const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];

    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for (let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];

            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

console.log('applying directly to the function :');
const cheaplisting = generateListings(37).filter(listing => listing.price > 9000)
console.log(cheaplisting);

console.log(listings);

// for each  question 1

// normal

const listingSize = listings.forEach(function (element) { console.log(element.size) });
console.log('listing size');
// arrow function
const listingSizeArrow = listings.forEach(element => console.log(element.size));
console.log('listingSizeArrow');
// console.log('listing size '+listingSize);

// map question 2
// normal  
const listingPrice = listings.map(function (element) { return element.price });
console.log('listing price normal: ' + listingPrice);
// arrow function
const listingPriceArrow = listings.map(element => element.price);
console.log('listing Price arrow: ' + listingPriceArrow);

// filter question 3 

//  cheap listing 
const cheapListing = listings.filter(function (listing) {
    return (listing.price < 3000)
});
console.log(cheapListing);
console.log('cheap listing');

// cheap listing  arrow fucntion
const cheapListingArrow = listings.filter(listing => listing.price < 3000);
console.log(cheapListingArrow);
console.log('cheap listing arrow');


// expensive listing  
const expensiveListing = listings.filter(function (listing) { return listing.price > 8000 });
console.log(expensiveListing);
console.log('expensive listing');
// expensive listing arrow funciton
const expensiveListingArrow = listings.filter(listing => listing.price > 8000);
console.log(expensiveListing);
console.log('expensivee listing arrow');

// parking Listing
const parkingListing = listings.filter( listing =>  listing.facilities.includes('Parkering'));
console.log(parkingListing);
console.log('parking listing');


// filter and map function chaining

// const parkingListing1 = listings.filter(listing => listing.facilities.includes('Parkering')).map(listing => {
//     const imgage = document.createElement('img')
//     imgage.src = listing.img
//     document.body.appendChild(imgage)
//     return imgage;
// });

// console.log(parkingListing1); // this will return array of image cuause map is used after filter 

// filter and foreah function chaining

const parkingListing2 = listings.filter(listing => listing.facilities.includes('Parkering')).forEach(listing => {
    let sect = document.querySelector('#img-section');
    const imgage = document.createElement('img')
    imgage.src = listing.img
    sect.appendChild(imgage)
    //console.log(imgage);
});

console.log(parkingListing2);
// this will print undefined because foreach is called and it will set to default eventhough filter is used in the beginning


// Listing Project:
//Filter listings/*  */

console.log('filter listings exercise below');

const filters = {
//   type: 'Apartment',
//   facilities: 'Parkering',
  minPrice: 2000,
  maxPrice: 40000,
//   hasGarden: false,
  minSize: 200,
  maxSize: 500,
}

const filterListings = (listings, filters) => {
  return listings.filter((listing) => {
    const typeFilter = filters.type ? filters.type === listing.type : true
    const facilitiesFilter = filters.facilities
      ? listing.facilities.includes(filters.facilities)
      : true

    const minPriceFilter = filters.minPrice
      ? filters.minPrice < listing.price
      : true

    const maxPriceFilter = filters.maxPrice
      ? filters.maxPrice > listing.price
      : true

    const hasGardenFilter = filters.hasGarden ? listings.hasGarden : true

    const minSizeFilter = filters.minSize ? filters.minSize < listing.size : true

    const MaxSizeFiter = filters.maxSize ? filters.maxSize > listing.size : true

    return (
      typeFilter &&
      facilitiesFilter &&
      minPriceFilter &&
      maxPriceFilter &&
      hasGardenFilter && minSizeFilter && MaxSizeFiter
    )
  })
}

const filteredListings = filterListings(listings, filters)

console.log(filteredListings);

// renderListing exercise
console.log('render listing  exercise below');

function renderListings(listings){
    
  
const renderSection = document.querySelector('#render-listing');
const ol = document.createElement('ol');


const renderListType = listings.filter(listing => listing.price<2000).map(listing =>  
{
const  rendertype = listing.type + ' '+ listing.price;


const renderList = document.createElement('li');
renderList.innerHTML = rendertype;
ol.appendChild(renderList);
renderSection.appendChild(ol);

});

}

const renderListingType = renderListings(listings);
console.log(renderListingType); // why it consoles undefined ??? but it displays list in html 