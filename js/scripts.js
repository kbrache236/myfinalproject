// slideshow function
let intIndex = 0;

function showImage(step = 1, isDot = false) {

    if (isDot) {
        intIndex = step;   // go directly to slide
    } else {
        intIndex += step;  // move forward/back
    }

    let theImages = document.getElementsByClassName("image");
    let theDots = document.getElementsByClassName("dot");

    for (let n = 0; n < theImages.length; n++) {
        theImages[n].style.display = "none";
        theDots[n].classList.remove("active");
    }

    if (intIndex > theImages.length - 1) intIndex = 0;
    if (intIndex < 0) intIndex = theImages.length - 1;

    theImages[intIndex].style.display = "block";
    theDots[intIndex].classList.add("active");
}

// start slideshow
showImage(0, true);
setInterval(() => showImage(1), 5000);

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("cornerBtn").style.display = "block";
    } else {
        document.getElementById("cornerBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// copyright
window.onload = function () {
    document.getElementById("copyrightyear").innerHTML = new Date().getFullYear();
}