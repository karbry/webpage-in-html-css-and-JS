//nagłowek
var slideIndexH = 0;
showSlidesH();
var slidesH,dotsH;

function showSlidesH() {
    var i;
    slidesH = document.getElementsByClassName("mySlidesH");
    dotsH = document.getElementsByClassName("dotH");
    for (i = 0; i < slidesH.length; i++) {
       slidesH[i].style.display = "none";
    }
    slideIndexH++;
    if (slideIndexH> slidesH.length) {slideIndexH = 1}
    for (i = 0; i < dotsH.length; i++) {
        dotsH[i].className = dotsH[i].className.replace(" active", "");
    }
    slidesH[slideIndexH-1].style.display = "block";
    dotsH[slideIndexH-1].className += " active";
    setTimeout(showSlidesH, 4000);
}
function currentSlideH(index) {
    if (index> slidesH.length) {index = 1}
    else if(index<1){index = slidesH.length}
    for (i = 0; i < slidesH.length; i++) {
       slidesH[i].style.display = "none";
    }
    for (i = 0; i < dotsH.length; i++) {
        dotsH[i].className = dotsH[i].className.replace(" active", "");
    }
    slidesH[index-1].style.display = "block";
    dotsH[index-1].className += " active";
}

//opinie
var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000);
}
function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
}