// 条件分岐の判断に利用するメディアクエリを指定
const mqm = window.matchMedia('(min-width: 570px)');

// スクロールしたら関数呼び出し
window.addEventListener('scroll', () => {
	function mqCheck(mqm) {
		if (mqm.matches) {
			// ビューポートの幅が 指定ピクセル以上の場合
			myAppear();
		}
	}
	mqCheck(mqm);
});

// ロードしたら関数呼び出し
window.addEventListener('load', () => {
	function mqCheck(mqm) {
		if (mqm.matches) {
			// ビューポートの幅が 指定ピクセル以上の場合
			myAppear();
		}
	}
	mqCheck(mqm);
});

// ----------------------------------------------------
// 関数：スクロール途中で出現する
// ----------------------------------------------------
const myTarget = document.getElementById('js-appear');
const myTargetClass = myTarget.classList;

const myAppear = () => {
	let posAppear = document.getElementById('js-pos'); // 現れる場所にIDを付与しておく
	let rect = posAppear.getBoundingClientRect();
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let targetTop = rect.top + scrollTop;

	if (scrollTop >= targetTop) {
		myTargetClass.add('is-appear'); // クラス名追加
	} else {
		if (myTargetClass.contains('is-appear')) {
			//すでにクラス名がついていたら "DownMove"
			myTargetClass.remove('is-appear'); // クラス名除去
		}
	}
};

