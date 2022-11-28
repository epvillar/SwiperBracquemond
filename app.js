 
// CUBO       
var swiper = new Swiper ('.swiper-container2', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
    shadow: true,
    slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    keyboard: {
        enabled: true,
    },
    loop: true,
});

// CARDS        
var swiper3 = new Swiper(".swiper-container3", {
    effect: "cards",
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
});

// overflow
var swiper4 = new Swiper(".mySwiper4", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
  });
  
/*Parallax*/
var mySwiper = new Swiper ('.swiper-container6', {
    direction: 'horizontal',
    loop: true,
    speed: 600,
    parallax: true,
    keyboard: {
       enabled: true,
    },
});


        
    
    