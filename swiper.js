const swiper = new Swiper(".recipe-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".recipe-next",
        prevEl: ".recipe-prev"
    },
    autoHeight: window.innerWidth <= 1439,

    on: {
        init: function () {
            updateRecipeCount(this);
        },
        slideChange: function () {
            updateRecipeCount(this);
        },
        resize: function () {
            this.params.autoHeight = window.innerWidth <= 1439;
            this.update();
            this.updateAutoHeight();
        }
    }
});

function updateRecipeCount(swiper) {
    const count = document.querySelector(".recipe-count");
    if (count) {
        count.textContent = `${swiper.realIndex + 1}/${swiper.slides.length}`;
    }
}