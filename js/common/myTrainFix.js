// 銀河鉄道を固定する
const myTrain = jQuery('.js-train');
const train_pos = myTrain.offset().top;
const train_height = myTrain.outerHeight();

jQuery(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > train_pos + 23) {
            myTrain.addClass('fixed');
        } else {
            myTrain.removeClass('fixed');
        }
    });
});
