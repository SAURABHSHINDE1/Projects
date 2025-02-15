const ownerdetails =[
    {
        img:"",
        name: "John",
        address:"",
        opening_time:"",
        closing_time:"",
        services:["haircut", "nails", "manicure"]
    },
    {
        img:"",
        name: "John",
        address:"",
        opening_time:"",
        closing_time:"",
        services:["haircut", "nails", "manicure"]
    },
    {
        img:"",
        name: "John",
        address:"",
        opening_time:"",
        closing_time:"",
        services:["haircut", "nails", "manicure"]
    },
    {
        img:"",
        name: "John",
        address:"",
        opening_time:"",
        closing_time:"",
        services:["haircut", "nails", "manicure"]
    },
];

var card_container =document.querySelector(".card");

ownerdetails.forEach(owner => {
    var card = document.createElement("div");
    card.className ="cardp";
    card_container.appendChild(card);

    var cardimg = document.createElement("div");
    cardimg.className ="cardimg"; 
    card.appendChild(cardimg);  

    var img = document.createElement("img");
    img.src = owner.img;
    cardimg.appendChild(img);

    var cardbody = document.createElement("div");
    cardbody.className ="cardinfo";
    card.appendChild(cardbody);

    const p = document.createElement("p");
    p.innerHTML = `<b>Name:</b> ${owner.name}`; // Use template literals for dynamic content
    cardbody.appendChild(p);

    const p2 = document.createElement("p");
    p2.innerHTML = `<b>Address:</b> ${owner.address}`;
    cardbody.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerHTML = `<b>Opening Time:</b> ${owner.opening_time}`;
    cardbody.appendChild(p3);

    const p4 = document.createElement("p");
    p4.innerHTML = `<b>Closing Time:</b> ${owner.closing_time}`;
    cardbody.appendChild(p4);

    var list = document.createElement("div");
    list.className ="serv";
    list.textContent="services:";
    cardbody.appendChild(list);

    let ol = document.createElement("ol");
    ol.type ="1";
    owner.services.forEach(service => {
        let li = document.createElement("li");
        li.textContent = service;
        ol.appendChild(li);
    });
    cardbody.appendChild(ol);

});