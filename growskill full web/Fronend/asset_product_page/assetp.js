
// Hide secondDiv initially when the page loads
document.addEventListener('DOMContentLoaded', () => {
    var secondDiv = document.querySelector('.hidden-acc-div');
    secondDiv.style.display = 'none';
});

var user = document.querySelector('.ri-user-3-line').addEventListener('click', (e) => {
    var secondDiv = document.querySelector('.hidden-acc-div');
    if (secondDiv.style.display === 'none' || secondDiv.style.display === '') {
        secondDiv.style.display = 'flex';
    } else {
        secondDiv.style.display = 'none';
    }
});

document.body.addEventListener('click', (e) => {
    var secondDiv = document.querySelector('.hidden-acc-div');
    if (e.target.className !== 'ri-user-3-line') {
        secondDiv.style.display = 'none';
    }
});

 
const array =[{
    img:"",
    ratting:5,
    pName:"Digital Assets",
    originalPrice:300,
    pPrice:200,
    featurs:["120 Gradient shapes","20 White shapes","120 Black shapes"],
    des:"Incredible 120 high-quality vector geometric line shapes in 3 color versions",
    pdetails:[
        "license:Personal & Commercial Use",
        "type: Image",
        "format: [JPEG, PNG]",
        "fileSize: 200 MB",
        "dimensions: 3000 x 2000 px",
        "category: Pdf",
        "description: Explore in-depth details of our premium digital assets, crafted with high precision and available in multiple formats to suit diverse needs. These assets are ideal for graphic designers, digital artists, and creative professionals looking to add high-quality visual elements to their projects."
    ]
}] ;

array.forEach(element => {
    var productContainer =document.querySelector(".product-container");

    var imgContainer = document.createElement("div");
    imgContainer.className="imgcontainer";
    productContainer.appendChild(imgContainer);
    
    var img = document.createElement("img");
    img.src=element.img;
    imgContainer.appendChild(img);

    var des = document.createElement("div");
    des.className="description";
    productContainer.appendChild(des);

    var stars = document.createElement("div");
    stars.className="stars";
    des.appendChild(stars);

    for(let i=0; i<element.ratting; i++){
        var star = document.createElement("i");
        star.className="ri-star-fill";
        stars.appendChild(star);
    }

    var pName = document.createElement("h1");
    pName.textContent=element.pName;
    des.appendChild(pName);

    var price = document.createElement("p");
    price.innerHTML = `<s>₹${element.originalPrice}</s> ₹${element.pPrice}`;
    des.appendChild(price);


    const featureList = document.createElement("ul");
        array[0].featurs.forEach(feature => {
        const listItem = document.createElement("li");
        listItem.textContent = feature;
        featureList.appendChild(listItem);
    });

    des.appendChild(featureList);

    var description = document.createElement("h4");
    description.textContent=element.des;
    des.appendChild(description);

    var divButton = document.createElement("div");
    divButton.className="div-button";
    des.appendChild(divButton);

    var b1 = document.createElement("button");
    b1.id="b1";
    b1.textContent="Add to Cart";
    divButton.appendChild(b1);

    var b2 = document.createElement("button");
    b2.id="b2";
    b2.textContent="Buy Now";
    divButton.appendChild(b2);
    
    var h3 = document.createElement("h3");
    h3.textContent="Have a Coupon Code?";
    des.appendChild(h3);

    var inputDiv = document.createElement("div");
    inputDiv.className="input-div";
    des.appendChild(inputDiv);

    var input = document.createElement("input");
    input.type="text";
    input.id="coupon";
    input.placeholder="Enter your coupon code";
    inputDiv.appendChild(input);

    var applyButton = document.createElement("button");
    applyButton.id="apply";
    applyButton.textContent="Apply";
    inputDiv.appendChild(applyButton);

    var pContainer = document.querySelector(".more-product-container");
   
    var h3 = document.createElement("h3");
    h3.id="morep";
    h3.textContent="More About Product";
    pContainer.appendChild(h3);

    const List = document.createElement("ul");
    array[0].pdetails.forEach(feature => {
    const listItem = document.createElement("li");
    listItem.textContent = feature;
    List.appendChild(listItem);
});

pContainer.appendChild(List);
 
});


async function data()
{
    var response = await fetch(`http://localhost:3000/asset`);
    var data = await response.json();
    console.log(data);

    data.forEach(Element =>{
        var assetcontainer = document.querySelector('.assets-container');

        var assetcard = document.createElement("div");
        assetcard.className="asset-card";
        assetcontainer.appendChild(assetcard);

        var image = document.createElement("div");
        image.className="image"
        assetcard.appendChild(image);

        var img = document.createElement("img");
        img.src=Element.image;
        image.appendChild(img);

        var discription = document.createElement("div");
        discription.className="discription";
        assetcard.appendChild(discription);

        var h3 = document.createElement("h3");
        h3.textContent = Element.assetname;
        discription.appendChild(h3);

        var p = document.createElement("p");
        p.textContent=`Rs${Element.price}`;
        discription.appendChild(p);
    })
}

data();