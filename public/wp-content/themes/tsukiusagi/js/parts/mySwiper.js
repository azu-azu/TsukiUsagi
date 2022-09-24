let swiper = new Swiper('.js-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,//スライドの間の距離
    effect: 'fade',
    loop: true,//最後に達したら先頭に戻る
    speed: 300,
    draggable: false,

    mousewheel: {
        forceToAxis: false,
    },

    pagination: {
        el: '.swiper-pagination',//ページネーションの要素
        clickable: true,//クリックに反応させる
        dynamicBullets: false,//ページネーションに強弱がつく
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});