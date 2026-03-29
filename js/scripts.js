// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("cornerbtn").style.display = "block";
} else {
    document.getElementById("cornerbtn").style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

window.onload = function () {
    document.getElementById("copyrightyear").innerHTML = new Date().getFullYear();
}