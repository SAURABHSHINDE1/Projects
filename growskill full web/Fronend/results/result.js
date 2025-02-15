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


 function fetchResults() {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get("q");

    var h = document.getElementById("h2");
    h.textContent = `Search Results for"${searchTerm}"`;

    var p = document.getElementById("p");
    p.textContent = `No results found for "${searchTerm}".`;
   
}
fetchResults();