
// creating a hidden menu item;
function toggleDiv() {
    const secondDiv = document.getElementById('secondDiv');
    if (secondDiv.style.display === '' || secondDiv.style.display === 'none')
         {
        secondDiv.style.display = 'flex'; 
    } else {
        secondDiv.style.display = 'none'; 
    }
}




// services divs 
const services =[
    {
        service_img:"./assaets/women gromming.png",
        service_title:"women",
        link:"./women section service card/women_ section_services.html"
    },

    {
        service_img:"./assaets/Massage.png",
        service_title:"massage ",
         link:"./kids and men section/kid_men_services.html"
    },

    {
        service_img:"./assaets/men grooming.png",
        service_title:"men",
         link:"./women section service card/women_ section_services.html"
    },

    {
        service_img:"./assaets/Haircut.png",
        service_title:"kids",
         link:"./kids and men section/kid_men_services.html"
    },

    {
        service_img:"./assaets/Manicure-512.webp",
        service_title:"Nail",
         link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"./assaets/massage 100.png",
        service_title:"facial",
         link:"./women section service card/women_ section_services.html"
    }
 
]

let servicesDiv =document.getElementById('top_service');

services.forEach( service =>
{
    var service_type = document.createElement('div');
    service_type.className = "service-type";
    servicesDiv.appendChild(service_type);

   let service_img = document.createElement("div");
    service_img.className = "service_img";
    service_type.appendChild(service_img);

    let img = document.createElement("img");
    img.src = service.service_img;
    service_img.appendChild(img);

    let service_title = document.createElement("div");
    service_title.className = "service_title";
    service_title.innerHTML = service.service_title;
    service_type.appendChild(service_title);

     service_type.addEventListener("click", async() => {
        
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
        }

        function successCallback(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude);
            console.log(longitude);
        }
        
        function errorCallback(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    document.getElementById('location').textContent = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    document.getElementById('location').textContent = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    document.getElementById('location').textContent = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    document.getElementById('location').textContent = "An unknown error occurred.";
                    break;
            }
        }

        window.location.href = service.link; 


     });
});


// top salon banners

const topSalonBanners = [
    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"
    },

    {
        banner_img:"banner1.jpg",
         link:"./salon owner deatils/owner_detail.html"
    },

    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"
    },

    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"

    },
    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"
    },
    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"
    },
    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"
    },
    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"
    },
    {
        banner_img:"banner1.jpg",
        link:"./salon owner deatils/owner_detail.html"
    },

   
];

let card_container =document.getElementById("card_container");

topSalonBanners.forEach( banner =>
{
   
    var card = document.createElement("div");
    card.className = "card";
    card_container.appendChild(card);

    let cardimg = document.createElement("img");
    cardimg.src = banner.banner_img;
    card.appendChild(cardimg);

    card.addEventListener("click", () => {
        window.location.href = banner.link; 
    });
});


document.getElementById("hideen-button").addEventListener("click", function() {
    const secondDiv = document.getElementById('toggleDiv1');
    secondDiv.style.display = 'none';
    const toggleDiv = document.getElementById("toggleDiv");
    // toggleDiv.classList.toggle("hidden");
    // toggleDiv.classList.toggle("visible");
    toggleDiv.style.display = 'none';
    toggleDiv.style.display = 'flex';
});

document.getElementById("close").addEventListener("click", function() {
    const secondDiv = document.getElementById('toggleDiv');
    secondDiv.style.display = 'none';
});



// login information

const userdata=[
    {
        Email:"",
        password:"",
    }
];

document.getElementById("loginbutton").addEventListener("click",function () {
    
    var Email =document.getElementById("id1").value;
    var password = document.getElementById("pass").value;
   

    let userinfo ={
        Email:Email,
        password:password
    }
    
    userdata.push(userinfo);
    alert("login successfull");
   
    console.log(userdata);
    window.open("main2.html", '_self');

     //  div.classList.toggle("hidden1");
    // var secondDiv = document.getElementById('secondDiv');
    // secondDiv.classList.toggle("hiddent");

    
    // var div = document.getElementById('toggleDiv');
    // div.classList.toggle("hide_login_signup");


});


// sign up function

 var first=document.querySelector(".toggle_signup").addEventListener("click",function()
{
    const secondDiv = document.getElementById('toggleDiv');
    secondDiv.style.display = 'none';
     const div=document.getElementById("toggleDiv1");
    //  div.classList.toggle("hidden1");
    //  div.classList.toggle("visible1");
    div.style.display = 'none';
    div.style.display = 'flex';
   
});

document.getElementById("close1").addEventListener("click", function() {
    const secondDiv = document.getElementById('toggleDiv1');
    secondDiv.style.display = 'none';
});



document.getElementById('get-location').addEventListener('click', function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
    }
});

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
}

function errorCallback(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location').textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location').textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('location').textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location').textContent = "An unknown error occurred.";
            break;
    }
}



// 

const data=[
    {
        Email:"",
        password:"",
        conform_pass:"",
    }
];




document.getElementById('signup').addEventListener("click", function() {
    
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
     
    const userdata={
        Email:input1,
        password:input2,
        conform_pass:input3,
    }

    data.push(userdata);
    alert("data added")
    console.log(data); 
    
let signout = document.getElementById("secondDiv");
signout.style.display = "none";

let signin = document.getElementById("toggleDiv1");
signin.style.display = "none";

window.location.href ="main2.html"

  
});


