// const textBoxies = document.querySelectorAll('.js-text-box');
// const textBox = textBoxies.item(0);

// const dragAreas = document.querySelectorAll('.js-drag-area');
// const dragArea = dragAreas.item(0);

const myBody = document.body;
let necessaryFiles = document.getElementsByClassName('necessary-file-name');

const previewArea = document.getElementById('js-preview-area');

const ddAreas = document.querySelectorAll('.js-dd-area');
const ddArea = ddAreas.item(0);

const inputAreas = document.querySelectorAll('.js-add-file');
const inputArea = inputAreas.item(0);

const nameAreas = document.querySelectorAll('.js-name-area');
const nameArea = nameAreas.item(0);

const submitBtns = document.querySelectorAll('.js-submit-ok');
const submitBtn = submitBtns.item(0);

const cancelBtns = document.querySelectorAll('.js-cancel-button');
const cancelBtn = cancelBtns.item(0);

const dt = new DataTransfer();

// クリック時の初期化
inputArea.addEventListener('click', (e) => {
	inputArea.value = ''; // 初期化
	myBody.onfocus = isCancel;
});

// キャンセルボタンでリロード
cancelBtn.addEventListener('click', () => {
	window.location.reload(true);
});

// changeで、選択されたfileをlistに追加（選択のたびに上書きせずに追加する）
inputArea.addEventListener(
	'change',
	(e) => {
		removeClass_ddeffect(ddArea); // *ドラッグ中のクラス名を外す
		let beforeFiles = dt.files; // 既存のfileを取得
		const { files } = e.target; // 新しく選択したファイルを取得

		// 【 選択されたファイルを1個ずつ検証 】
		[].forEach.call(files, (file) => {
			// 1. 重複ファイルかどうか
			let flagDuplication = false;
			let count = beforeFiles.length;
			for (i = 0; i < count; i++) {
				let beforeFile = beforeFiles.item(i);
				if (file.name === beforeFile.name) {
					flagDuplication = true;
					// alert(`${file.name}:すでに選択済のファイルです`);
					break;
				}
			}

			// 2. 重複してなければ必須ファイルかどうか
			if (!flagDuplication) {
				let flagNecessary = false;
				count = necessaryFiles.length;

				for (i = 0; i < count; i++) {
					// 必須ファイル名の日付部分
					const dateInName = '_yyyymmddhhmmss';

					// dateInNameの文字数
					const dateNum = dateInName.length;

					// 必須ファイル名の取得
					let necessaryFile = necessaryFiles[i];
					let necessaryFileName = necessaryFile.textContent;

					// 選択されたファイル名の取得
					let fileName = file.name;

					// 必須ファイルに日付が含まれていれば
					if (necessaryFileName.match(dateInName)) {
						// 選択されたファイルの拡張子のドットの位置（0番目から始まり何番目か）
						let dotNum = fileName.lastIndexOf('.');

						// アンダーバーがあるはずの位置を取得
						let barNum = dotNum - dateNum;

						// アンダーバーの直後から、.の直前まで（日付部分）を取得
						let dateStr = fileName.substring(barNum + 1, dotNum);

						// 間違いなく_があり、その後に数値が日付分続いていれば
						if (
							fileName.charAt(barNum) === '_' &&
							isNum(dateStr) &&
							dateStr.length === dateNum - 1
						) {
							necessaryFileName = necessaryFileName.replace(
								dateInName,
								fileName.substring(barNum, dotNum)
							);
							console.log(necessaryFileName);
						}
					}

					if (file.name == necessaryFileName) {
						flagNecessary = true;
						dt.items.add(file); // dt.filesに追加
						getFileContents(file); // ファイルの中身取得 ※文字化けする＆とても時間がかかる場合がある
						break; // 見つかったら終了
					} else {
						flagNecessary = false;
					}
				}

				// ループ後の結果が必須ファイルならdt.filesをinputAreaに追加
				if (flagNecessary) {
					inputArea.files = dt.files; // これをしないと前のファイルが消えて上書きされてしまう
				} else {
					alert(
						`${file.name}は、選択できません\nファイル名が違います`
					);
					inputArea.files = beforeFiles; // これをしないとinputAreaに入ってしまう
				}
			}
		});
		const myNecessaries = getNecessaryOfInnerText();
		const inputFileNames = getInputFileNames();
		getFileName(inputFileNames);
		addMarkerNecessaryFiles();
		validateCanSubmit(myNecessaries, inputFileNames);
	},
	false
);

