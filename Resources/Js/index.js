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


$(
    // back top
    $(window).scroll(() => {
        if(this.scrollY == 0) {
            $('.box-top').css({display: 'none'});
        }else {
            $('.box-top').css({display: 'block'});
        }
    }),
    // shahow bar nav 
    $(window).scroll(() => {
        if(this.scrollY == 0) {
            $('.header .container-header .row .col-xl-3, .header .container-header .row .col-xl-9').css({
                padding: '10px',
            })
            $('.header .container-header .row:nth-child(1)').css({
                boxShadow: 'none'
            })
        }else {
            $('.header .container-header .row .col-xl-3, .header .container-header .row .col-xl-9').css({
                padding: 0,
            })
            $('.header .container-header .row:nth-child(1)').css({
                boxShadow: '0 5px 20px #242424'
            })
        }
    }),
)


// length letter
var p = Array.from(document.querySelectorAll('.section.section-posts .container .row .posts-box .body .content .description p'))[0];
var arr = p.innerText.split('');
var shiftLetter = 100;
var box = [];
for(var i = 0; i < shiftLetter; i++) {
    box.push(arr.shift());
}
var newLetter = box.join('') + ' ...';
p.innerHTML = newLetter;
