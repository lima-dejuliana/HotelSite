var qualSlide;

var slideIndex = 1;
showGaleria(slideIndex);

var slideId = 1;
escolherSlide(slideId);

function currentThumb(n) {
    showGaleria(slideIndex = n);
    escolherSlide(slideId = n);
    showSlide(slideId = n);
}

function allOculto() {
    document.getElementById("divSlideUm").style.display = 'none';
    document.getElementById("divSlideDois").style.display = 'none';
    document.getElementById("divSlideTres").style.display = 'none';
}

function mudarEstado() {
    var display = slideDisplay.style.display;
    if (display == "none")
        slideDisplay.style.display = 'block';
    else
        slideDisplay.style.display = 'none';
}

function escolherSlide(n) {
    allOculto();
    if (n == 1) {
        qualSlide = document.getElementsByClassName("slidePrimeiro");
        slideDisplay = document.getElementById("divSlideUm");
    }
    if (n == 2) {
        qualSlide = document.getElementsByClassName("slideSegundo");
        slideDisplay = document.getElementById("divSlideDois");
    }
    if (n == 3) {
        qualSlide = document.getElementsByClassName("slideTerceiro");
        slideDisplay = document.getElementById("divSlideTres");
    }
    mudarEstado();
    showSlide(slideId);
}

function showGaleria(n) {
    var i;
    var galeria = document.getElementsByClassName("galeria");

    for (i = 0; i < galeria.length; i++) {
        galeria[i].style.display = "none";
    }
    galeria[slideIndex - 1].style.display = "block";
}


function showSlide(n) {
    var i;
    var slide = qualSlide;

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideId++;
    if (slideId > slide.length) {
        slideId = 1
    }
    slide[slideId - 1].style.display = "block";
    setTimeout(showSlide, 3000);
}
