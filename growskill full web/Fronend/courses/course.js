
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



// Select all divs with the class 'clickable-div'
const divs = document.querySelectorAll('.courseNmae');

// Add click event listener to each div
divs.forEach(div => {
    div.addEventListener('click', () => {
        // Reset background color of all divs
        divs.forEach(d => {
            d.style.backgroundColor = '';
            d.style.color='white'
            d.style.border="1px solid white"

        });
        
        
        // Set background color of the clicked div to green
        div.style.backgroundColor = 'green';
        div.style.color='black'
        div.style.border="none"

    });
});


async function data()
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

data();



 
 