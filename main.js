let img = document.querySelector('.img');
let container = document.querySelector('.container');

function phones(phone) {
    img.src = phone;
    localStorage.setItem('selectedImg', phone); 
}


function background(color) {
    container.style.background = color;
    localStorage.setItem('selectedBg', color);
}


window.onload = function () {
    let savedImg = localStorage.getItem('selectedImg');
    let savedBg = localStorage.getItem('selectedBg');

    if (savedImg) {
        img.src = savedImg; 
    }

    if (savedBg) {
        container.style.background = savedBg; 
    }
};
