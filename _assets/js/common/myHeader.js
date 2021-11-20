// const bodyWidth = document.body.clientWidth;

// スクロールしたら関数呼び出し
window.addEventListener('scroll', () => {
	headerFade();
	headerBackDown();
});

// ロードしたら関数呼び出し
window.addEventListener('load', () => {
	headerFade();
});


// **
// p-header:スクロールしたら消える
// **
const headerClass = document.getElementById("js-header");
const headerFadePosition = 50;//スクロールしてページトップから〇〇に達したとき
const headerFade = () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop >= headerFadePosition) {
		headerClass.classList.add('is-fade');
	} else {
		headerClass.classList.remove('is-fade');
	};
}




// **
// p-header-back:スクロール途中で出現
// **
const headerBackDown = () => {
	let myTarget = document.getElementById("works");
	let rect = myTarget.getBoundingClientRect();
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let targetTop = rect.top + scrollTop;

	if (scrollTop >= targetTop) {
		headerClass.classList.remove("UpMove", "p-header", "is-fade");// クラス名除去
		headerClass.classList.add('DownMove', 'p-header--back');// クラス名追加

	} else {
		if (headerClass.classList.contains("DownMove")) {//すでにクラス名がついていたら
			headerClass.classList.remove('DownMove', 'p-header--back');// クラス名除去
			headerClass.classList.add('UpMove', 'p-header');// クラス名追加
		}
	}
}



// **
// ハンバーガーボタン：クリックイベント
// **
const hamburger = document.getElementById('js-hamburger');
hamburger.addEventListener('click', () => {
	let myPosition = window.pageYOffset || document.documentElement.scrollTop;

	if (hamburger.classList.contains("is-close")) {
		hamburger.classList.remove('is-close');

		hamburger.classList.toggle('is-open');
		document.body.classList.toggle('is-open');
		document.body.style.position = "fixed";
		document.body.style.top = `-${myPosition}px`;
	} else {
		if (hamburger.classList.contains("is-open")) {
			hamburger.classList.remove('is-open');
			document.body.classList.remove('is-open');
			hamburger.classList.add('is-close');

			// スクロール位置の保持
			const scrollY = document.body.style.top;
			document.body.style.position = "";
			document.body.style.top = "";
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		}
	}
});


// const hamburger = document.getElementById('js-hamburger');
// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('is-open');
// 	document.body.classList.toggle('is-open');
// });


// **
// is-openを消す
// **
// ハンバーガーメニューをクリックしたとき
const navList = document.querySelectorAll(".js-marker");
navList.forEach((elm) => {
	elm.addEventListener('click', () => {
		hamburger.classList.remove('is-open');
		document.body.classList.remove('is-open');
	});
});

// ウィンドウ幅が切り替わったとき
const moonMiniSize = 570;
jQuery(function ($) {
	$(window).resize(function () {
		let x = $(window).width();
		let y = moonMiniSize;
		if (x >= y) {
			$("#js-hamburger").removeClass("is-open");
			$("body").removeClass("is-open");
			$("#js-hamburger").addClass("is-close");
			$("body").addClass("is-close");
		}
		else {
		}
	});
})










// ハンバーガーメニューの切り替え設定
// window.addEventListener('resize', function () {
// 	const spWindowSize = 570; //切り替え時の画面幅
// 	const target1 = document.getElementById('js-gmenu');
// 	const target2 = document.getElementById('js-nav');
// 	const btnHome = document.getElementById('js-btn-home');
// 	const btnWorks = document.getElementById('js-btn-works');
// 	const btnProfile = document.getElementById('js-btn-profile');
// 	const btnContact = document.getElementById('js-btn-contact');


// 	if (window.innerWidth <= spWindowSize) {//画面幅が以下の場合
// 		target1.classList.remove("p-gmenu");
// 		target2.classList.remove("c-nav");

// 		target1.classList.add("p-gmenu--hamburger");
// 		target2.classList.add("c-nav--hamburger");
// 		btnHome.classList.add("c-nav-btn--home");
// 		btnWorks.classList.add("c-nav-btn--works");
// 		btnProfile.classList.add("c-nav-btn--profile");
// 		btnContact.classList.add("c-nav-btn--contact");

// 		target1.addEventListener('click', e => {
// 			target1.classList.toggle('is-open')
// 			btnHome.children[0].classList.toggle('is-off')
// 			btnWorks.children[0].classList.toggle('is-off')
// 			btnProfile.children[0].classList.toggle('is-off')
// 			btnContact.children[0].classList.toggle('is-off')
// 		});

// 	} else {//幅が大きい時
// 		target1.classList.remove("p-gmenu--hamburger");
// 		target2.classList.remove("c-nav--hamburger");
// 		btnHome.classList.remove("c-nav-btn--home");
// 		btnWorks.classList.remove("c-nav-btn--works");
// 		btnProfile.classList.remove("c-nav-btn--profile");
// 		btnContact.classList.remove("c-nav-btn--contact");
// 		target1.classList.add("p-gmenu");
// 		target2.classList.add("c-nav");
// 	}
// });






// **
// jQueryで書く場合
// **

// **ヘッダーのフェード**
// jQuery(function ($) {
// 	let ttl = $('.js-header');
// 	$(window).on('load scroll', function () {
// 		if ($(this).scrollTop() > 50) { //スクロールしてページトップから〇〇に達したら
// 			ttl.addClass('is-fade');
// 		} else {
// 			ttl.removeClass('is-fade');
// 		}
// 	});
// });


// **スクロール途中でヘッダー出現**
// function headerBack() {
// 	let elemTop = jQuery('#works').offset().top;//#の位置
// 	let scroll = jQuery(window).scrollTop();
// 	if (scroll >= elemTop) {
// 		// クラス名除去
// 		jQuery('.js-header-back').removeClass('UpMove');
// 		jQuery('.js-header-back').removeClass('p-header');
// 		jQuery('.js-header-back').removeClass('is-fade');

// 		// クラス名追加
// 		jQuery('.js-header-back').addClass('DownMove');
// 		jQuery('.js-header-back').addClass('p-header--back');

// 	} else {
// 		if (jQuery('.js-header-back').hasClass('DownMove')) {//すでにクラス名がついていたら
// 			// クラス名除去
// 			jQuery('.js-header-back').removeClass('DownMove');
// 			jQuery('.js-header-back').removeClass('p-header--back');

// 			// クラス名追加
// 			jQuery('.js-header-back').addClass('UpMove');
// 			jQuery('.js-header-back').addClass('p-header');
// 		}
// 	}
// }