var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000, // Set the time delay in milliseconds (e.g., 5000ms or 5 seconds)
        disableOnInteraction: false, // Set to false to keep autoplaying even when user interacts with the slider
    }
});
