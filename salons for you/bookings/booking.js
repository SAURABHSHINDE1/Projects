// const cart1=require('');
// const {carts} = require('./salon')

// import {BookCart} from './salon'
// import { item } from './salon';


// console.log(item);


var array = [
    {
        cardname: "Hair spa",
        price: "43"
    },
    {
        cardname: "Hair spa and style",
        price: "20"
    },
    {
        cardname: "Hair spa and style",
        price: "20"
    }   
];
function calculateTotalPrice(services) {
    let total = 0;
    services.forEach(function(service) {
        total += parseFloat(service.price); // Convert price to float and add to total
    });
    return total;
}

// Calculate the total price
var totalPrice = calculateTotalPrice(array);

// Display the total price on the webpage
document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);


// import { ForBooking } from './luck.js';

// document.addEventListener("DOMContentLoaded", () => {
//     ForBooking(); // Call the function when the DOM is ready
// });

// console.log(carts);
