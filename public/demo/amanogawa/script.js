// スクロールしたら関数呼び出し
window.addEventListener('scroll', () => {
    videoFade();
});

// ロードしたら関数呼び出し
window.addEventListener('load', () => {
    videoFade();
});



// ----------------------------------------------------
// 関数
// ----------------------------------------------------
// **
// p-header:スクロールしたら消える
// **
const myVideo = document.getElementById("js-video-overlay");
const videoClass = myVideo.classList;

const myMap = document.getElementById("js-map");
const mapClass = myMap.classList;

// let pos = 0;

const videoFade = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let videoTarget = document.getElementById("js-sec-basic");
    let videoRect = videoTarget.getBoundingClientRect();
    // let videoTop = videoRect.top - scrollTop;
    let videoTop = 10;

    let mapTarget = document.getElementById("js-map");
    let mapRect = mapTarget.getBoundingClientRect();
    let mapTop = videoRect.top;
    let mapTop2b = videoRect.bottom + 1000;


    // startPos = scrollTop - pos;



    if (scrollTop >= videoTop) {
        if (videoClass.contains('is-out')) {
            videoClass.remove('is-out');
        }
        videoClass.add('is-fade');
        mapClass.add('is-fix', 'is-fade');
    } else {
        videoClass.remove('is-fade');
        videoClass.add('is-out');
    };
    if (scrollTop <= mapTop2b) {
        mapClass.remove('is-fix', 'is-fade');
    };
};