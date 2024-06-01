// 条件分岐の判断に利用するメディアクエリを指定
const mq = window.matchMedia('(min-width: 570px)');

// スクロールしたら関数呼び出し
window.addEventListener('scroll', () => {
	function mqCheck(mq) {
		if (mq.matches) {
			// ビューポートの幅が 指定ピクセル以上の場合
			headerFade();
			headerBackDown();
		}
	}
	mqCheck(mq);
});

// ロードしたら関数呼び出し
window.addEventListener('load', () => {
	function mqCheck(mq) {
		if (mq.matches) {
			// ビューポートの幅が 指定ピクセル以上の場合
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
	let myTarget = document.getElementById('js-pos'); // スクロール位置をIDで指定
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