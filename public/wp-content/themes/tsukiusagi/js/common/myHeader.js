// 条件分岐の判断に利用するメディアクエリを指定
// 参考 https://blog-and-destroy.com/36659
const mq = window.matchMedia('(min-width: 570px)');

// スクロールしたら関数呼び出し
window.addEventListener('scroll', () => {
	function mqCheck(mq) {
		// ビューポートの幅が 指定ピクセル以上の場合に実行する
		if (mq.matches) {
			headerFade();
			headerBackDown();
		}
	}
	mqCheck(mq);
});

// ロードしたら関数呼び出し
window.addEventListener('load', () => {
	function mqCheck(mq) {
		// ビューポートの幅が 指定ピクセル以上の場合に実行する
		if (mq.matches) {
			headerFade();
			headerBackDown();
		}
	}
	mqCheck(mq);
});

// ----------------------------------------------------
// 関数
// ----------------------------------------------------
// **
// p-header:スクロールしたら消える
// **
const myHeader = document.getElementById('js-p-header');
const headerClass = myHeader.classList;
const headerFadePosition = 50; //スクロールしてページトップから〇〇に達したとき

const headerFade = () => {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop >= headerFadePosition) {
		headerClass.add('is-fade');
	} else {
		headerClass.remove('is-fade');
	}
};

// **
// p-header-back:スクロール途中で出現
// **
const layoutHeader = document.getElementById('js-l-header');
const layoutHeaderClass = layoutHeader.classList;

const headerBackDown = () => {
	let myTarget = document.getElementById('works');
	let rect = myTarget.getBoundingClientRect();
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let targetTop = rect.top + scrollTop;

	if (scrollTop >= targetTop) {
		headerClass.remove('p-header--top', 'is-fade'); // クラス名除去  "UpMove"
		headerClass.add('p-header--back'); // クラス名追加  'DownMove'
		layoutHeaderClass.add('back'); // クラス名追加
	} else {
		if (layoutHeaderClass.contains('back')) {
			//すでにクラス名がついていたら "DownMove"
			layoutHeaderClass.remove('back'); // クラス名除去
			headerClass.remove('p-header--back'); // クラス名除去 'DownMove'
			headerClass.add('p-header--top'); // クラス名追加  'UpMove'
		}
	}
};

// // ウィンドウ幅が切り替わったら関数呼び出し
// window.addEventListener('resize', () => {
// 	resizeRemoveClass();//is-open, is-closeを外す
// 	bodyFixedNone();//bodyのfixedを外す
// });

// **
// ハンバーガーボタン：タッチ/クリック
// **
// const hamburger = document.getElementById('js-hamburger');
// const hamburgerClass = hamburger.classList;
// const myBody = document.body;
// const myBodyClass = myBody.classList;

// hamburger.addEventListener('touchstart', function (e) {
// 	e.stopPropagation();
// 	hamburgerClick();
// });

// hamburger.addEventListener('click', function () {
// 	hamburgerClick();
// });

// **
// ナビゲーションのリストをクリックしたらis-openを消す：タッチ/クリック
// **
// const navList = document.querySelectorAll(".js-ham-close");

// navList.forEach((elm) => {
// 	elm.addEventListener('touchstart', function (e) {
// 		e.stopPropagation();
// 		navClick();// is-openを外す,is-closeを付ける,bodyのfixedを外す
// 	});
// });

// navList.forEach((elm) => {
// 	elm.addEventListener('click', function () {
// 		navClick();
// 	});
// });

// const hamburgerClick = () => {
// 	let myPosition = window.pageYOffset || document.documentElement.scrollTop;

// 	if (hamburgerClass.contains("is-close")) {//is-closeがあったら
// 		removeClose();//is-closeを外す
// 	} else {

// 		if (hamburgerClass.contains("is-open")) {//is-openがあったら
// 			const scrollY = myBody.style.top;// スクロール位置の記憶
// 			removeOpen();// is-openを外す
// 			addClose();// is-closeを付ける
// 			bodyFixedNone();// bodyのfixedを外す
// 			window.scrollTo(0, parseInt(scrollY || '0') * -1);// スクロール位置の保持
// 		}
// 	};

// 	// is-closeもis-openもなかったら
// 	if (!hamburgerClass.contains("is-close") && !hamburgerClass.contains("is-open")) {
// 		addOpen();//is-openをつける
// 		myBody.style.position = "fixed";
// 		myBody.style.top = `-${myPosition}px`;
// 	};
// };

// // **
// //ウィンドウ幅が切り替わったら、is-open||is-closeを外す
// // **
// const moonMiniSize = 570;
// const resizeRemoveClass = () => {
// 	let x = document.body.clientWidth;
// 	if (x >= moonMiniSize) {
// 		if (hamburgerClass.contains("is-open")) {//is-openがあったら
// 			removeOpen();// is-openを外す
// 		} else {
// 			if (hamburgerClass.contains("is-close")) {//is-closeがあったら
// 				removeClose();//is-closeを外す
// 			}
// 		}
// 	}
// };

// // **
// // is-closeを外す
// // **
// const removeClose = () => {
// 	hamburgerClass.remove('is-close');
// 	myBodyClass.remove('is-close');
// };

// // **
// // is-closeを付ける
// // **
// const addClose = () => {
// 	hamburgerClass.add('is-close');
// 	myBodyClass.add('is-close');
// };

// // **
// // is-openを外す
// // **
// const removeOpen = () => {
// 	hamburgerClass.remove('is-open');
// 	myBodyClass.remove('is-open');
// };

// // **
// // is-openを付ける
// // **
// const addOpen = () => {
// 	hamburgerClass.add('is-open');
// 	myBodyClass.add('is-open');
// };

// // **
// // bodyのfixedを外す
// // **
// const bodyFixedNone = () => {
// 	myBody.style.position = "";
// 	myBody.style.top = "";
// 	myBody.style.paddingTop = "";
// };

// // **
// // ナビゲーションクリックまとめ
// // **
// const navClick = () => {
// 	removeOpen();// is-openを外す
// 	addClose();// is-closeを付ける
// 	bodyFixedNone();//bodyのfixedを外す
// };
