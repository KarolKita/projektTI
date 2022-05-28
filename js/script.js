// JS

// automatyczna zamiana zdjec

var bgSource = ["tlo1.jpg", "tlo2.jpg", "tlo3.jpg"];
var index = 1;

setInterval(function () {
    if (index == bgSource.length) {
        index = 0;
    }
    document.getElementById("start").style.backgroundImage = 'url("../img/' + bgSource[index] + '")';
    index++;
}, 6000);


// zmiana zdjec w galeri

var currentIndex = 0;
var imgSource = ["jpg1.jpg", "mem.jpg", "jpg2.jpg", "jpg3.jpg", "jpg4.jpg", "jpg5.jpg"];

const animatePhoto = [
    {opacity: 0.3},
    {opacity: 1}
];

const timing = {
    duration: 1000,
    iterations: 1,
}

function changePhoto(i) {
    document.getElementById("photo").animate(animatePhoto, timing);
    
    let prev = "c" + currentIndex;
    document.getElementById(prev).style.opacity = 0.5;
    
    currentIndex = currentIndex + i;
    if (currentIndex >= imgSource.length){
        currentIndex = 0;
    }
    else if (currentIndex < 0){
        currentIndex = imgSource.length - 1;
    }
    
    document.getElementById("photo").src = "img/" + imgSource[currentIndex];
    
    let next = "c" + currentIndex;
    document.getElementById(next).style.opacity = 1;
}

function showPhoto(nr){
    currentIndex = nr;
    document.getElementById("photo").src = "img/" + imgSource[nr];
    for(let i = 0; i < imgSource.length; i++) {
        if (i != nr) {
            let x = "c" + i;
            document.getElementById(x).style.opacity = 0.5;
        } 
        else 
        {   
            let x = "c" + nr;
            document.getElementById(x).style.opacity = 1;
        }
    }
}