const womem_services = [
    {
        service_img:"",
        service_title:"haricut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./women section service card/women_ section_services.html"
    },
    {
        service_img:"",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./women section service card/women_ section_services.html"
    },
    {
        service_img:"",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./women section service card/women_ section_services.html"
    },
    {
        service_img:"",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
       link:"./women section service card/women_ section_services.html"
    },
    {
        service_img:"",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
       link:"./women section service card/women_ section_services.html"
    },
    {
        service_img:"",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
       link:"./women section service card/women_ section_services.html"
    },
];
// 

    const women_services_div =document.getElementById('women-section-card');

    womem_services.forEach(service =>
    {
        var women_card_conatiner =document.createElement("div");
        women_card_conatiner.className = "women-card-container";
        women_services_div.appendChild(women_card_conatiner);

        var upper_div = document.createElement("div");
        upper_div.className = "upper_img_div";
        women_card_conatiner.appendChild(upper_div);

        var img = document.createElement("img");
        img.src = service.service_img;
        upper_div.appendChild(img);

        var lower_div = document.createElement("div");
        lower_div.className = "lower-info-div";
        women_card_conatiner.appendChild(lower_div);

        var title = document.createElement("h2");
        title.innerHTML = service.service_title;
        lower_div.appendChild(title);

        var description = document.createElement("p");
        description.innerHTML = service.service_description;
        lower_div.appendChild(description);

        women_card_conatiner.addEventListener("click", () => {
            window.location.href = service.link; 
        });
    });

// kids section services 


const kid_services = [
    {
        service_img:"women gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"women gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"women gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    }
];

let kid_services_div =document.getElementById('kid-section-card');

kid_services.forEach( service_kid =>
{
    let card_for_kid = document.createElement("div");
    card_for_kid.className = "card-for-kid";
    kid_services_div.appendChild(card_for_kid);

    let upper_div = document.createElement("div");
    upper_div.className = "kid-upper";
    card_for_kid.appendChild(upper_div);

    let service_img = document.createElement("img");
    service_img.src = service_kid.service_img;
    upper_div.appendChild(service_img);

    let lower_div = document.createElement("div");
    lower_div.className = "kid-lower";
    card_for_kid.appendChild(lower_div);

    let service_title = document.createElement("h2");
    service_title.innerHTML = service_kid.service_title;
    lower_div.appendChild(service_title);

    let service_description = document.createElement("p");
    service_description.innerHTML = service_kid.service_description;
    lower_div.appendChild(service_description);

    card_for_kid.addEventListener("click", () => {
        window.location.href = service_kid.link; 
    });
    
}); 


const Men_services = [
    {
        service_img:"men gromming.png",
        service_title:"haricut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"men gromming.png",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"men gromming.png",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"men gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"men gromming.png",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"men gromming.png",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
];

let men_services_div =document.getElementById('men-section-card');

Men_services.forEach( service_men =>
{
    let men_services_card = document.createElement('div');
    men_services_card.className = 'car-for-men';
    men_services_div.appendChild(men_services_card);

    let upper_div = document.createElement('div');
    upper_div.className = 'men-upper';
    men_services_card.appendChild(upper_div);

    let service_img = document.createElement('img');
    service_img.src = service_men.service_img;
    upper_div.appendChild(service_img);

    let lower_div = document.createElement('div');
    lower_div.className = 'men-lower';
    men_services_card.appendChild(lower_div);

    let service_title = document.createElement('h2');
    service_title.innerHTML = service_men.service_title;
    lower_div.appendChild(service_title);

    let service_description = document.createElement('p');
    service_description.innerHTML = service_men.service_description;
    lower_div.appendChild(service_description);

    men_services_card.addEventListener('click', () => {
        window.location.href = service_men.link; 
    });
    
});


const massage_services = [
    {
        service_img:"women gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"women gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./women section service card/women_ section_services.html"
    },
    {
        service_img:"women gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./kids and men section/kid_men_services.html"
    },
    {
        service_img:"women gromming.png",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"./women section service card/women_ section_services.html"
    }
];

let massage_services_div =document.getElementById('massage-section-card');

massage_services.forEach( service_massage =>
{
    let massage_services_card = document.createElement('div');
    massage_services_card.className ='card-for-massage';
    massage_services_div.appendChild(massage_services_card);

    let upper_div = document.createElement('div');
    upper_div.className ='massage-upper';
    massage_services_card.appendChild(upper_div);

    let service_img = document.createElement('img');
    service_img.src = service_massage.service_img;
    upper_div.appendChild(service_img);

    let lower_div = document.createElement('div');
    lower_div.className ='massage-lower';
    massage_services_card.appendChild(lower_div);

    let service_title = document.createElement('h2');
    service_title.innerHTML = service_massage.service_title;
    lower_div.appendChild(service_title);

    let service_description = document.createElement('p');
    service_description.innerHTML = service_massage.service_description;
    lower_div.appendChild(service_description);

    massage_services_card.addEventListener('click', () => {
        window.location.href = massage_services.link; 
    });
});



var location2 = document.getElementById('userloc');
    location2.style.display = "none";
var userinput = document.getElementById('input_location').addEventListener("click", function()
{
    
    var location1 = document.getElementById('userloc');
    location1.style.fill = "none";
    location1.style.display = "none";
    location1.style.display = "flex"; 



    var closediv= document.querySelector('.location_close');
    closediv.addEventListener("click",function (){
        location1.style.display = "none";
    
    });
});