// ドラッグ中のイベント
window.addEventListener('DOMContentLoaded', () => {
	const isValid = (e) => e.dataTransfer.types.indexOf('Files') >= 0;
	let flagEnd = false;

	const ddEvent = {
		// ドラッグ開始
		dragenter: (e) => {
			if (submitBtn.classList.contains('submit-ok')) {
				e.preventDefault();
				e.stopPropagation();
			} else {
				changeDropAreaAllScreen();
			}
		},

		// ドラッグが乗ったとき
		dragover: (e) => {
			e.preventDefault();
			e.stopPropagation();

			flagEnd = isNameAreaAllValue();
			if (!flagEnd) {
				inputArea.value = ''; // 初期化
				if (!e.currentTarget.isEqualNode(ddArea) || !isValid(e)) {
					e.dataTransfer.dropEffect = 'none';
					return;
				} else {
					e.dataTransfer.dropEffect = 'copy';
				}
			}
		},

		// ドラッグがはずれたとき
		dragleave: (e) => {
			e.stopPropagation();
			if (!e.currentTarget.isEqualNode(ddArea)) {
				return;
			} else {
				undoDropArea();
				window.location.reload(); // ドラッグがはずれると値が消えてしまうため、リロードでリセットする
			}
		},

		// ドロップしたとき
		drop: (e) => {
			if (submitBtn.classList.contains('submit-ok')) {
				e.preventDefault();
				e.stopPropagation();
			} else {
				undoDropArea();
			}
		},
	};

	Object.keys(ddEvent).forEach((e) => {
		ddArea.addEventListener(e, ddEvent[e]);
		myBody.addEventListener(e, ddEvent[e]);
	});
});

// ************************
// 関数
// ************************
// 引数が数値ならtrueを返す
function isNum(value) {
	return !isNaN(value);
}

// 必須ファイル：HTMLCollectionを配列に変換し、innerTextだけの配列を生成
const getNecessaryOfInnerText = () => {
	necessaryFiles = Array.from(necessaryFiles);
	const arr = necessaryFiles.map((c) => c.innerText);
	return arr;
};

// 選択済ファイル：nameだけの配列を生成
const getInputFileNames = () => {
	let mySelectedFiles = Array.from(inputArea.files);
	const arr = mySelectedFiles.map((c) => c.name);
	return arr;
};

// ファイル名取得
const getFileName = (inputFileNames) => {
	let fileNameArea = '';
	let count = inputFileNames.length;
	if (count == 0) {
		fileNameArea = '選択されていません';
	} else {
		for (i = 0; i < count; i++) {
			fileNameArea += `${inputFileNames[i]}\n`;
		}
	}
	nameArea.value = fileNameArea;
};

// 必須ファイルが選択されたらテキストにマーカーを入れる
const addMarkerNecessaryFiles = () => {
	let nameAreaValue = makeArrayNameAreaVarue();
	myLoop(necessaryFiles, 'necessaryMark', nameAreaValue);
};

// nameAreaに全ファイルの値があればtrueを返す
const isNameAreaAllValue = () => {
	let nameAreaValue = makeArrayNameAreaVarue();
	let bool = myLoop(necessaryFiles, 'necessaryCheck', nameAreaValue);
	return bool;
};

// nameAreaのテキストで配列生成
const makeArrayNameAreaVarue = () => {
	let tmp = nameArea.value;

	// 改行で区切る
	tmp = tmp.split(/\n/);

	// 空の値、0、null、undefinedとなっているものを削除して詰める
	tmp = tmp.filter(Boolean);
	return tmp;
};

