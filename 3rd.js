var typed = new Typed('#text',{
    strings: ['Developer', 'Designer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

// Show Skills
let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click', () => {
    skillDet.classList.toggle('show_skills');
});

//sticky nav

let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        nav.classList.add('sticky_nav');
    }
    else{
        nav.classList.remove('sticky_nav');
    }
});

// TESTIMONIAL SWIPER SLIDER

var swiper = new Swiper(".testSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// FILTERS

var mixer = mixitup('.portfolio_images');

// BLOGS SWIPER SLIDER

var swiper = new Swiper(".blogSwiper", {
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    autoplay: true,
    breakpoints: {
        1200:{
          slidesPerView:2,
          spaceBetween:10,  
        },
        900:{
            slidesPerView:1,
            spaceBetween:10,
        },
        500:{
            slidesPerView:1,
            spaceBetween:10,
        },
    },    

});
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_nav');
});