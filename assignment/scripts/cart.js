console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Create a global variable named basket and set it to an empty array.
let basket = [];
//Create a function called addItem. It should:
//take an input parameter for a string item
//add the new item to the global array basket
//return true indicating the item was added
function addItem(item) {
    basket.push(item);
    return true;
}
addItem('mash potatoes')
addItem('chicken')
addItem('pumpkin pie')
console.log(basket);
console.log('Expect true:', addItem('mash potatoes'))

//Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line
 function listItems(item){
    for (let item of basket) {
        console.log(item);
    }     
 }
 listItems();
 //Create a function called empty. It should:
 //reset the basket to an empty array
 function empty() {
    basket = [] 
}
empty();
console.log('Expect []:', basket);

//Stretch Goals//
//1. Add a global const named maxItems and set it to 5.
const maxItems = 5;
function isFull(array) {
    if (array.length < 5) {
        return false;
    } else {
        return true;
    }
}

//2. Create a function called isFull(). It should:
// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)

console.log('Expect true:', isFull())
 isFull();


//3. Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false

// Using Array built-in functions!

//4. Create a function called removeItem. It should:
//Take an input parameter for a string item
// Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket.
// Return the item removed or null if the item was not found






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