// 必須ファイルと選択済ファイルが一致したらsubmitボタンを有効化/ファイル選択は無効化
const validateCanSubmit = (myNecessaries, inputFileNames) => {
	let isMatch = myLoop(myNecessaries, 'validateCanSubmit', inputFileNames);
	if (isMatch) {
		canSubmit();
	} else {
		cannotSubmit();
	}
};

// forループ
// @param array arr:ループを回す配列
// @param string name:ループ名の指定
// @param variant target:比較対象物の指定
const myLoop = (arr, name, target) => {
	let count = arr.length;
	let bool = false;
	for (i = 0; i < count; i++) {
		let item = arr[i];
		switch (name) {
			// ファイル名のテキストのマーク変更
			// myLoop(necessaryFiles, 'necessaryMark', nameAreaValue);
			case 'necessaryMark':
				for (j = 0; j < target.length; j++) {
					let tmp = target[j];
					if (item.textContent == tmp) {
						addClass_found(item);
						break;
					} else {
						removeClass_found(item);
					}
				}
				break;
			case 'necessaryCheck':
			case 'validateCanSubmit':
				if (count == target.length) {
					bool = true;
				}
				return bool;
		} // end switch
	} // next for
};

// ファイルダイアログでキャンセルが押された場合
function isCancel() {
	setTimeout(() => {
		// キャンセルされた場合
		if (!inputArea.value.length) {
			inputArea.files = dt.files; // キャンセル前の値を代入
		}
		myBody.onfocus = null;
	}, 500);
}

// ドラッグ時のPrevent
const myPreventDefaults = (e) => {
	e.preventDefault();
	e.stopPropagation();
};

// ドラッグ開始したら全画面をドロップエリアにする
const changeDropAreaAllScreen = () => {
	addClass_ddeffect(ddArea);
};

// ドロップエリアを元に戻す
const undoDropArea = () => {
	removeClass_ddeffect(ddArea);
};

// submit可
const canSubmit = () => {
	addClass_submitOk(submitBtn);
	submitBtn.disabled = false;
	inputArea.disabled = true;
	submitBtn.focus();
};

// submit不可
const cannotSubmit = () => {
	removeClass_submitOk(submitBtn);
	submitBtn.disabled = true;
	inputArea.disabled = false;
};

// クラス名の追加
const addClass_submitOk = (target) => {
	if (!target.classList.contains('submit-ok')) {
		target.classList.add('submit-ok');
	}
};

const addClass_ddeffect = (target) => {
	if (!target.classList.contains('drag-effect')) {
		target.classList.add('drag-effect');
	}
};

const addClass_found = (target) => {
	if (!target.classList.contains('found')) {
		target.classList.add('found');
	}
};

const addClass_dragenter = (target) => {
	if (!target.classList.contains('drag-enter')) {
		target.classList.add('drag-enter');
	}
};

// クラス名を外す
const removeClass_submitOk = (target) => {
	if (target.classList.contains('submit-ok')) {
		target.classList.remove('submit-ok');
	}
};

const removeClass_ddeffect = (target) => {
	if (target.classList.contains('drag-effect')) {
		target.classList.remove('drag-effect');
	}
};

const removeClass_found = (target) => {
	if (target.classList.contains('found')) {
		target.classList.remove('found');
	}
};

const removeClass_dragenter = (target) => {
	if (target.classList.contains('drag-enter')) {
		target.classList.remove('drag-enter');
	}
};

// -----------------------使ってない-----------------------
// ファイルの中身を取得
const getFileContents = async (myFile) => {
	if (!myFile) return;
	let myTexts = previewArea.value;
	let myText = await myFetchAsText(myFile);
	myTexts += `\n【${myFile.name}】\n'${myText}\n`;
	previewArea.value = myTexts; // 出力
};

// ファイルの中身抽出（promiseを返す）
let myFetchAsText = (myFile) => {
	return new Promise((resolve) => {
		let myReader = new FileReader();
		myReader.onload = (e) => {
			resolve(e.currentTarget.result); // 読み込み結果をresolve
		};
		myReader.readAsText(myFile, 'UTF-8'); //読み込み
	});
};
