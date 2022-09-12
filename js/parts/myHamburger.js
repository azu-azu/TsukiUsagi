// ハンバーガーがクリックされたら
const hamTrigger = document.getElementById('ham-trigger');
hamTrigger.addEventListener('change', () => {
  bodyFix();
});

// Listをクリックしたら
const navList = document.querySelectorAll(".js-ham-close");
navList.forEach((item) => {
  item.addEventListener('click', () => {
    removeChecked();
    removeFix();
  });
});

// ウィンドウ幅が切り替わったら
window.addEventListener('resize', () => {
  removeChecked();
  removeFix();
});




// --------function------------
// チェックボックス
const removeChecked = () => {
  hamTrigger.checked = false;
};

// ボディ固定
const myBody = document.body;
const myBodyClass = myBody.classList;
const bodyFix = () => {
  let myPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (!myBodyClass.contains("is-fix")) { //is-fixがなければ
    addFix();
    myBody.style.top = `-${myPosition}px`;
  } else {
    const scrollY = myBody.style.top;// スクロール位置の記憶
    removeFix();
    window.scrollTo(0, parseInt(scrollY || '0') * -1);// スクロール位置の保持
  };
}

const removeFix = () => {
  myBodyClass.remove('is-fix');
  myBody.style.top = "";
}
const addFix = () => {
  myBodyClass.add('is-fix');
}




