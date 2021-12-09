function openfunction() {
    let y1 = document.getElementById("nav-bar-overlay");
    let y2 = document.getElementById("small-menu-section");
    y1.style.right = "0";
    y2.style.right = "0";

}
function closefunction() {
    let x1 = document.getElementById("nav-bar-overlay");
    let x2 = document.getElementById("small-menu-section");
    x1.style.right = "-100vw";
    x2.style.right = "-50vw";

}



AOS.init({
    once: true,
});


// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 4000,
    },

    speed: 800,
    autoplayDisableOnInteraction: true,

    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        425: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    },
});