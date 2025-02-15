
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

const input = document.getElementById("myInput");
    const icon = document.querySelector(".input-div i");

    input.addEventListener("focus", () => {
        icon.classList.add("move");
    });

    input.addEventListener("blur", () => {
        icon.classList.remove("move");
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
            image.className="image-asset"
            assetcard.appendChild(image);
    
            var img = document.createElement("img");
            img.src=Element.image;
            image.appendChild(img);
    
            var discription = document.createElement("div");
            discription.className="discription-asset";
            assetcard.appendChild(discription);
    
            var h3 = document.createElement("h2");
            h3.textContent = Element.assetname;
            discription.appendChild(h3);
    
            var p = document.createElement("p");
            p.textContent=`Rs${Element.price}`;
            discription.appendChild(p);
        })
    }
    
    data();

    async function courses()
    {
        var response = await fetch(`http://localhost:3000/course`);
        var data = await response.json();
        console.log(data);
    
        data.forEach(Element =>{
            var coursecontainer = document.querySelector('.course-container');
    
            var coursecard = document.createElement("div");
            coursecard.className="coursecard";
            coursecontainer.appendChild(coursecard);
    
            var image = document.createElement("div");
            image.className="image";
            coursecard.appendChild(image);
    
            var img = document.createElement("img");
            img.src=Element.image;
            image.appendChild(img);
    
            var discription = document.createElement("div");
            discription.className="discription";
            coursecard.appendChild(discription);
    
            var p1 = document.createElement("p");
            p1.innerText=`Rs${Element.price}`;
            discription.appendChild(p1);
    
            var name = document.createElement("h2");
            name.innerText=Element.course_name;
            discription.appendChild(name);
    
            var button = document.createElement("button");
            button.id="buynow";
            button.textContent="Buy Now"
            discription.appendChild(button);
        })
      
    }

    courses();

    
var faq = document.querySelector('.faq');

faq.addEventListener('click', (e) => {
    // Use classList instead of className
    if (e.target.classList.contains('qns')) {
        var answer = e.target.querySelector('.ans'); // Assuming answer is a child of .qns
        var icon = e.target.previousElementSibling;

        if (answer.style.display === "" || answer.style.display === "none") {
            answer.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        } else {
            answer.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    }
});


var enquirypage = document.getElementById("enquiry");

enquirypage.addEventListener('click', () => {
    window.location.href ="./Enquiry form/Enquiry.html"
});


document.querySelector('#myInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        var q=document.querySelector('#myInput').value;
        window.location.href = `./results/results.html?q=${q}`;
    }
});



document.addEventListener("click", (e) => {
    let item = e.target.closest(".feature"); 
    if (item) {
        let q = item.querySelector("h4").textContent;
        window.location.href = `./results/results.html?q=${q}`;
    }
});