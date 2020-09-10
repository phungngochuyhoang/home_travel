// slide show
var index = 0;
slide();
function slide() {
    var slides = Array.from(document.querySelectorAll('.swiper-slide'));
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index-1].style.display = "block";
    setTimeout(slide, 4000);
} 
