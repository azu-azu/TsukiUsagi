// data属性
// data-sa_margin：表示タイミングを位置でずらす
// data-sa_trigger：表示タイミングの基準要素を指定
// data-sa_delay：表示タイミングを時間でずらす


let AnimClass = 'js-scroll-show';
let scrollAnimationShowClass = 'show';
let triggerMarginDefault = 200;

let scrollAnimElm = document.querySelectorAll('.' + AnimClass);
let scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimElm.length; i++) {
        let triggerMargin = triggerMarginDefault;
        let elm = scrollAnimElm[i];
        let showPos = 0;

        // marginでずらす場合
        if (elm.dataset.js_datamargin != null) {
            triggerMargin = parseInt(elm.dataset.js_margin);
        }

        // triggerがある場合
        if (elm.dataset.js_trigger) {
            showPos = document.querySelector(elm.dataset.js_trigger).getBoundingClientRect().top + triggerMargin;
        } else {
            showPos = elm.getBoundingClientRect().top + triggerMargin;
        }

        // 時間でずらす場合
        if (window.innerHeight > showPos) {
            let delay = (elm.dataset.js_delay) ? elm.dataset.js_delay : 0;
            setTimeout(function (index) {
                scrollAnimElm[index].classList.add('show');
            }.bind(null, i), delay);
        }
    }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
