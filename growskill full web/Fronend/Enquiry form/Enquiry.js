
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
const divs = document.querySelectorAll('.b1');

// Add click event listener to each div
divs.forEach(div => {
    div.addEventListener('click', () => {
        // Reset background color of all divs
        divs.forEach(d => {
            d.style.backgroundColor = '';
        });
        
        // Set background color of the clicked div to green
        div.style.backgroundColor = '#22c55e';

    });
});