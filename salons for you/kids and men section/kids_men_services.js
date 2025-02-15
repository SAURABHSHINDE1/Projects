const imagesWithNames = [
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+1",
            "https://via.placeholder.com/200x150?text=Image+1.1",
            "https://via.placeholder.com/200x150?text=Image+1.2"
        ],
        names: ["Name 1", "Name 1.1", "Name 1.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+2",
            "https://via.placeholder.com/200x150?text=Image+2.1",
            "https://via.placeholder.com/200x150?text=Image+2.2"
        ],
        names: ["Name 2", "Name 2.1", "Name 2.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+3",
            "https://via.placeholder.com/200x150?text=Image+3.1",
            "https://via.placeholder.com/200x150?text=Image+3.2"
        ],
        names: ["Name 3", "Name 3.1", "Name 3.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+1",
            "https://via.placeholder.com/200x150?text=Image+1.1",
            "https://via.placeholder.com/200x150?text=Image+1.2"
        ],
        names: ["Name 4", "Name 4.1", "Name 4.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+2",
            "https://via.placeholder.com/200x150?text=Image+2.1",
            "https://via.placeholder.com/200x150?text=Image+2.2"
        ],
        names: ["Name 5", "Name 5.1", "Name 5.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+3",
            "https://via.placeholder.com/200x150?text=Image+3.1",
            "https://via.placeholder.com/200x150?text=Image+3.2"
        ],
        names: ["Name 6", "Name 6.1", "Name 6.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+1",
            "https://via.placeholder.com/200x150?text=Image+1.1",
            "https://via.placeholder.com/200x150?text=Image+1.2"
        ],
        names: ["Name 1", "Name 1.1", "Name 1.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+2",
            "https://via.placeholder.com/200x150?text=Image+2.1",
            "https://via.placeholder.com/200x150?text=Image+2.2"
        ],
        names: ["Name 2", "Name 2.1", "Name 2.2"]
    },
    {
        images: [
            "https://via.placeholder.com/200x150?text=Image+3",
            "https://via.placeholder.com/200x150?text=Image+3.1",
            "https://via.placeholder.com/200x150?text=Image+3.2"
        ],
        names: ["Name 3", "Name 3.1", "Name 3.2"]
    }
];

const currentIndexes = [0,0,0,0,0,0,0,0,0];
function updateImagesAndNames() {
    const imageContainers = document.querySelectorAll(".imageContainer");

    
    imageContainers.forEach((container, index) => {
        const img = container.querySelector(".dynamicImage");
        const caption = container.querySelector(".imgstylename");

        
        img.src = imagesWithNames[index].images[currentIndexes[index]];
        caption.textContent = imagesWithNames[index].names[currentIndexes[index]];

    
        currentIndexes[index] = (currentIndexes[index] + 1) % imagesWithNames[index].images.length;
    });
}
setInterval(updateImagesAndNames, 2000);




var array = [
    {
        cardname: "Hair spa and style",
        price: "Rs899",
        duration: "60 min",
        discription: "description",
        Servicesimg: "c.jpeg"
    },
    {
        cardname: "Head massage",
        price: "Rs299",
        duration: "30 min",
        discription: "description",
        Servicesimg: "img"
    },
    {
        cardname: "Hair cut",
        price: "Rs199",
        duration: "30 min",
        discription: "description",
        Servicesimg: "img"
    },
    {
        cardname: "Hair colors",
        price: "Rs899",
        duration: "50 min",
        discription: "description",
        Servicesimg: "img"
    },
    {
        cardname: "Hair treatment",
        price: "Rs999",
        duration: "60min",
        discription: "description",
        Servicesimg: "img"
    },
    {
        cardname: "clean hup",
        price: "Rs399",
        duration: "20 min",
        discription: "description",
        Servicesimg: "img"
    },
    {
        cardname: "facial",
        price: "Rs499",
        duration: "25 min",
        discription: "description",
        Servicesimg: "img"
    },
    
];

const productitem =[

];


let result = document.getElementById("card-container");
let cart = document.getElementById('id');
console.log("saurabh");

 array.forEach(arr => {

  
    const service_card = document.createElement("div");
    service_card.className ="service-card"
    result.appendChild(service_card);

    

    var left_container = document.createElement("div");
    left_container.className ="left-container";
    service_card.appendChild(left_container);

    var h3 = document.createElement("h3");
    h3.textContent =arr.cardname;
    left_container.appendChild(h3);

    var p = document.createElement("p");
    p.innerHTML = arr.price ;
    left_container.appendChild(p);

    var h4 = document.createElement("h4");
    h4.textContent =arr.duration ;
    left_container.appendChild(h4);

    var h5 = document.createElement("h5");
    h5.textContent =arr.discription ;
    left_container.appendChild(h5);

    var right_container = document.createElement("div");
    right_container.className ="right-container";
    service_card.appendChild(right_container);

    var img = document.createElement("img");
    img.src = arr.Servicesimg;
    right_container.appendChild(img);

    
    var button = document.createElement("button");
    button.textContent = "Book Now";
    button.id="book_button";
    service_card.appendChild(button);
    button.addEventListener("click", () => book(button)); 
     
});

function book(button) {
    const card = button.parentElement; // Get the parent element of the button
    const cardClone = card.cloneNode(true); // Clone the card

    // Remove the button from the cloned card
    const transferButton = cardClone.querySelector('button'); // Get the button in the cloned card
    if (transferButton) {
        transferButton.remove();
    }

    cardClone.classList.add('small-card'); // Add a class to the cloned card

    document.querySelector('.items').appendChild(cardClone); // Append the cloned card to the items container

    // Hide the items
    var items1 = document.getElementById("items1");
    items1.style.display = "none";

    var items2 = document.getElementById("items2");
    items2.style.display = "none";
}



    const itemsDiv = document.getElementById('items');
    const itemsText = document.getElementById('items2');
    const homeDiv = document.getElementById('home');
    // Hide "No items in your cart" message if there are items
    if (itemsText) {
    //     // itemsText.style.display = 'none';
    }

    // Create a new item and append it
    const newItem = document.createElement('div');
    newItem.className = 'item';
    // newItem.textContent = 'Not Book any item'    // Replace with item details as needed
    itemsDiv.appendChild(newItem);

    // Adjust the size of the container dynamically
    itemsDiv.style.height = 'auto'; // Ensures it expands naturally
    homeDiv.style.height = 'auto';  


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


document.getElementById("proceed-button").addEventListener("click", () =>{
    const bookig_div = document.querySelector(".booking");
    bookig_div.style.display = "block";

    document.querySelector(".close-div").addEventListener("click", () =>{
        bookig_div.style.display = "none";
    })
})