/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../_assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../_assets/js/common/myHeader.js":
/*!****************************************!*\
  !*** ../_assets/js/common/myHeader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// スクロールしたら関数呼び出し
window.addEventListener('scroll', function () {
  headerFade();
  headerBackDown();
}); // ロードしたら関数呼び出し

window.addEventListener('load', function () {
  headerFade();
  headerBackDown();
}); // ----------------------------------------------------
// 関数
// ----------------------------------------------------
// **
// p-header:スクロールしたら消える
// **

var myHeader = document.getElementById("js-p-header");
var headerClass = myHeader.classList;
var headerFadePosition = 50; //スクロールしてページトップから〇〇に達したとき

var headerFade = function headerFade() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= headerFadePosition) {
    headerClass.add('is-fade');
  } else {
    headerClass.remove('is-fade');
  }

  ;
}; // **
// p-header-back:スクロール途中で出現
// **


var layoutHeader = document.getElementById('js-l-header');
var layoutHeaderClass = layoutHeader.classList;

var headerBackDown = function headerBackDown() {
  var myTarget = document.getElementById("works");
  var rect = myTarget.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var targetTop = rect.top + scrollTop;

  if (scrollTop >= targetTop) {
    headerClass.remove('p-header--top', "is-fade"); // クラス名除去  "UpMove"

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
}; // // ウィンドウ幅が切り替わったら関数呼び出し
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

/***/ }),

/***/ "../_assets/js/common/myMilkyWay.js":
/*!******************************************!*\
  !*** ../_assets/js/common/myMilkyWay.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ** particles.jsを使う **
var myParticleID = "js-milky-way-particle";
var particle_shape = "star"; //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）

var numOfStars = 400; //星の数

var colorOfStars = '#ffff55'; //星の色

var opacityOfStars = 0.4; //星の透明度

var sizeOfStars = 3; //星の大きさ

var move_direction = "right"; //流れの向き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)

var move_speed = 1; //シェイプの動くスピード

particlesJS(myParticleID, {
  "particles": {
    "number": {
      "value": numOfStars,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": colorOfStars
    },
    "shape": {
      "type": particle_shape,
      "stroke": {
        //外線
        "width": 0,
        "color": "#fff"
      } // "polygon": { //typeをpolygonにしたときの設定
      //   "nb_sides": 5
      // },
      // "image": { //typeをimageにしたときの設定
      //   "src": "",
      //   "width": 100,
      //   "height": 100
      // }

    },
    "opacity": {
      "value": opacityOfStars,
      "random": true,
      "anim": {
        "enable": true,
        //シェイプの透明度をアニメーションさせる
        "speed": 1,
        "opacity_min": 0.2,
        //透明度の最小値
        "sync": false //全てのシェイプを同時にアニメーションさせる

      }
    },
    "size": {
      "value": sizeOfStars,
      "random": true,
      //シェイプの大きさをランダムにする
      "anim": {
        //シェイプの大きさをアニメーションさせる
        "enable": true,
        "speed": 1,
        "size_min": 0.2,
        //大きさの最小値
        "sync": false //全てのシェイプを同時にアニメーションさせる

      }
    },
    "line_linked": {
      "enable": false // 星と星を線で結ぶ
      // "distance": 500,
      // "color": "#ffffff",
      // "opacity": 0.4,
      // "width": 2

    },
    "move": {
      "enable": true,
      "speed": move_speed,
      "direction": move_direction,
      "random": false,
      "straight": true,
      "out_mode": "out",
      //エリア外に出たシェイプの動き(out、bounceより選択)
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1000,
        "rotateY": 1000
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)

      },
      // "onclick": {
      //   "enable": true,
      //   "mode": "bubble" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
      // },
      "resize": true //canvasのサイズ変更にわせて拡大縮小する

    },
    "modes": {
      // "grab": { //カーソルとシェイプの間に線が表示される
      //   "distance": 400, //カーソルからの反応距離
      //   "line_linked": {
      //     "opacity": 0.5
      //   }
      // },
      "bubble": {
        //シェイプが膨らむ
        "distance": 400,
        "size": 5,
        "duration": 0.3,
        //膨らむシェイプの持続時間(onclick時のみ)
        "opacity": 1,
        "speed": 3 //膨らむシェイプの速度(onclick時のみ)

      } // "repulse": { //シェイプがカーソルから逃げる
      //   "distance": 200, //カーソルからの反応距離
      //   "duration": 0.4
      // },
      // "push": { //シェイプが増える
      //   "particles_nb": 4 //増えるシェイプの数
      // },
      // "remove": {
      //   "particles_nb": 2 //減るシェイプの数
      // }

    }
  },
  "retina_detect": true //Retina Displayに対応する

}); // requestAnimationFrame(update);
// ** canvas使う場合 **
// function random(low, high) {
//   return Math.random() * (high - low) + low;
// }
// class Visual {
//   constructor() {
//     this.canvas = document.querySelector('#canvas-milky-way');
//     this.context = this.canvas.getContext('2d');
//     this.canvasWidth = 0;
//     this.canvasHeight = 0;
//     this.particleLength = 500;
//     this.particles = [];
//     this.particleMaxRadius = 2;
//     this.initialize();
//     this.render();
//   }
//   initialize() {
//     this.resizeCanvas();
//     for (let i = 0; i < this.particleLength; i++) {
//       this.particles.push(this.createParticle(i));
//     }
//   }
//   resizeCanvas() {
//     this.canvasWidth = document.body.offsetWidth;
//     this.canvasHeight = 200;
//     this.canvas.width = this.canvasWidth * window.devicePixelRatio;
//     this.canvas.height = this.canvasHeight * window.devicePixelRatio;
//     this.context = this.canvas.getContext('2d');
//     this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
//   }
//   createParticle(id, isRecreate) {
//     const radius = random(0.5, this.particleMaxRadius);
//     const x = isRecreate ? -radius - random(0, this.canvasWidth) : random(0, this.canvasWidth);
//     let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
//     y += random(-100, 100);
//     const alpha = random(0.05, 1);
//     return {
//       id: id,
//       x: x,
//       y: y,
//       startY: y,
//       radius: radius,
//       defaultRadius: radius,
//       startAngle: 0,
//       endAngle: Math.PI * 2,
//       alpha: alpha,
//       // color: { r: random(255, 0), g: random(255, 0), b: 0 },
//       speed: alpha + 1, //マイナスにすると右から左
//       amplitude: random(50, 200),
//       isBurst: false
//     };
//   }
//   drawParticles() {
//     this.particles.forEach(particle => {
//       // 位置情報更新
//       this.moveParticle(particle);
//       // particle描画
//       this.context.beginPath();
//       this.context.fillStyle = `rgba(255,255,0, .5)`;
//       this.context.shadowColor = 'rgba(255,255,255)';
//       this.context.shadowOffsetX = 0;
//       this.context.shadowOffsetY = 0;
//       this.context.shadowBlur = 30;
//       // this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
//       this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
//       this.context.fill();
//     });
//   }
//   moveParticle(particle) {
//     particle.x += particle.speed;
//     particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
//   }
//   render() {
//     // canvas初期化
//     this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);
//     // particleを描画
//     this.drawParticles();
//     // 画面から消えたら新しいparticleに差し替え
//     this.particles.forEach(particle => {
//       if (particle.x - particle.radius >= this.canvasWidth) {
//         this.particles[particle.id] = this.createParticle(particle.id, true);
//       }
//     });
//     requestAnimationFrame(this.render.bind(this));
//   }
// }
// new Visual();
// div200生成
// const count = 200;
// let parent = document.getElementById('js-milky-way');
// let fragment = document.createDocumentFragment(); //fragment作成
// for (i = 0; i < count; i++) {
//   let milkeyWay = document.createElement('div');
//   milkeyWay.className = "p-milky-way";
//   let milkeyMove = document.createElement('div');
//   milkeyMove.className = "milky-move";
//   let milkeyStar = document.createElement('div');
//   milkeyStar.className = "milky-star";
//   milkeyMove.appendChild(milkeyStar);
//   milkeyWay.appendChild(milkeyMove);
//   fragment.appendChild(milkeyWay);
// }
// parent.appendChild(fragment);

/***/ }),

/***/ "../_assets/js/common/mySwiper.js":
/*!****************************************!*\
  !*** ../_assets/js/common/mySwiper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var swiper = new Swiper('.js-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  //スライドの間の距離
  effect: 'fade',
  loop: true,
  //最後に達したら先頭に戻る
  speed: 300,
  draggable: false,
  mousewheel: {
    forceToAxis: false
  },
  pagination: {
    el: '.swiper-pagination',
    //ページネーションの要素
    clickable: true,
    //クリックに反応させる
    dynamicBullets: false //ページネーションに強弱がつく

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "../_assets/js/common/myTrainFix.js":
/*!******************************************!*\
  !*** ../_assets/js/common/myTrainFix.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 銀河鉄道を固定する
var myTrain = jQuery('.js-train');
var train_pos = myTrain.offset().top;
var train_height = myTrain.outerHeight();
jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > train_pos + 23) {
      myTrain.addClass('fixed');
    } else {
      myTrain.removeClass('fixed');
    }
  });
});

/***/ }),

/***/ "../_assets/js/lib/particles.min.js":
/*!******************************************!*\
  !*** ../_assets/js/lib/particles.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : null;
}

function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
  return a.indexOf(e) > -1;
}

var pJS = function pJS(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: t,
      w: t.offsetWidth,
      h: t.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a), i.tmp.obj = {
    size_value: i.particles.size.value,
    size_anim_speed: i.particles.size.anim.speed,
    move_speed: i.particles.move.speed,
    line_linked_distance: i.particles.line_linked.distance,
    line_linked_width: i.particles.line_linked.width,
    mode_grab_distance: i.interactivity.modes.grab.distance,
    mode_bubble_distance: i.interactivity.modes.bubble.distance,
    mode_bubble_size: i.interactivity.modes.bubble.size,
    mode_repulse_distance: i.interactivity.modes.repulse.distance
  }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == _typeof(e.value)) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
        this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
        r: e.value.r,
        g: e.value.g,
        b: e.value.b
      }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
        h: e.value.h,
        s: e.value.s,
        l: e.value.l
      });
    } else "random" == e.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var n = {};

    switch (i.particles.move.direction) {
      case "top":
        n = {
          x: 0,
          y: -1
        };
        break;

      case "top-right":
        n = {
          x: .5,
          y: -.5
        };
        break;

      case "right":
        n = {
          x: 1,
          y: -0
        };
        break;

      case "bottom-right":
        n = {
          x: .5,
          y: .5
        };
        break;

      case "bottom":
        n = {
          x: 0,
          y: 1
        };
        break;

      case "bottom-left":
        n = {
          x: -.5,
          y: 1
        };
        break;

      case "left":
        n = {
          x: -1,
          y: 0
        };
        break;

      case "top-left":
        n = {
          x: -.5,
          y: -.5
        };
        break;

      default:
        n = {
          x: 0,
          y: 0
        };
    }

    i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var r = i.particles.shape.type;

    if ("object" == _typeof(r)) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];
        this.shape = c;
      }
    } else this.shape = r;

    if ("image" == this.shape) {
      var o = i.particles.shape;
      this.img = {
        src: o.image.src,
        ratio: o.image.width / o.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }

    var a = this;
    if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;
    if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;
    if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";

    switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
      case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
        break;

      case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
        break;

      case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
        break;

      case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
        break;

      case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
        break;

      case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;
        r && e();
    }

    i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];

      if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;
        a.x += a.vx * t, a.y += a.vy * t;
      }

      if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
        x_left: a.radius,
        x_right: i.canvas.w,
        y_top: a.radius,
        y_bottom: i.canvas.h
      };else var s = {
        x_left: -a.radius,
        x_right: i.canvas.w + a.radius,
        y_top: -a.radius,
        y_bottom: i.canvas.h + a.radius
      };

      switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
        case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
      }

      if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];
        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();

    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];
      a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;

      if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;
        i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
      e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
    n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;

    for (var t = 0; e > t; t++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
        x: a ? a.pos_x : Math.random() * i.canvas.w,
        y: a ? a.pos_y : Math.random() * i.canvas.h
      })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }

    function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;
          d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;

        if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
          "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }

    if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;

      if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;
            o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;
            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }
          if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;
            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();

      "mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
        p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }

      i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);

      if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = {
          x: e.x + e.vx,
          y: e.y + e.vy
        };
        t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }

    if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = {
        x: t / n,
        y: s / n
      },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = {
        x: e.x + r.x * l,
        y: e.y + r.y * l
      };
      "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;
      c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);

      if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;

        if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;
          i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;
      i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
        case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
          break;

        case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
          break;

        case "bubble":
          i.tmp.bubble_clicking = !0;
          break;

        case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);
      }
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;
      i.tmp.retina && (e /= 2 * i.canvas.pxratio);
      var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;
      0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
      c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
      return n;
    }),
        n = new Blob([s], {
      type: "image/svg+xml;charset=utf-8"
    }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
    o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;
    e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);

    for (var v = 0; r > v; v++) {
      e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
    }

    e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();
        a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();
        t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};

Object.deepExtend = function (e, a) {
  for (var t in a) {
    a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
  }

  return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
  var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
  if (s.length) for (; s.length > 0;) {
    t.removeChild(s[0]);
  }
  var n = document.createElement("canvas");
  n.className = i, n.style.width = "100%", n.style.height = "100%";
  var r = document.getElementById(e).appendChild(n);
  null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();
  i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);
      window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};

/***/ }),

/***/ "../_assets/js/main.js":
/*!*****************************!*\
  !*** ../_assets/js/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/myHeader.js */ "../_assets/js/common/myHeader.js");
/* harmony import */ var _common_myHeader_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_myHeader_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_myTrainFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/myTrainFix.js */ "../_assets/js/common/myTrainFix.js");
/* harmony import */ var _common_myTrainFix_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_myTrainFix_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_particles_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/particles.min.js */ "../_assets/js/lib/particles.min.js");
/* harmony import */ var _lib_particles_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_particles_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/myMilkyWay.js */ "../_assets/js/common/myMilkyWay.js");
/* harmony import */ var _common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_myMilkyWay_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/mySwiper.js */ "../_assets/js/common/mySwiper.js");
/* harmony import */ var _common_mySwiper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_mySwiper_js__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */
// import '@modules/svgxuse'; //SVGスプライトをIEで使用するためのライブラリ
// import './lib/b_browser_switcher.js'; //ブラウザ判定のためライブラリ
// import './lib/fastclick.js';
// import './common/myFastClick.js';






/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL19hc3NldHMvanMvY29tbW9uL215SGVhZGVyLmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teU1pbGt5V2F5LmpzIiwid2VicGFjazovLy8uLi9fYXNzZXRzL2pzL2NvbW1vbi9teVN3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9jb21tb24vbXlUcmFpbkZpeC5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9saWIvcGFydGljbGVzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vX2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWFkZXJGYWRlIiwiaGVhZGVyQmFja0Rvd24iLCJteUhlYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkZXJDbGFzcyIsImNsYXNzTGlzdCIsImhlYWRlckZhZGVQb3NpdGlvbiIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkIiwicmVtb3ZlIiwibGF5b3V0SGVhZGVyIiwibGF5b3V0SGVhZGVyQ2xhc3MiLCJteVRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YXJnZXRUb3AiLCJ0b3AiLCJjb250YWlucyIsIm15UGFydGljbGVJRCIsInBhcnRpY2xlX3NoYXBlIiwibnVtT2ZTdGFycyIsImNvbG9yT2ZTdGFycyIsIm9wYWNpdHlPZlN0YXJzIiwic2l6ZU9mU3RhcnMiLCJtb3ZlX2RpcmVjdGlvbiIsIm1vdmVfc3BlZWQiLCJwYXJ0aWNsZXNKUyIsInN3aXBlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJlZmZlY3QiLCJsb29wIiwic3BlZWQiLCJkcmFnZ2FibGUiLCJtb3VzZXdoZWVsIiwiZm9yY2VUb0F4aXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJkeW5hbWljQnVsbGV0cyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJteVRyYWluIiwialF1ZXJ5IiwidHJhaW5fcG9zIiwib2Zmc2V0IiwidHJhaW5faGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCIkIiwic2Nyb2xsIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhleFRvUmdiIiwiZSIsImEiLCJyZXBsYWNlIiwidCIsImkiLCJleGVjIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJjbGFtcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJpc0luQXJyYXkiLCJpbmRleE9mIiwicEpTIiwicXVlcnlTZWxlY3RvciIsImNhbnZhcyIsInciLCJvZmZzZXRXaWR0aCIsImgiLCJvZmZzZXRIZWlnaHQiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImRlbnNpdHkiLCJlbmFibGUiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJ3aWR0aCIsInBvbHlnb24iLCJuYl9zaWRlcyIsImltYWdlIiwic3JjIiwiaGVpZ2h0Iiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJhcnJheSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwibW91c2UiLCJyZXRpbmFfZGV0ZWN0IiwiZm4iLCJpbnRlcmFjdCIsInZlbmRvcnMiLCJ0bXAiLCJPYmplY3QiLCJkZWVwRXh0ZW5kIiwib2JqIiwic2l6ZV92YWx1ZSIsInNpemVfYW5pbV9zcGVlZCIsImxpbmVfbGlua2VkX2Rpc3RhbmNlIiwibGluZV9saW5rZWRfd2lkdGgiLCJtb2RlX2dyYWJfZGlzdGFuY2UiLCJtb2RlX2J1YmJsZV9kaXN0YW5jZSIsIm1vZGVfYnViYmxlX3NpemUiLCJtb2RlX3JlcHVsc2VfZGlzdGFuY2UiLCJyZXRpbmFJbml0IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInB4cmF0aW8iLCJyZXRpbmEiLCJjYW52YXNJbml0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhc1NpemUiLCJwYXJ0aWNsZXNFbXB0eSIsInBhcnRpY2xlc0NyZWF0ZSIsInBhcnRpY2xlc0RyYXciLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsImNhbnZhc1BhaW50IiwiZmlsbFJlY3QiLCJjYW52YXNDbGVhciIsImNsZWFyUmVjdCIsInBhcnRpY2xlIiwicmFkaXVzIiwic2l6ZV9zdGF0dXMiLCJ2cyIsIngiLCJ5IiwiY2hlY2tPdmVybGFwIiwiQXJyYXkiLCJzIiwiZmxvb3IiLCJsZW5ndGgiLCJyZ2IiLCJsIiwiaHNsIiwib3BhY2l0eV9zdGF0dXMiLCJ2byIsIm4iLCJ2eCIsInZ5IiwidnhfaSIsInZ5X2kiLCJjIiwibyIsImltZyIsInJhdGlvIiwiaW1nX3R5cGUiLCJzb3VyY2Vfc3ZnIiwiY3JlYXRlU3ZnSW1nIiwicHVzaGluZyIsImxvYWRlZCIsInByb3RvdHlwZSIsImRyYXciLCJkcmF3SW1hZ2UiLCJyYWRpdXNfYnViYmxlIiwib3BhY2l0eV9idWJibGUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImRyYXdTaGFwZSIsImltZ19vYmoiLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImZpbGwiLCJwYXJ0aWNsZXNVcGRhdGUiLCJ4X2xlZnQiLCJ4X3JpZ2h0IiwieV90b3AiLCJ5X2JvdHRvbSIsImdyYWJQYXJ0aWNsZSIsImJ1YmJsZVBhcnRpY2xlIiwicmVwdWxzZVBhcnRpY2xlIiwibGlua1BhcnRpY2xlcyIsImF0dHJhY3RQYXJ0aWNsZXMiLCJib3VuY2VQYXJ0aWNsZXMiLCJwYXJ0aWNsZXNSZWZyZXNoIiwiY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrQW5pbUZyYW1lIiwiZHJhd0FuaW1GcmFtZSIsImNvdW50X3N2ZyIsInN0YXJ0Iiwic3FydCIsImNvbG9yX3JnYl9saW5lIiwibW92ZVRvIiwibGluZVRvIiwicHVzaFBhcnRpY2xlcyIsInBvc194IiwicG9zX3kiLCJyZW1vdmVQYXJ0aWNsZXMiLCJzcGxpY2UiLCJidWJibGVfZHVyYXRpb25fZW5kIiwicCIsImQiLCJ2Iiwic3RhdHVzIiwiYnViYmxlX2NsaWNraW5nIiwiY2xpY2tfcG9zX3giLCJjbGlja19wb3NfeSIsIkRhdGUiLCJnZXRUaW1lIiwiY2xpY2tfdGltZSIsImF0YW4yIiwidSIsImNvcyIsInNpbiIsInBvdyIsInJlcHVsc2VfZmluaXNoIiwicmVwdWxzZV9jb3VudCIsInJlcHVsc2VfY2xpY2tpbmciLCJtIiwiZXZlbnRzTGlzdGVuZXJzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldFRpbWVvdXQiLCJhYnMiLCJCbG9iIiwiVVJMIiwid2Via2l0VVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiSW1hZ2UiLCJyZXZva2VPYmplY3RVUkwiLCJkZXN0cm95cEpTIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwSlNEb20iLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsImV4cG9ydEltZyIsIm9wZW4iLCJ0b0RhdGFVUkwiLCJsb2FkSW1nIiwiaW1nX2Vycm9yIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY3VycmVudFRhcmdldCIsInJlc3BvbnNlIiwiY2hlY2tCZWZvcmVEcmF3IiwiY29uc29sZSIsImxvZyIsInNlbmQiLCJyZXF1ZXN0QW5pbUZyYW1lIiwiY2hlY2siLCJpbml0Iiwic3Vic3RyIiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJjYWxsZWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImxvYWQiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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QUFUO0FBQW1DLENBQW5rQyxFQUFva0M3RCxNQUFNLENBQUMrQixXQUFQLENBQW1CeVIsSUFBbkIsR0FBd0IsVUFBUzVQLENBQVQsRUFBV0MsQ0FBWCxFQUFhRSxDQUFiLEVBQWU7QUFBQyxNQUFJQyxDQUFDLEdBQUMsSUFBSXdOLGNBQUosRUFBTjtBQUF5QnhOLEdBQUMsQ0FBQ29OLElBQUYsQ0FBTyxLQUFQLEVBQWF2TixDQUFiLEdBQWdCRyxDQUFDLENBQUN5TixrQkFBRixHQUFxQixVQUFTNU4sQ0FBVCxFQUFXO0FBQUMsUUFBRyxLQUFHRyxDQUFDLENBQUMwTixVQUFSLEVBQW1CLElBQUcsT0FBSzFOLENBQUMsQ0FBQytLLE1BQVYsRUFBaUI7QUFBQyxVQUFJbkUsQ0FBQyxHQUFDNkksSUFBSSxDQUFDQyxLQUFMLENBQVc3UCxDQUFDLENBQUM4TixhQUFGLENBQWdCQyxRQUEzQixDQUFOO0FBQTJDNVIsWUFBTSxDQUFDK0IsV0FBUCxDQUFtQjZCLENBQW5CLEVBQXFCZ0gsQ0FBckIsR0FBd0I3RyxDQUFDLElBQUVBLENBQUMsRUFBNUI7QUFBK0IsS0FBNUYsTUFBaUcrTixPQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBc0MvTixDQUFDLENBQUMrSyxNQUFwRCxHQUE0RCtDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaLENBQTVEO0FBQTZHLEdBQWxSLEVBQW1SL04sQ0FBQyxDQUFDZ08sSUFBRixFQUFuUjtBQUE0UixDQUFqNkMsQzs7Ozs7Ozs7Ozs7O0FDUnhqcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLi9fYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCIvLyDjgrnjgq/jg63jg7zjg6vjgZfjgZ/jgonplqLmlbDlkbzjgbPlh7rjgZdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG5cdGhlYWRlckZhZGUoKTtcblx0aGVhZGVyQmFja0Rvd24oKTtcbn0pO1xuXG4vLyDjg63jg7zjg4njgZfjgZ/jgonplqLmlbDlkbzjgbPlh7rjgZdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXHRoZWFkZXJGYWRlKCk7XG5cdGhlYWRlckJhY2tEb3duKCk7XG59KTtcblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIOmWouaVsFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gKipcbi8vIHAtaGVhZGVyOuOCueOCr+ODreODvOODq+OBl+OBn+OCiea2iOOBiOOCi1xuLy8gKipcbmNvbnN0IG15SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1wLWhlYWRlclwiKTtcbmNvbnN0IGhlYWRlckNsYXNzID0gbXlIZWFkZXIuY2xhc3NMaXN0O1xuY29uc3QgaGVhZGVyRmFkZVBvc2l0aW9uID0gNTA7Ly/jgrnjgq/jg63jg7zjg6vjgZfjgabjg5rjg7zjgrjjg4jjg4Pjg5fjgYvjgonjgIfjgIfjgavpgZTjgZfjgZ/jgajjgY1cblxuY29uc3QgaGVhZGVyRmFkZSA9ICgpID0+IHtcblx0bGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRpZiAoc2Nyb2xsVG9wID49IGhlYWRlckZhZGVQb3NpdGlvbikge1xuXHRcdGhlYWRlckNsYXNzLmFkZCgnaXMtZmFkZScpO1xuXHR9IGVsc2Uge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZSgnaXMtZmFkZScpO1xuXHR9O1xufTtcblxuLy8gKipcbi8vIHAtaGVhZGVyLWJhY2s644K544Kv44Ot44O844Or6YCU5Lit44Gn5Ye654++XG4vLyAqKlxuY29uc3QgbGF5b3V0SGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWwtaGVhZGVyJyk7XG5jb25zdCBsYXlvdXRIZWFkZXJDbGFzcyA9IGxheW91dEhlYWRlci5jbGFzc0xpc3Q7XG5cbmNvbnN0IGhlYWRlckJhY2tEb3duID0gKCkgPT4ge1xuXHRsZXQgbXlUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzXCIpO1xuXHRsZXQgcmVjdCA9IG15VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdGxldCB0YXJnZXRUb3AgPSByZWN0LnRvcCArIHNjcm9sbFRvcDtcblxuXHRpZiAoc2Nyb2xsVG9wID49IHRhcmdldFRvcCkge1xuXHRcdGhlYWRlckNsYXNzLnJlbW92ZSgncC1oZWFkZXItLXRvcCcsIFwiaXMtZmFkZVwiKTsvLyDjgq/jg6njgrnlkI3pmaTljrsgIFwiVXBNb3ZlXCJcblx0XHRoZWFkZXJDbGFzcy5hZGQoJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgICAnRG93bk1vdmUnXG5cdFx0bGF5b3V0SGVhZGVyQ2xhc3MuYWRkKCdiYWNrJyk7Ly8g44Kv44Op44K55ZCN6L+95YqgXG5cblx0fSBlbHNlIHtcblx0XHRpZiAobGF5b3V0SGVhZGVyQ2xhc3MuY29udGFpbnMoJ2JhY2snKSkgey8v44GZ44Gn44Gr44Kv44Op44K55ZCN44GM44Gk44GE44Gm44GE44Gf44KJIFwiRG93bk1vdmVcIlxuXHRcdFx0bGF5b3V0SGVhZGVyQ2xhc3MucmVtb3ZlKCdiYWNrJyk7Ly8g44Kv44Op44K55ZCN6Zmk5Y67XG5cdFx0XHRoZWFkZXJDbGFzcy5yZW1vdmUoJ3AtaGVhZGVyLS1iYWNrJyk7Ly8g44Kv44Op44K55ZCN6Zmk5Y67ICdEb3duTW92ZSdcblx0XHRcdGhlYWRlckNsYXNzLmFkZCgncC1oZWFkZXItLXRvcCcpOy8vIOOCr+ODqeOCueWQjei/veWKoCAgJ1VwTW92ZSdcblx0XHR9XG5cdH1cbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gLy8g44Km44Kj44Oz44OJ44Km5bmF44GM5YiH44KK5pu/44KP44Gj44Gf44KJ6Zai5pWw5ZG844Gz5Ye644GXXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuLy8gXHRyZXNpemVSZW1vdmVDbGFzcygpOy8vaXMtb3BlbiwgaXMtY2xvc2XjgpLlpJbjgZlcbi8vIFx0Ym9keUZpeGVkTm9uZSgpOy8vYm9keeOBrmZpeGVk44KS5aSW44GZXG4vLyB9KTtcblxuXG4vLyAqKlxuLy8g44OP44Oz44OQ44O844Ks44O844Oc44K/44Oz77ya44K/44OD44OBL+OCr+ODquODg+OCr1xuLy8gKipcbi8vIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1oYW1idXJnZXInKTtcbi8vIGNvbnN0IGhhbWJ1cmdlckNsYXNzID0gaGFtYnVyZ2VyLmNsYXNzTGlzdDtcbi8vIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LmJvZHk7XG4vLyBjb25zdCBteUJvZHlDbGFzcyA9IG15Qm9keS5jbGFzc0xpc3Q7XG5cbi8vIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcbi8vIFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcbi8vIFx0aGFtYnVyZ2VyQ2xpY2soKTtcbi8vIH0pO1xuXG4vLyBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyBcdGhhbWJ1cmdlckNsaWNrKCk7XG4vLyB9KTtcblxuXG4vLyAqKlxuLy8g44OK44OT44Ky44O844K344On44Oz44Gu44Oq44K544OI44KS44Kv44Oq44OD44Kv44GX44Gf44KJaXMtb3BlbuOCkua2iOOBme+8muOCv+ODg+ODgS/jgq/jg6rjg4Pjgq9cbi8vICoqXG4vLyBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1oYW0tY2xvc2VcIik7XG5cbi8vIG5hdkxpc3QuZm9yRWFjaCgoZWxtKSA9PiB7XG4vLyBcdGVsbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcbi8vIFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuLy8gXHRcdG5hdkNsaWNrKCk7Ly8gaXMtb3BlbuOCkuWkluOBmSxpcy1jbG9zZeOCkuS7mOOBkeOCiyxib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIFx0fSk7XG4vLyB9KTtcblxuLy8gbmF2TGlzdC5mb3JFYWNoKChlbG0pID0+IHtcbi8vIFx0ZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy8gXHRcdG5hdkNsaWNrKCk7XG4vLyBcdH0pO1xuLy8gfSk7XG5cblxuXG4vLyBjb25zdCBoYW1idXJnZXJDbGljayA9ICgpID0+IHtcbi8vIFx0bGV0IG15UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuLy8gXHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSkgey8vaXMtY2xvc2XjgYzjgYLjgaPjgZ/jgolcbi8vIFx0XHRyZW1vdmVDbG9zZSgpOy8vaXMtY2xvc2XjgpLlpJbjgZlcbi8vIFx0fSBlbHNlIHtcblxuLy8gXHRcdGlmIChoYW1idXJnZXJDbGFzcy5jb250YWlucyhcImlzLW9wZW5cIikpIHsvL2lzLW9wZW7jgYzjgYLjgaPjgZ/jgolcbi8vIFx0XHRcdGNvbnN0IHNjcm9sbFkgPSBteUJvZHkuc3R5bGUudG9wOy8vIOOCueOCr+ODreODvOODq+S9jee9ruOBruiomOaGtlxuLy8gXHRcdFx0cmVtb3ZlT3BlbigpOy8vIGlzLW9wZW7jgpLlpJbjgZlcbi8vIFx0XHRcdGFkZENsb3NlKCk7Ly8gaXMtY2xvc2XjgpLku5jjgZHjgotcbi8vIFx0XHRcdGJvZHlGaXhlZE5vbmUoKTsvLyBib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChzY3JvbGxZIHx8ICcwJykgKiAtMSk7Ly8g44K544Kv44Ot44O844Or5L2N572u44Gu5L+d5oyBXG4vLyBcdFx0fVxuLy8gXHR9O1xuXG4vLyBcdC8vIGlzLWNsb3Nl44KCaXMtb3BlbuOCguOBquOBi+OBo+OBn+OCiVxuLy8gXHRpZiAoIWhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtY2xvc2VcIikgJiYgIWhhbWJ1cmdlckNsYXNzLmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xuLy8gXHRcdGFkZE9wZW4oKTsvL2lzLW9wZW7jgpLjgaTjgZHjgotcbi8vIFx0XHRteUJvZHkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4vLyBcdFx0bXlCb2R5LnN0eWxlLnRvcCA9IGAtJHtteVBvc2l0aW9ufXB4YDtcbi8vIFx0fTtcbi8vIH07XG5cblxuLy8gLy8gKipcbi8vIC8v44Km44Kj44Oz44OJ44Km5bmF44GM5YiH44KK5pu/44KP44Gj44Gf44KJ44CBaXMtb3Blbnx8aXMtY2xvc2XjgpLlpJbjgZlcbi8vIC8vICoqXG4vLyBjb25zdCBtb29uTWluaVNpemUgPSA1NzA7XG4vLyBjb25zdCByZXNpemVSZW1vdmVDbGFzcyA9ICgpID0+IHtcbi8vIFx0bGV0IHggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuLy8gXHRpZiAoeCA+PSBtb29uTWluaVNpemUpIHtcbi8vIFx0XHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7Ly9pcy1vcGVu44GM44GC44Gj44Gf44KJXG4vLyBcdFx0XHRyZW1vdmVPcGVuKCk7Ly8gaXMtb3BlbuOCkuWkluOBmVxuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRpZiAoaGFtYnVyZ2VyQ2xhc3MuY29udGFpbnMoXCJpcy1jbG9zZVwiKSkgey8vaXMtY2xvc2XjgYzjgYLjgaPjgZ/jgolcbi8vIFx0XHRcdFx0cmVtb3ZlQ2xvc2UoKTsvL2lzLWNsb3Nl44KS5aSW44GZXG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9O1xuXG5cbi8vIC8vICoqXG4vLyAvLyBpcy1jbG9zZeOCkuWkluOBmVxuLy8gLy8gKipcbi8vIGNvbnN0IHJlbW92ZUNsb3NlID0gKCkgPT4ge1xuLy8gXHRoYW1idXJnZXJDbGFzcy5yZW1vdmUoJ2lzLWNsb3NlJyk7XG4vLyBcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtY2xvc2UnKTtcbi8vIH07XG5cbi8vIC8vICoqXG4vLyAvLyBpcy1jbG9zZeOCkuS7mOOBkeOCi1xuLy8gLy8gKipcbi8vIGNvbnN0IGFkZENsb3NlID0gKCkgPT4ge1xuLy8gXHRoYW1idXJnZXJDbGFzcy5hZGQoJ2lzLWNsb3NlJyk7XG4vLyBcdG15Qm9keUNsYXNzLmFkZCgnaXMtY2xvc2UnKTtcbi8vIH07XG5cbi8vIC8vICoqXG4vLyAvLyBpcy1vcGVu44KS5aSW44GZXG4vLyAvLyAqKlxuLy8gY29uc3QgcmVtb3ZlT3BlbiA9ICgpID0+IHtcbi8vIFx0aGFtYnVyZ2VyQ2xhc3MucmVtb3ZlKCdpcy1vcGVuJyk7XG4vLyBcdG15Qm9keUNsYXNzLnJlbW92ZSgnaXMtb3BlbicpO1xuLy8gfTtcblxuLy8gLy8gKipcbi8vIC8vIGlzLW9wZW7jgpLku5jjgZHjgotcbi8vIC8vICoqXG4vLyBjb25zdCBhZGRPcGVuID0gKCkgPT4ge1xuLy8gXHRoYW1idXJnZXJDbGFzcy5hZGQoJ2lzLW9wZW4nKTtcbi8vIFx0bXlCb2R5Q2xhc3MuYWRkKCdpcy1vcGVuJyk7XG4vLyB9O1xuXG5cbi8vIC8vICoqXG4vLyAvLyBib2R544GuZml4ZWTjgpLlpJbjgZlcbi8vIC8vICoqXG4vLyBjb25zdCBib2R5Rml4ZWROb25lID0gKCkgPT4ge1xuLy8gXHRteUJvZHkuc3R5bGUucG9zaXRpb24gPSBcIlwiO1xuLy8gXHRteUJvZHkuc3R5bGUudG9wID0gXCJcIjtcbi8vIFx0bXlCb2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBcIlwiO1xuLy8gfTtcblxuLy8gLy8gKipcbi8vIC8vIOODiuODk+OCsuODvOOCt+ODp+ODs+OCr+ODquODg+OCr+OBvuOBqOOCgVxuLy8gLy8gKipcbi8vIGNvbnN0IG5hdkNsaWNrID0gKCkgPT4ge1xuLy8gXHRyZW1vdmVPcGVuKCk7Ly8gaXMtb3BlbuOCkuWkluOBmVxuLy8gXHRhZGRDbG9zZSgpOy8vIGlzLWNsb3Nl44KS5LuY44GR44KLXG4vLyBcdGJvZHlGaXhlZE5vbmUoKTsvL2JvZHnjga5maXhlZOOCkuWkluOBmVxuLy8gfTtcblxuXG5cblxuIiwiLy8gKiogcGFydGljbGVzLmpz44KS5L2/44GGICoqXG5jb25zdCBteVBhcnRpY2xlSUQgPSBcImpzLW1pbGt5LXdheS1wYXJ0aWNsZVwiO1xuY29uc3QgcGFydGljbGVfc2hhcGUgPSBcInN0YXJcIjsgLy/jgrfjgqfjgqTjg5fjga7lvaLvvIhjaXJjbGU65Li444CBZWRnZTrlm5vop5LjgIF0cmlhbmdsZTrkuInop5LjgIFwb2x5Z29uOuWkmuinkuW9ouOAgXN0YXI65pif5Z6L44CBaW1hZ2U655S75YOP77yJXG5jb25zdCBudW1PZlN0YXJzID0gNDAwOyAvL+aYn+OBruaVsFxuY29uc3QgY29sb3JPZlN0YXJzID0gJyNmZmZmNTUnOyAvL+aYn+OBruiJslxuY29uc3Qgb3BhY2l0eU9mU3RhcnMgPSAwLjQ7IC8v5pif44Gu6YCP5piO5bqmXG5jb25zdCBzaXplT2ZTdGFycyA9IDM7IC8v5pif44Gu5aSn44GN44GVXG5jb25zdCBtb3ZlX2RpcmVjdGlvbiA9IFwicmlnaHRcIjsgLy/mtYHjgozjga7lkJHjgY0obm9uZeOAgXRvcOOAgXRvcC1yaWdodOOAgXJpZ2h044CBYm90dG9tLXJpZ2h044CBYm90dG9t44CBYm90dG9tLWxlZnTjgIFsZWZ044CBdG9wLWxlZnTjgojjgorpgbjmip4pXG5jb25zdCBtb3ZlX3NwZWVkID0gMTsgIC8v44K344Kn44Kk44OX44Gu5YuV44GP44K544OU44O844OJXG5cbnBhcnRpY2xlc0pTKG15UGFydGljbGVJRCwge1xuICBcInBhcnRpY2xlc1wiOiB7XG4gICAgXCJudW1iZXJcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBudW1PZlN0YXJzLFxuICAgICAgXCJkZW5zaXR5XCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcInZhbHVlXCI6IGNvbG9yT2ZTdGFycyxcbiAgICB9LFxuICAgIFwic2hhcGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IHBhcnRpY2xlX3NoYXBlLFxuICAgICAgXCJzdHJva2VcIjogeyAvL+Wklue3mlxuICAgICAgICBcIndpZHRoXCI6IDAsXG4gICAgICAgIFwiY29sb3JcIjogXCIjZmZmXCJcbiAgICAgIH0sXG4gICAgICAvLyBcInBvbHlnb25cIjogeyAvL3R5cGXjgpJwb2x5Z29u44Gr44GX44Gf44Go44GN44Gu6Kit5a6aXG4gICAgICAvLyAgIFwibmJfc2lkZXNcIjogNVxuICAgICAgLy8gfSxcbiAgICAgIC8vIFwiaW1hZ2VcIjogeyAvL3R5cGXjgpJpbWFnZeOBq+OBl+OBn+OBqOOBjeOBruioreWumlxuICAgICAgLy8gICBcInNyY1wiOiBcIlwiLFxuICAgICAgLy8gICBcIndpZHRoXCI6IDEwMCxcbiAgICAgIC8vICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAvLyB9XG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiBvcGFjaXR5T2ZTdGFycyxcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsXG4gICAgICBcImFuaW1cIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLCAvL+OCt+OCp+OCpOODl+OBrumAj+aYjuW6puOCkuOCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgICBcInNwZWVkXCI6IDEsXG4gICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4yLCAvL+mAj+aYjuW6puOBruacgOWwj+WApFxuICAgICAgICBcInN5bmNcIjogZmFsc2UgLy/lhajjgabjga7jgrfjgqfjgqTjg5fjgpLlkIzmmYLjgavjgqLjg4vjg6Hjg7zjgrfjg6fjg7PjgZXjgZvjgotcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICBcInZhbHVlXCI6IHNpemVPZlN0YXJzLFxuICAgICAgXCJyYW5kb21cIjogdHJ1ZSwgLy/jgrfjgqfjgqTjg5fjga7lpKfjgY3jgZXjgpLjg6njg7Pjg4Djg6DjgavjgZnjgotcbiAgICAgIFwiYW5pbVwiOiB7IC8v44K344Kn44Kk44OX44Gu5aSn44GN44GV44KS44Ki44OL44Oh44O844K344On44Oz44GV44Gb44KLXG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwic3BlZWRcIjogMSxcbiAgICAgICAgXCJzaXplX21pblwiOiAwLjIsIC8v5aSn44GN44GV44Gu5pyA5bCP5YCkXG4gICAgICAgIFwic3luY1wiOiBmYWxzZSAvL+WFqOOBpuOBruOCt+OCp+OCpOODl+OCkuWQjOaZguOBq+OCouODi+ODoeODvOOCt+ODp+ODs+OBleOBm+OCi1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICBcImVuYWJsZVwiOiBmYWxzZSwvLyDmmJ/jgajmmJ/jgpLnt5rjgafntZDjgbZcbiAgICAgIC8vIFwiZGlzdGFuY2VcIjogNTAwLFxuICAgICAgLy8gXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIC8vIFwib3BhY2l0eVwiOiAwLjQsXG4gICAgICAvLyBcIndpZHRoXCI6IDJcbiAgICB9LFxuICAgIFwibW92ZVwiOiB7XG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgXCJzcGVlZFwiOiBtb3ZlX3NwZWVkLFxuICAgICAgXCJkaXJlY3Rpb25cIjogbW92ZV9kaXJlY3Rpb24sXG4gICAgICBcInJhbmRvbVwiOiBmYWxzZSxcbiAgICAgIFwic3RyYWlnaHRcIjogdHJ1ZSxcbiAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIiwgLy/jgqjjg6rjgqLlpJbjgavlh7rjgZ/jgrfjgqfjgqTjg5fjga7li5XjgY0ob3V044CBYm91bmNl44KI44KK6YG45oqeKVxuICAgICAgXCJib3VuY2VcIjogZmFsc2UsXG4gICAgICBcImF0dHJhY3RcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJyb3RhdGVYXCI6IDEwMDAsXG4gICAgICAgIFwicm90YXRlWVwiOiAxMDAwXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcImludGVyYWN0aXZpdHlcIjoge1xuICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXG4gICAgXCJldmVudHNcIjoge1xuICAgICAgXCJvbmhvdmVyXCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJtb2RlXCI6IFwiYnViYmxlXCIgLy/jg57jgqbjgrnjgqrjg7zjg5Djg7zmmYLjgavnmbrli5XjgZnjgovli5XjgY0o5LiL6KiYbW9kZXPlhoXjga5ncmFi44CBcmVwdWxzZeOAgWJ1YmJsZeOCiOOCiumBuOaKnilcbiAgICAgIH0sXG4gICAgICAvLyBcIm9uY2xpY2tcIjoge1xuICAgICAgLy8gICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgLy8gICBcIm1vZGVcIjogXCJidWJibGVcIiAvL+OCr+ODquODg+OCr+aZguOBq+eZuuWLleOBmeOCi+WLleOBjSjkuIvoqJhtb2Rlc+WGheOBrmdyYWLjgIFyZXB1bHNl44CBYnViYmxl44CBcHVzaOOAgXJlbW92ZeOCiOOCiumBuOaKnilcbiAgICAgIC8vIH0sXG4gICAgICBcInJlc2l6ZVwiOiB0cnVlIC8vY2FudmFz44Gu44K144Kk44K65aSJ5pu044Gr44KP44Gb44Gm5ouh5aSn57iu5bCP44GZ44KLXG4gICAgfSxcbiAgICBcIm1vZGVzXCI6IHtcbiAgICAgIC8vIFwiZ3JhYlwiOiB7IC8v44Kr44O844K944Or44Go44K344Kn44Kk44OX44Gu6ZaT44Gr57ea44GM6KGo56S644GV44KM44KLXG4gICAgICAvLyAgIFwiZGlzdGFuY2VcIjogNDAwLCAvL+OCq+ODvOOCveODq+OBi+OCieOBruWPjeW/nOi3nembolxuICAgICAgLy8gICBcImxpbmVfbGlua2VkXCI6IHtcbiAgICAgIC8vICAgICBcIm9wYWNpdHlcIjogMC41XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sXG4gICAgICBcImJ1YmJsZVwiOiB7IC8v44K344Kn44Kk44OX44GM6Iao44KJ44KAXG4gICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxuICAgICAgICBcInNpemVcIjogNSxcbiAgICAgICAgXCJkdXJhdGlvblwiOiAwLjMsIC8v6Iao44KJ44KA44K344Kn44Kk44OX44Gu5oyB57aa5pmC6ZaTKG9uY2xpY2vmmYLjga7jgb8pXG4gICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICBcInNwZWVkXCI6IDMgLy/ohqjjgonjgoDjgrfjgqfjgqTjg5fjga7pgJ/luqYob25jbGlja+aZguOBruOBvylcbiAgICAgIH0sXG4gICAgICAvLyBcInJlcHVsc2VcIjogeyAvL+OCt+OCp+OCpOODl+OBjOOCq+ODvOOCveODq+OBi+OCiemAg+OBkuOCi1xuICAgICAgLy8gICBcImRpc3RhbmNlXCI6IDIwMCwgLy/jgqvjg7zjgr3jg6vjgYvjgonjga7lj43lv5zot53pm6JcbiAgICAgIC8vICAgXCJkdXJhdGlvblwiOiAwLjRcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcInB1c2hcIjogeyAvL+OCt+OCp+OCpOODl+OBjOWil+OBiOOCi1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiA0IC8v5aKX44GI44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9LFxuICAgICAgLy8gXCJyZW1vdmVcIjoge1xuICAgICAgLy8gICBcInBhcnRpY2xlc19uYlwiOiAyIC8v5rib44KL44K344Kn44Kk44OX44Gu5pWwXG4gICAgICAvLyB9XG4gICAgfVxuICB9LFxuICBcInJldGluYV9kZXRlY3RcIjogdHJ1ZSAvL1JldGluYSBEaXNwbGF544Gr5a++5b+c44GZ44KLXG59KTtcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuXG5cblxuXG5cblxuLy8gKiogY2FudmFz5L2/44GG5aC05ZCIICoqXG4vLyBmdW5jdGlvbiByYW5kb20obG93LCBoaWdoKSB7XG4vLyAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpICsgbG93O1xuLy8gfVxuXG4vLyBjbGFzcyBWaXN1YWwge1xuLy8gICBjb25zdHJ1Y3RvcigpIHtcbi8vICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMtbWlsa3ktd2F5Jyk7XG4vLyAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgICB0aGlzLmNhbnZhc1dpZHRoID0gMDtcbi8vICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IDA7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZUxlbmd0aCA9IDUwMDtcbi8vICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuLy8gICAgIHRoaXMucGFydGljbGVNYXhSYWRpdXMgPSAyO1xuXG4vLyAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4vLyAgICAgdGhpcy5yZW5kZXIoKTtcbi8vICAgfVxuXG4vLyAgIGluaXRpYWxpemUoKSB7XG4vLyAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVMZW5ndGg7IGkrKykge1xuLy8gICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaCh0aGlzLmNyZWF0ZVBhcnRpY2xlKGkpKTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICByZXNpemVDYW52YXMoKSB7XG4vLyAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4vLyAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSAyMDA7XG4vLyAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhc1dpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4vLyAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbi8vICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIHRoaXMuY29udGV4dC5zY2FsZSh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgd2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuLy8gICB9XG5cbi8vICAgY3JlYXRlUGFydGljbGUoaWQsIGlzUmVjcmVhdGUpIHtcbi8vICAgICBjb25zdCByYWRpdXMgPSByYW5kb20oMC41LCB0aGlzLnBhcnRpY2xlTWF4UmFkaXVzKTtcbi8vICAgICBjb25zdCB4ID0gaXNSZWNyZWF0ZSA/IC1yYWRpdXMgLSByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCkgOiByYW5kb20oMCwgdGhpcy5jYW52YXNXaWR0aCk7XG4vLyAgICAgbGV0IHkgPSByYW5kb20odGhpcy5jYW52YXNIZWlnaHQgLyAyIC0gMTUwLCB0aGlzLmNhbnZhc0hlaWdodCAvIDIgKyAxNTApO1xuLy8gICAgIHkgKz0gcmFuZG9tKC0xMDAsIDEwMCk7XG4vLyAgICAgY29uc3QgYWxwaGEgPSByYW5kb20oMC4wNSwgMSk7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgaWQ6IGlkLFxuLy8gICAgICAgeDogeCxcbi8vICAgICAgIHk6IHksXG4vLyAgICAgICBzdGFydFk6IHksXG4vLyAgICAgICByYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIGRlZmF1bHRSYWRpdXM6IHJhZGl1cyxcbi8vICAgICAgIHN0YXJ0QW5nbGU6IDAsXG4vLyAgICAgICBlbmRBbmdsZTogTWF0aC5QSSAqIDIsXG4vLyAgICAgICBhbHBoYTogYWxwaGEsXG4vLyAgICAgICAvLyBjb2xvcjogeyByOiByYW5kb20oMjU1LCAwKSwgZzogcmFuZG9tKDI1NSwgMCksIGI6IDAgfSxcbi8vICAgICAgIHNwZWVkOiBhbHBoYSArIDEsIC8v44Oe44Kk44OK44K544Gr44GZ44KL44Go5Y+z44GL44KJ5bemXG4vLyAgICAgICBhbXBsaXR1ZGU6IHJhbmRvbSg1MCwgMjAwKSxcbi8vICAgICAgIGlzQnVyc3Q6IGZhbHNlXG4vLyAgICAgfTtcbi8vICAgfVxuXG4vLyAgIGRyYXdQYXJ0aWNsZXMoKSB7XG4vLyAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4vLyAgICAgICAvLyDkvY3nva7mg4XloLHmm7TmlrBcbi8vICAgICAgIHRoaXMubW92ZVBhcnRpY2xlKHBhcnRpY2xlKTtcblxuLy8gICAgICAgLy8gcGFydGljbGXmj4/nlLtcbi8vICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbi8vICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgyNTUsMjU1LDAsIC41KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSknO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFggPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSAwO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSAzMDtcblxuLy8gICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKCR7cGFydGljbGUuY29sb3Iucn0sICR7cGFydGljbGUuY29sb3IuZ30sICR7cGFydGljbGUuY29sb3IuYn0sICR7cGFydGljbGUuYWxwaGF9KWA7XG4vLyAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBhcnRpY2xlLngsIHBhcnRpY2xlLnksIHBhcnRpY2xlLnJhZGl1cywgcGFydGljbGUuc3RhcnRBbmdsZSwgcGFydGljbGUuZW5kQW5nbGUpO1xuLy8gICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIG1vdmVQYXJ0aWNsZShwYXJ0aWNsZSkge1xuLy8gICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUuc3BlZWQ7XG4vLyAgICAgcGFydGljbGUueSA9IHBhcnRpY2xlLnN0YXJ0WSArIHBhcnRpY2xlLmFtcGxpdHVkZSAqIE1hdGguc2luKCgocGFydGljbGUueCAvIDUpICogTWF0aC5QSSkgLyAxODApO1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIC8vIGNhbnZhc+WIneacn+WMllxuLy8gICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCArIHRoaXMucGFydGljbGVNYXhSYWRpdXMgKiAyLCB0aGlzLmNhbnZhc0hlaWdodCk7XG5cbi8vICAgICAvLyBwYXJ0aWNsZeOCkuaPj+eUu1xuLy8gICAgIHRoaXMuZHJhd1BhcnRpY2xlcygpO1xuXG4vLyAgICAgLy8g55S76Z2i44GL44KJ5raI44GI44Gf44KJ5paw44GX44GEcGFydGljbGXjgavlt67jgZfmm7/jgYhcbi8vICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbi8vICAgICAgIGlmIChwYXJ0aWNsZS54IC0gcGFydGljbGUucmFkaXVzID49IHRoaXMuY2FudmFzV2lkdGgpIHtcbi8vICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbcGFydGljbGUuaWRdID0gdGhpcy5jcmVhdGVQYXJ0aWNsZShwYXJ0aWNsZS5pZCwgdHJ1ZSk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG5cbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4vLyAgIH1cbi8vIH1cbi8vIG5ldyBWaXN1YWwoKTtcblxuXG5cblxuLy8gZGl2MjAw55Sf5oiQXG4vLyBjb25zdCBjb3VudCA9IDIwMDtcbi8vIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWlsa3ktd2F5Jyk7XG4vLyBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vZnJhZ21lbnTkvZzmiJBcblxuLy8gZm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuLy8gICBsZXQgbWlsa2V5V2F5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgIG1pbGtleVdheS5jbGFzc05hbWUgPSBcInAtbWlsa3ktd2F5XCI7XG5cbi8vICAgbGV0IG1pbGtleU1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgbWlsa2V5TW92ZS5jbGFzc05hbWUgPSBcIm1pbGt5LW1vdmVcIjtcblxuLy8gICBsZXQgbWlsa2V5U3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICBtaWxrZXlTdGFyLmNsYXNzTmFtZSA9IFwibWlsa3ktc3RhclwiO1xuXG4vLyAgIG1pbGtleU1vdmUuYXBwZW5kQ2hpbGQobWlsa2V5U3Rhcik7XG4vLyAgIG1pbGtleVdheS5hcHBlbmRDaGlsZChtaWxrZXlNb3ZlKTtcbi8vICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWlsa2V5V2F5KTtcbi8vIH1cblxuLy8gcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTsiLCJsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLmpzLXN3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsLy/jgrnjg6njgqTjg4njga7plpPjga7ot53pm6JcbiAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICBsb29wOiB0cnVlLC8v5pyA5b6M44Gr6YGU44GX44Gf44KJ5YWI6aCt44Gr5oi744KLXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuXG4gICAgbW91c2V3aGVlbDoge1xuICAgICAgICBmb3JjZVRvQXhpczogZmFsc2UsXG4gICAgfSxcblxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLC8v44Oa44O844K444ON44O844K344On44Oz44Gu6KaB57SgXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwvL+OCr+ODquODg+OCr+OBq+WPjeW/nOOBleOBm+OCi1xuICAgICAgICBkeW5hbWljQnVsbGV0czogZmFsc2UsLy/jg5rjg7zjgrjjg43jg7zjgrfjg6fjg7PjgavlvLflvLHjgYzjgaTjgY9cbiAgICB9LFxuXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9XG59KTsiLCIvLyDpioDmsrPpiYTpgZPjgpLlm7rlrprjgZnjgotcbmNvbnN0IG15VHJhaW4gPSBqUXVlcnkoJy5qcy10cmFpbicpO1xuY29uc3QgdHJhaW5fcG9zID0gbXlUcmFpbi5vZmZzZXQoKS50b3A7XG5jb25zdCB0cmFpbl9oZWlnaHQgPSBteVRyYWluLm91dGVySGVpZ2h0KCk7XG5cbmpRdWVyeShmdW5jdGlvbiAoJCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IHRyYWluX3BvcyArIDIzKSB7XG4gICAgICAgICAgICBteVRyYWluLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXlUcmFpbi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyogQXV0aG9yIDogVmluY2VudCBHYXJyZWF1ICAtIHZpbmNlbnRnYXJyZWF1LmNvbVxuLyogTUlUIGxpY2Vuc2U6IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8qIERlbW8gLyBHZW5lcmF0b3IgOiB2aW5jZW50Z2FycmVhdS5jb20vcGFydGljbGVzLmpzXG4vKiBHaXRIdWIgOiBnaXRodWIuY29tL1ZpbmNlbnRHYXJyZWF1L3BhcnRpY2xlcy5qc1xuLyogSG93IHRvIHVzZT8gOiBDaGVjayB0aGUgR2l0SHViIFJFQURNRVxuLyogdjIuMC4wXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZnVuY3Rpb24gaGV4VG9SZ2IoZSl7dmFyIGE9L14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtlPWUucmVwbGFjZShhLGZ1bmN0aW9uKGUsYSx0LGkpe3JldHVybiBhK2ErdCt0K2kraX0pO3ZhciB0PS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhlKTtyZXR1cm4gdD97cjpwYXJzZUludCh0WzFdLDE2KSxnOnBhcnNlSW50KHRbMl0sMTYpLGI6cGFyc2VJbnQodFszXSwxNil9Om51bGx9ZnVuY3Rpb24gY2xhbXAoZSxhLHQpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChlLGEpLHQpfWZ1bmN0aW9uIGlzSW5BcnJheShlLGEpe3JldHVybiBhLmluZGV4T2YoZSk+LTF9dmFyIHBKUz1mdW5jdGlvbihlLGEpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZStcIiA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsXCIpO3RoaXMucEpTPXtjYW52YXM6e2VsOnQsdzp0Lm9mZnNldFdpZHRoLGg6dC5vZmZzZXRIZWlnaHR9LHBhcnRpY2xlczp7bnVtYmVyOnt2YWx1ZTo0MDAsZGVuc2l0eTp7ZW5hYmxlOiEwLHZhbHVlX2FyZWE6ODAwfX0sY29sb3I6e3ZhbHVlOlwiI2ZmZlwifSxzaGFwZTp7dHlwZTpcImNpcmNsZVwiLHN0cm9rZTp7d2lkdGg6MCxjb2xvcjpcIiNmZjAwMDBcIn0scG9seWdvbjp7bmJfc2lkZXM6NX0saW1hZ2U6e3NyYzpcIlwiLHdpZHRoOjEwMCxoZWlnaHQ6MTAwfX0sb3BhY2l0eTp7dmFsdWU6MSxyYW5kb206ITEsYW5pbTp7ZW5hYmxlOiExLHNwZWVkOjIsb3BhY2l0eV9taW46MCxzeW5jOiExfX0sc2l6ZTp7dmFsdWU6MjAscmFuZG9tOiExLGFuaW06e2VuYWJsZTohMSxzcGVlZDoyMCxzaXplX21pbjowLHN5bmM6ITF9fSxsaW5lX2xpbmtlZDp7ZW5hYmxlOiEwLGRpc3RhbmNlOjEwMCxjb2xvcjpcIiNmZmZcIixvcGFjaXR5OjEsd2lkdGg6MX0sbW92ZTp7ZW5hYmxlOiEwLHNwZWVkOjIsZGlyZWN0aW9uOlwibm9uZVwiLHJhbmRvbTohMSxzdHJhaWdodDohMSxvdXRfbW9kZTpcIm91dFwiLGJvdW5jZTohMSxhdHRyYWN0OntlbmFibGU6ITEscm90YXRlWDozZTMscm90YXRlWTozZTN9fSxhcnJheTpbXX0saW50ZXJhY3Rpdml0eTp7ZGV0ZWN0X29uOlwiY2FudmFzXCIsZXZlbnRzOntvbmhvdmVyOntlbmFibGU6ITAsbW9kZTpcImdyYWJcIn0sb25jbGljazp7ZW5hYmxlOiEwLG1vZGU6XCJwdXNoXCJ9LHJlc2l6ZTohMH0sbW9kZXM6e2dyYWI6e2Rpc3RhbmNlOjEwMCxsaW5lX2xpbmtlZDp7b3BhY2l0eToxfX0sYnViYmxlOntkaXN0YW5jZToyMDAsc2l6ZTo4MCxkdXJhdGlvbjouNH0scmVwdWxzZTp7ZGlzdGFuY2U6MjAwLGR1cmF0aW9uOi40fSxwdXNoOntwYXJ0aWNsZXNfbmI6NH0scmVtb3ZlOntwYXJ0aWNsZXNfbmI6Mn19LG1vdXNlOnt9fSxyZXRpbmFfZGV0ZWN0OiExLGZuOntpbnRlcmFjdDp7fSxtb2Rlczp7fSx2ZW5kb3JzOnt9fSx0bXA6e319O3ZhciBpPXRoaXMucEpTO2EmJk9iamVjdC5kZWVwRXh0ZW5kKGksYSksaS50bXAub2JqPXtzaXplX3ZhbHVlOmkucGFydGljbGVzLnNpemUudmFsdWUsc2l6ZV9hbmltX3NwZWVkOmkucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCxtb3ZlX3NwZWVkOmkucGFydGljbGVzLm1vdmUuc3BlZWQsbGluZV9saW5rZWRfZGlzdGFuY2U6aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsbGluZV9saW5rZWRfd2lkdGg6aS5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsbW9kZV9ncmFiX2Rpc3RhbmNlOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLG1vZGVfYnViYmxlX2Rpc3RhbmNlOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsbW9kZV9idWJibGVfc2l6ZTppLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlfSxpLmZuLnJldGluYUluaXQ9ZnVuY3Rpb24oKXtpLnJldGluYV9kZXRlY3QmJndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvPjE/KGkuY2FudmFzLnB4cmF0aW89d2luZG93LmRldmljZVBpeGVsUmF0aW8saS50bXAucmV0aW5hPSEwKTooaS5jYW52YXMucHhyYXRpbz0xLGkudG1wLnJldGluYT0hMSksaS5jYW52YXMudz1pLmNhbnZhcy5lbC5vZmZzZXRXaWR0aCppLmNhbnZhcy5weHJhdGlvLGkuY2FudmFzLmg9aS5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0KmkuY2FudmFzLnB4cmF0aW8saS5wYXJ0aWNsZXMuc2l6ZS52YWx1ZT1pLnRtcC5vYmouc2l6ZV92YWx1ZSppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZD1pLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkKmkuY2FudmFzLnB4cmF0aW8saS5wYXJ0aWNsZXMubW92ZS5zcGVlZD1pLnRtcC5vYmoubW92ZV9zcGVlZCppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlPWkudG1wLm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSppLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlPWkudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UqaS5jYW52YXMucHhyYXRpbyxpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlPWkudG1wLm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSppLmNhbnZhcy5weHJhdGlvLGkucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoPWkudG1wLm9iai5saW5lX2xpbmtlZF93aWR0aCppLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZT1pLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSppLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlPWkudG1wLm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UqaS5jYW52YXMucHhyYXRpb30saS5mbi5jYW52YXNJbml0PWZ1bmN0aW9uKCl7aS5jYW52YXMuY3R4PWkuY2FudmFzLmVsLmdldENvbnRleHQoXCIyZFwiKX0saS5mbi5jYW52YXNTaXplPWZ1bmN0aW9uKCl7aS5jYW52YXMuZWwud2lkdGg9aS5jYW52YXMudyxpLmNhbnZhcy5lbC5oZWlnaHQ9aS5jYW52YXMuaCxpJiZpLmludGVyYWN0aXZpdHkuZXZlbnRzLnJlc2l6ZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixmdW5jdGlvbigpe2kuY2FudmFzLnc9aS5jYW52YXMuZWwub2Zmc2V0V2lkdGgsaS5jYW52YXMuaD1pLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQsaS50bXAucmV0aW5hJiYoaS5jYW52YXMudyo9aS5jYW52YXMucHhyYXRpbyxpLmNhbnZhcy5oKj1pLmNhbnZhcy5weHJhdGlvKSxpLmNhbnZhcy5lbC53aWR0aD1pLmNhbnZhcy53LGkuY2FudmFzLmVsLmhlaWdodD1pLmNhbnZhcy5oLGkucGFydGljbGVzLm1vdmUuZW5hYmxlfHwoaS5mbi5wYXJ0aWNsZXNFbXB0eSgpLGkuZm4ucGFydGljbGVzQ3JlYXRlKCksaS5mbi5wYXJ0aWNsZXNEcmF3KCksaS5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCkpLGkuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpfSl9LGkuZm4uY2FudmFzUGFpbnQ9ZnVuY3Rpb24oKXtpLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwwLGkuY2FudmFzLncsaS5jYW52YXMuaCl9LGkuZm4uY2FudmFzQ2xlYXI9ZnVuY3Rpb24oKXtpLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsMCxpLmNhbnZhcy53LGkuY2FudmFzLmgpfSxpLmZuLnBhcnRpY2xlPWZ1bmN0aW9uKGUsYSx0KXtpZih0aGlzLnJhZGl1cz0oaS5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20/TWF0aC5yYW5kb20oKToxKSppLnBhcnRpY2xlcy5zaXplLnZhbHVlLGkucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUmJih0aGlzLnNpemVfc3RhdHVzPSExLHRoaXMudnM9aS5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLzEwMCxpLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luY3x8KHRoaXMudnM9dGhpcy52cypNYXRoLnJhbmRvbSgpKSksdGhpcy54PXQ/dC54Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMudyx0aGlzLnk9dD90Lnk6TWF0aC5yYW5kb20oKSppLmNhbnZhcy5oLHRoaXMueD5pLmNhbnZhcy53LTIqdGhpcy5yYWRpdXM/dGhpcy54PXRoaXMueC10aGlzLnJhZGl1czp0aGlzLng8Mip0aGlzLnJhZGl1cyYmKHRoaXMueD10aGlzLngrdGhpcy5yYWRpdXMpLHRoaXMueT5pLmNhbnZhcy5oLTIqdGhpcy5yYWRpdXM/dGhpcy55PXRoaXMueS10aGlzLnJhZGl1czp0aGlzLnk8Mip0aGlzLnJhZGl1cyYmKHRoaXMueT10aGlzLnkrdGhpcy5yYWRpdXMpLGkucGFydGljbGVzLm1vdmUuYm91bmNlJiZpLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsdCksdGhpcy5jb2xvcj17fSxcIm9iamVjdFwiPT10eXBlb2YgZS52YWx1ZSlpZihlLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpe3ZhciBzPWUudmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO3RoaXMuY29sb3IucmdiPWhleFRvUmdiKHMpfWVsc2Ugdm9pZCAwIT1lLnZhbHVlLnImJnZvaWQgMCE9ZS52YWx1ZS5nJiZ2b2lkIDAhPWUudmFsdWUuYiYmKHRoaXMuY29sb3IucmdiPXtyOmUudmFsdWUucixnOmUudmFsdWUuZyxiOmUudmFsdWUuYn0pLHZvaWQgMCE9ZS52YWx1ZS5oJiZ2b2lkIDAhPWUudmFsdWUucyYmdm9pZCAwIT1lLnZhbHVlLmwmJih0aGlzLmNvbG9yLmhzbD17aDplLnZhbHVlLmgsczplLnZhbHVlLnMsbDplLnZhbHVlLmx9KTtlbHNlXCJyYW5kb21cIj09ZS52YWx1ZT90aGlzLmNvbG9yLnJnYj17cjpNYXRoLmZsb29yKDI1NipNYXRoLnJhbmRvbSgpKSswLGc6TWF0aC5mbG9vcigyNTYqTWF0aC5yYW5kb20oKSkrMCxiOk1hdGguZmxvb3IoMjU2Kk1hdGgucmFuZG9tKCkpKzB9Olwic3RyaW5nXCI9PXR5cGVvZiBlLnZhbHVlJiYodGhpcy5jb2xvcj1lLHRoaXMuY29sb3IucmdiPWhleFRvUmdiKHRoaXMuY29sb3IudmFsdWUpKTt0aGlzLm9wYWNpdHk9KGkucGFydGljbGVzLm9wYWNpdHkucmFuZG9tP01hdGgucmFuZG9tKCk6MSkqaS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxpLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlJiYodGhpcy5vcGFjaXR5X3N0YXR1cz0hMSx0aGlzLnZvPWkucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zcGVlZC8xMDAsaS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmN8fCh0aGlzLnZvPXRoaXMudm8qTWF0aC5yYW5kb20oKSkpO3ZhciBuPXt9O3N3aXRjaChpLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbil7Y2FzZVwidG9wXCI6bj17eDowLHk6LTF9O2JyZWFrO2Nhc2VcInRvcC1yaWdodFwiOm49e3g6LjUseTotLjV9O2JyZWFrO2Nhc2VcInJpZ2h0XCI6bj17eDoxLHk6LTB9O2JyZWFrO2Nhc2VcImJvdHRvbS1yaWdodFwiOm49e3g6LjUseTouNX07YnJlYWs7Y2FzZVwiYm90dG9tXCI6bj17eDowLHk6MX07YnJlYWs7Y2FzZVwiYm90dG9tLWxlZnRcIjpuPXt4Oi0uNSx5OjF9O2JyZWFrO2Nhc2VcImxlZnRcIjpuPXt4Oi0xLHk6MH07YnJlYWs7Y2FzZVwidG9wLWxlZnRcIjpuPXt4Oi0uNSx5Oi0uNX07YnJlYWs7ZGVmYXVsdDpuPXt4OjAseTowfX1pLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0Pyh0aGlzLnZ4PW4ueCx0aGlzLnZ5PW4ueSxpLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSYmKHRoaXMudng9dGhpcy52eCpNYXRoLnJhbmRvbSgpLHRoaXMudnk9dGhpcy52eSpNYXRoLnJhbmRvbSgpKSk6KHRoaXMudng9bi54K01hdGgucmFuZG9tKCktLjUsdGhpcy52eT1uLnkrTWF0aC5yYW5kb20oKS0uNSksdGhpcy52eF9pPXRoaXMudngsdGhpcy52eV9pPXRoaXMudnk7dmFyIHI9aS5wYXJ0aWNsZXMuc2hhcGUudHlwZTtpZihcIm9iamVjdFwiPT10eXBlb2Ygcil7aWYociBpbnN0YW5jZW9mIEFycmF5KXt2YXIgYz1yW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpyLmxlbmd0aCldO3RoaXMuc2hhcGU9Y319ZWxzZSB0aGlzLnNoYXBlPXI7aWYoXCJpbWFnZVwiPT10aGlzLnNoYXBlKXt2YXIgbz1pLnBhcnRpY2xlcy5zaGFwZTt0aGlzLmltZz17c3JjOm8uaW1hZ2Uuc3JjLHJhdGlvOm8uaW1hZ2Uud2lkdGgvby5pbWFnZS5oZWlnaHR9LHRoaXMuaW1nLnJhdGlvfHwodGhpcy5pbWcucmF0aW89MSksXCJzdmdcIj09aS50bXAuaW1nX3R5cGUmJnZvaWQgMCE9aS50bXAuc291cmNlX3N2ZyYmKGkuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcodGhpcyksaS50bXAucHVzaGluZyYmKHRoaXMuaW1nLmxvYWRlZD0hMSkpfX0saS5mbi5wYXJ0aWNsZS5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpLmNhbnZhcy5jdHguZHJhd0ltYWdlKHIsYS54LXQsYS55LXQsMip0LDIqdC9hLmltZy5yYXRpbyl9dmFyIGE9dGhpcztpZih2b2lkIDAhPWEucmFkaXVzX2J1YmJsZSl2YXIgdD1hLnJhZGl1c19idWJibGU7ZWxzZSB2YXIgdD1hLnJhZGl1cztpZih2b2lkIDAhPWEub3BhY2l0eV9idWJibGUpdmFyIHM9YS5vcGFjaXR5X2J1YmJsZTtlbHNlIHZhciBzPWEub3BhY2l0eTtpZihhLmNvbG9yLnJnYil2YXIgbj1cInJnYmEoXCIrYS5jb2xvci5yZ2IucitcIixcIithLmNvbG9yLnJnYi5nK1wiLFwiK2EuY29sb3IucmdiLmIrXCIsXCIrcytcIilcIjtlbHNlIHZhciBuPVwiaHNsYShcIithLmNvbG9yLmhzbC5oK1wiLFwiK2EuY29sb3IuaHNsLnMrXCIlLFwiK2EuY29sb3IuaHNsLmwrXCIlLFwiK3MrXCIpXCI7c3dpdGNoKGkuY2FudmFzLmN0eC5maWxsU3R5bGU9bixpLmNhbnZhcy5jdHguYmVnaW5QYXRoKCksYS5zaGFwZSl7Y2FzZVwiY2lyY2xlXCI6aS5jYW52YXMuY3R4LmFyYyhhLngsYS55LHQsMCwyKk1hdGguUEksITEpO2JyZWFrO2Nhc2VcImVkZ2VcIjppLmNhbnZhcy5jdHgucmVjdChhLngtdCxhLnktdCwyKnQsMip0KTticmVhaztjYXNlXCJ0cmlhbmdsZVwiOmkuZm4udmVuZG9ycy5kcmF3U2hhcGUoaS5jYW52YXMuY3R4LGEueC10LGEueSt0LzEuNjYsMip0LDMsMik7YnJlYWs7Y2FzZVwicG9seWdvblwiOmkuZm4udmVuZG9ycy5kcmF3U2hhcGUoaS5jYW52YXMuY3R4LGEueC10LyhpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMuNSksYS55LXQvLjc2LDIuNjYqdC8oaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSxpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLDEpO2JyZWFrO2Nhc2VcInN0YXJcIjppLmZuLnZlbmRvcnMuZHJhd1NoYXBlKGkuY2FudmFzLmN0eCxhLngtMip0LyhpLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzQpLGEueS10LzEuNTIsMip0KjIuNjYvKGkucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksaS5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywyKTticmVhaztjYXNlXCJpbWFnZVwiOmlmKFwic3ZnXCI9PWkudG1wLmltZ190eXBlKXZhciByPWEuaW1nLm9iajtlbHNlIHZhciByPWkudG1wLmltZ19vYmo7ciYmZSgpfWkuY2FudmFzLmN0eC5jbG9zZVBhdGgoKSxpLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg+MCYmKGkuY2FudmFzLmN0eC5zdHJva2VTdHlsZT1pLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3IsaS5jYW52YXMuY3R4LmxpbmVXaWR0aD1pLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGgsaS5jYW52YXMuY3R4LnN0cm9rZSgpKSxpLmNhbnZhcy5jdHguZmlsbCgpfSxpLmZuLnBhcnRpY2xlc0NyZWF0ZT1mdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8aS5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlO2UrKylpLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBpLmZuLnBhcnRpY2xlKGkucGFydGljbGVzLmNvbG9yLGkucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKX0saS5mbi5wYXJ0aWNsZXNVcGRhdGU9ZnVuY3Rpb24oKXtmb3IodmFyIGU9MDtlPGkucGFydGljbGVzLmFycmF5Lmxlbmd0aDtlKyspe3ZhciBhPWkucGFydGljbGVzLmFycmF5W2VdO2lmKGkucGFydGljbGVzLm1vdmUuZW5hYmxlKXt2YXIgdD1pLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLzI7YS54Kz1hLnZ4KnQsYS55Kz1hLnZ5KnR9aWYoaS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSYmKDE9PWEub3BhY2l0eV9zdGF0dXM/KGEub3BhY2l0eT49aS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSYmKGEub3BhY2l0eV9zdGF0dXM9ITEpLGEub3BhY2l0eSs9YS52byk6KGEub3BhY2l0eTw9aS5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLm9wYWNpdHlfbWluJiYoYS5vcGFjaXR5X3N0YXR1cz0hMCksYS5vcGFjaXR5LT1hLnZvKSxhLm9wYWNpdHk8MCYmKGEub3BhY2l0eT0wKSksaS5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSYmKDE9PWEuc2l6ZV9zdGF0dXM/KGEucmFkaXVzPj1pLnBhcnRpY2xlcy5zaXplLnZhbHVlJiYoYS5zaXplX3N0YXR1cz0hMSksYS5yYWRpdXMrPWEudnMpOihhLnJhZGl1czw9aS5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluJiYoYS5zaXplX3N0YXR1cz0hMCksYS5yYWRpdXMtPWEudnMpLGEucmFkaXVzPDAmJihhLnJhZGl1cz0wKSksXCJib3VuY2VcIj09aS5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl2YXIgcz17eF9sZWZ0OmEucmFkaXVzLHhfcmlnaHQ6aS5jYW52YXMudyx5X3RvcDphLnJhZGl1cyx5X2JvdHRvbTppLmNhbnZhcy5ofTtlbHNlIHZhciBzPXt4X2xlZnQ6LWEucmFkaXVzLHhfcmlnaHQ6aS5jYW52YXMudythLnJhZGl1cyx5X3RvcDotYS5yYWRpdXMseV9ib3R0b206aS5jYW52YXMuaCthLnJhZGl1c307c3dpdGNoKGEueC1hLnJhZGl1cz5pLmNhbnZhcy53PyhhLng9cy54X2xlZnQsYS55PU1hdGgucmFuZG9tKCkqaS5jYW52YXMuaCk6YS54K2EucmFkaXVzPDAmJihhLng9cy54X3JpZ2h0LGEueT1NYXRoLnJhbmRvbSgpKmkuY2FudmFzLmgpLGEueS1hLnJhZGl1cz5pLmNhbnZhcy5oPyhhLnk9cy55X3RvcCxhLng9TWF0aC5yYW5kb20oKSppLmNhbnZhcy53KTphLnkrYS5yYWRpdXM8MCYmKGEueT1zLnlfYm90dG9tLGEueD1NYXRoLnJhbmRvbSgpKmkuY2FudmFzLncpLGkucGFydGljbGVzLm1vdmUub3V0X21vZGUpe2Nhc2VcImJvdW5jZVwiOmEueCthLnJhZGl1cz5pLmNhbnZhcy53P2Eudng9LWEudng6YS54LWEucmFkaXVzPDAmJihhLnZ4PS1hLnZ4KSxhLnkrYS5yYWRpdXM+aS5jYW52YXMuaD9hLnZ5PS1hLnZ5OmEueS1hLnJhZGl1czwwJiYoYS52eT0tYS52eSl9aWYoaXNJbkFycmF5KFwiZ3JhYlwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSYmaS5mbi5tb2Rlcy5ncmFiUGFydGljbGUoYSksKGlzSW5BcnJheShcImJ1YmJsZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKXx8aXNJbkFycmF5KFwiYnViYmxlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSYmaS5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZShhKSwoaXNJbkFycmF5KFwicmVwdWxzZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKXx8aXNJbkFycmF5KFwicmVwdWxzZVwiLGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkmJmkuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKGEpLGkucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZXx8aS5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSlmb3IodmFyIG49ZSsxO248aS5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoO24rKyl7dmFyIHI9aS5wYXJ0aWNsZXMuYXJyYXlbbl07aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlJiZpLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMoYSxyKSxpLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlJiZpLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMoYSxyKSxpLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSYmaS5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMoYSxyKX19fSxpLmZuLnBhcnRpY2xlc0RyYXc9ZnVuY3Rpb24oKXtpLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsMCxpLmNhbnZhcy53LGkuY2FudmFzLmgpLGkuZm4ucGFydGljbGVzVXBkYXRlKCk7Zm9yKHZhciBlPTA7ZTxpLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7ZSsrKXt2YXIgYT1pLnBhcnRpY2xlcy5hcnJheVtlXTthLmRyYXcoKX19LGkuZm4ucGFydGljbGVzRW1wdHk9ZnVuY3Rpb24oKXtpLnBhcnRpY2xlcy5hcnJheT1bXX0saS5mbi5wYXJ0aWNsZXNSZWZyZXNoPWZ1bmN0aW9uKCl7Y2FuY2VsUmVxdWVzdEFuaW1GcmFtZShpLmZuLmNoZWNrQW5pbUZyYW1lKSxjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSksaS50bXAuc291cmNlX3N2Zz12b2lkIDAsaS50bXAuaW1nX29iaj12b2lkIDAsaS50bXAuY291bnRfc3ZnPTAsaS5mbi5wYXJ0aWNsZXNFbXB0eSgpLGkuZm4uY2FudmFzQ2xlYXIoKSxpLmZuLnZlbmRvcnMuc3RhcnQoKX0saS5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzPWZ1bmN0aW9uKGUsYSl7dmFyIHQ9ZS54LWEueCxzPWUueS1hLnksbj1NYXRoLnNxcnQodCp0K3Mqcyk7aWYobjw9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe3ZhciByPWkucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHktbi8oMS9pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KS9pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtpZihyPjApe3ZhciBjPWkucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO2kuY2FudmFzLmN0eC5zdHJva2VTdHlsZT1cInJnYmEoXCIrYy5yK1wiLFwiK2MuZytcIixcIitjLmIrXCIsXCIrcitcIilcIixpLmNhbnZhcy5jdHgubGluZVdpZHRoPWkucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLGkuY2FudmFzLmN0eC5iZWdpblBhdGgoKSxpLmNhbnZhcy5jdHgubW92ZVRvKGUueCxlLnkpLGkuY2FudmFzLmN0eC5saW5lVG8oYS54LGEueSksaS5jYW52YXMuY3R4LnN0cm9rZSgpLGkuY2FudmFzLmN0eC5jbG9zZVBhdGgoKX19fSxpLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXM9ZnVuY3Rpb24oZSxhKXt2YXIgdD1lLngtYS54LHM9ZS55LWEueSxuPU1hdGguc3FydCh0KnQrcypzKTtpZihuPD1pLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7dmFyIHI9dC8oMWUzKmkucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYKSxjPXMvKDFlMyppLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSk7ZS52eC09cixlLnZ5LT1jLGEudngrPXIsYS52eSs9Y319LGkuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzPWZ1bmN0aW9uKGUsYSl7dmFyIHQ9ZS54LWEueCxpPWUueS1hLnkscz1NYXRoLnNxcnQodCp0K2kqaSksbj1lLnJhZGl1cythLnJhZGl1cztuPj1zJiYoZS52eD0tZS52eCxlLnZ5PS1lLnZ5LGEudng9LWEudngsYS52eT0tYS52eSl9LGkuZm4ubW9kZXMucHVzaFBhcnRpY2xlcz1mdW5jdGlvbihlLGEpe2kudG1wLnB1c2hpbmc9ITA7Zm9yKHZhciB0PTA7ZT50O3QrKylpLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBpLmZuLnBhcnRpY2xlKGkucGFydGljbGVzLmNvbG9yLGkucGFydGljbGVzLm9wYWNpdHkudmFsdWUse3g6YT9hLnBvc194Ok1hdGgucmFuZG9tKCkqaS5jYW52YXMudyx5OmE/YS5wb3NfeTpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLmh9KSksdD09ZS0xJiYoaS5wYXJ0aWNsZXMubW92ZS5lbmFibGV8fGkuZm4ucGFydGljbGVzRHJhdygpLGkudG1wLnB1c2hpbmc9ITEpfSxpLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcz1mdW5jdGlvbihlKXtpLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCxlKSxpLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZXx8aS5mbi5wYXJ0aWNsZXNEcmF3KCl9LGkuZm4ubW9kZXMuYnViYmxlUGFydGljbGU9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gYSgpe2Uub3BhY2l0eV9idWJibGU9ZS5vcGFjaXR5LGUucmFkaXVzX2J1YmJsZT1lLnJhZGl1c31mdW5jdGlvbiB0KGEsdCxzLG4sYyl7aWYoYSE9dClpZihpLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKXtpZih2b2lkIDAhPXMpe3ZhciBvPW4tcCoobi1hKS9pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uLGw9YS1vO2Q9YStsLFwic2l6ZVwiPT1jJiYoZS5yYWRpdXNfYnViYmxlPWQpLFwib3BhY2l0eVwiPT1jJiYoZS5vcGFjaXR5X2J1YmJsZT1kKX19ZWxzZSBpZihyPD1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtpZih2b2lkIDAhPXMpdmFyIHY9cztlbHNlIHZhciB2PW47aWYodiE9YSl7dmFyIGQ9bi1wKihuLWEpL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb247XCJzaXplXCI9PWMmJihlLnJhZGl1c19idWJibGU9ZCksXCJvcGFjaXR5XCI9PWMmJihlLm9wYWNpdHlfYnViYmxlPWQpfX1lbHNlXCJzaXplXCI9PWMmJihlLnJhZGl1c19idWJibGU9dm9pZCAwKSxcIm9wYWNpdHlcIj09YyYmKGUub3BhY2l0eV9idWJibGU9dm9pZCAwKX1pZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlJiZpc0luQXJyYXkoXCJidWJibGVcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpe3ZhciBzPWUueC1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsbj1lLnktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LHI9TWF0aC5zcXJ0KHMqcytuKm4pLGM9MS1yL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2U7aWYocjw9aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7aWYoYz49MCYmXCJtb3VzZW1vdmVcIj09aS5pbnRlcmFjdGl2aXR5LnN0YXR1cyl7aWYoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplIT1pLnBhcnRpY2xlcy5zaXplLnZhbHVlKWlmKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZT5pLnBhcnRpY2xlcy5zaXplLnZhbHVlKXt2YXIgbz1lLnJhZGl1cytpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUqYztvPj0wJiYoZS5yYWRpdXNfYnViYmxlPW8pfWVsc2V7dmFyIGw9ZS5yYWRpdXMtaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLG89ZS5yYWRpdXMtbCpjO28+MD9lLnJhZGl1c19idWJibGU9bzplLnJhZGl1c19idWJibGU9MH1pZihpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkhPWkucGFydGljbGVzLm9wYWNpdHkudmFsdWUpaWYoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5PmkucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe3ZhciB2PWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSpjO3Y+ZS5vcGFjaXR5JiZ2PD1pLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkmJihlLm9wYWNpdHlfYnViYmxlPXYpfWVsc2V7dmFyIHY9ZS5vcGFjaXR5LShpLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkqYzt2PGUub3BhY2l0eSYmdj49aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5JiYoZS5vcGFjaXR5X2J1YmJsZT12KX19fWVsc2UgYSgpO1wibW91c2VsZWF2ZVwiPT1pLmludGVyYWN0aXZpdHkuc3RhdHVzJiZhKCl9ZWxzZSBpZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlJiZpc0luQXJyYXkoXCJidWJibGVcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe2lmKGkudG1wLmJ1YmJsZV9jbGlja2luZyl7dmFyIHM9ZS54LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCxuPWUueS1pLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kscj1NYXRoLnNxcnQocypzK24qbikscD0oKG5ldyBEYXRlKS5nZXRUaW1lKCktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUpLzFlMztwPmkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24mJihpLnRtcC5idWJibGVfZHVyYXRpb25fZW5kPSEwKSxwPjIqaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiYmKGkudG1wLmJ1YmJsZV9jbGlja2luZz0hMSxpLnRtcC5idWJibGVfZHVyYXRpb25fZW5kPSExKX1pLnRtcC5idWJibGVfY2xpY2tpbmcmJih0KGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxpLnBhcnRpY2xlcy5zaXplLnZhbHVlLGUucmFkaXVzX2J1YmJsZSxlLnJhZGl1cyxcInNpemVcIiksdChpLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksaS5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxlLm9wYWNpdHlfYnViYmxlLGUub3BhY2l0eSxcIm9wYWNpdHlcIikpfX0saS5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGU9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gYSgpe3ZhciBhPU1hdGguYXRhbjIoZCxwKTtpZihlLnZ4PXUqTWF0aC5jb3MoYSksZS52eT11Kk1hdGguc2luKGEpLFwiYm91bmNlXCI9PWkucGFydGljbGVzLm1vdmUub3V0X21vZGUpe3ZhciB0PXt4OmUueCtlLnZ4LHk6ZS55K2Uudnl9O3QueCtlLnJhZGl1cz5pLmNhbnZhcy53P2Uudng9LWUudng6dC54LWUucmFkaXVzPDAmJihlLnZ4PS1lLnZ4KSx0LnkrZS5yYWRpdXM+aS5jYW52YXMuaD9lLnZ5PS1lLnZ5OnQueS1lLnJhZGl1czwwJiYoZS52eT0tZS52eSl9fWlmKGkuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUmJmlzSW5BcnJheShcInJlcHVsc2VcIixpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkmJlwibW91c2Vtb3ZlXCI9PWkuaW50ZXJhY3Rpdml0eS5zdGF0dXMpe3ZhciB0PWUueC1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gscz1lLnktaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LG49TWF0aC5zcXJ0KHQqdCtzKnMpLHI9e3g6dC9uLHk6cy9ufSxjPWkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLG89MTAwLGw9Y2xhbXAoMS9jKigtMSpNYXRoLnBvdyhuL2MsMikrMSkqYypvLDAsNTApLHY9e3g6ZS54K3IueCpsLHk6ZS55K3IueSpsfTtcImJvdW5jZVwiPT1pLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlPyh2LngtZS5yYWRpdXM+MCYmdi54K2UucmFkaXVzPGkuY2FudmFzLncmJihlLng9di54KSx2LnktZS5yYWRpdXM+MCYmdi55K2UucmFkaXVzPGkuY2FudmFzLmgmJihlLnk9di55KSk6KGUueD12LngsZS55PXYueSl9ZWxzZSBpZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlJiZpc0luQXJyYXkoXCJyZXB1bHNlXCIsaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKWlmKGkudG1wLnJlcHVsc2VfZmluaXNofHwoaS50bXAucmVwdWxzZV9jb3VudCsrLGkudG1wLnJlcHVsc2VfY291bnQ9PWkucGFydGljbGVzLmFycmF5Lmxlbmd0aCYmKGkudG1wLnJlcHVsc2VfZmluaXNoPSEwKSksaS50bXAucmVwdWxzZV9jbGlja2luZyl7dmFyIGM9TWF0aC5wb3coaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UvNiwzKSxwPWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeC1lLngsZD1pLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ktZS55LG09cCpwK2QqZCx1PS1jL20qMTtjPj1tJiZhKCl9ZWxzZSAwPT1pLnRtcC5yZXB1bHNlX2NsaWNraW5nJiYoZS52eD1lLnZ4X2ksZS52eT1lLnZ5X2kpfSxpLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZT1mdW5jdGlvbihlKXtpZihpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlJiZcIm1vdXNlbW92ZVwiPT1pLmludGVyYWN0aXZpdHkuc3RhdHVzKXt2YXIgYT1lLngtaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LHQ9ZS55LWkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxzPU1hdGguc3FydChhKmErdCp0KTtpZihzPD1pLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSl7dmFyIG49aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eS1zLygxL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpL2kuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlO2lmKG4+MCl7dmFyIHI9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7aS5jYW52YXMuY3R4LnN0cm9rZVN0eWxlPVwicmdiYShcIityLnIrXCIsXCIrci5nK1wiLFwiK3IuYitcIixcIituK1wiKVwiLGkuY2FudmFzLmN0eC5saW5lV2lkdGg9aS5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsaS5jYW52YXMuY3R4LmJlZ2luUGF0aCgpLGkuY2FudmFzLmN0eC5tb3ZlVG8oZS54LGUueSksaS5jYW52YXMuY3R4LmxpbmVUbyhpLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195KSxpLmNhbnZhcy5jdHguc3Ryb2tlKCksaS5jYW52YXMuY3R4LmNsb3NlUGF0aCgpfX19fSxpLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzPWZ1bmN0aW9uKCl7XCJ3aW5kb3dcIj09aS5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbj9pLmludGVyYWN0aXZpdHkuZWw9d2luZG93OmkuaW50ZXJhY3Rpdml0eS5lbD1pLmNhbnZhcy5lbCwoaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZXx8aS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSkmJihpLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGZ1bmN0aW9uKGUpe2lmKGkuaW50ZXJhY3Rpdml0eS5lbD09d2luZG93KXZhciBhPWUuY2xpZW50WCx0PWUuY2xpZW50WTtlbHNlIHZhciBhPWUub2Zmc2V0WHx8ZS5jbGllbnRYLHQ9ZS5vZmZzZXRZfHxlLmNsaWVudFk7aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194PWEsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195PXQsaS50bXAucmV0aW5hJiYoaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194Kj1pLmNhbnZhcy5weHJhdGlvLGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSo9aS5jYW52YXMucHhyYXRpbyksaS5pbnRlcmFjdGl2aXR5LnN0YXR1cz1cIm1vdXNlbW92ZVwifSksaS5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsZnVuY3Rpb24oZSl7aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194PW51bGwsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195PW51bGwsaS5pbnRlcmFjdGl2aXR5LnN0YXR1cz1cIm1vdXNlbGVhdmVcIn0pKSxpLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlJiZpLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtpZihpLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3g9aS5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LGkuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeT1pLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksaS5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWU9KG5ldyBEYXRlKS5nZXRUaW1lKCksaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSlzd2l0Y2goaS5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpe2Nhc2VcInB1c2hcIjppLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZT9pLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLGkuaW50ZXJhY3Rpdml0eS5tb3VzZSk6MT09aS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iP2kuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhpLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsaS5pbnRlcmFjdGl2aXR5Lm1vdXNlKTppLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmI+MSYmaS5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKGkuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7YnJlYWs7Y2FzZVwicmVtb3ZlXCI6aS5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMoaS5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO2JyZWFrO2Nhc2VcImJ1YmJsZVwiOmkudG1wLmJ1YmJsZV9jbGlja2luZz0hMDticmVhaztjYXNlXCJyZXB1bHNlXCI6aS50bXAucmVwdWxzZV9jbGlja2luZz0hMCxpLnRtcC5yZXB1bHNlX2NvdW50PTAsaS50bXAucmVwdWxzZV9maW5pc2g9ITEsc2V0VGltZW91dChmdW5jdGlvbigpe2kudG1wLnJlcHVsc2VfY2xpY2tpbmc9ITF9LDFlMyppLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kdXJhdGlvbil9fSl9LGkuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcz1mdW5jdGlvbigpe2lmKGkucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSl7dmFyIGU9aS5jYW52YXMuZWwud2lkdGgqaS5jYW52YXMuZWwuaGVpZ2h0LzFlMztpLnRtcC5yZXRpbmEmJihlLz0yKmkuY2FudmFzLnB4cmF0aW8pO3ZhciBhPWUqaS5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlL2kucGFydGljbGVzLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWEsdD1pLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgtYTswPnQ/aS5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKE1hdGguYWJzKHQpKTppLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyh0KX19LGkuZm4udmVuZG9ycy5jaGVja092ZXJsYXA9ZnVuY3Rpb24oZSxhKXtmb3IodmFyIHQ9MDt0PGkucGFydGljbGVzLmFycmF5Lmxlbmd0aDt0Kyspe3ZhciBzPWkucGFydGljbGVzLmFycmF5W3RdLG49ZS54LXMueCxyPWUueS1zLnksYz1NYXRoLnNxcnQobipuK3Iqcik7Yzw9ZS5yYWRpdXMrcy5yYWRpdXMmJihlLng9YT9hLng6TWF0aC5yYW5kb20oKSppLmNhbnZhcy53LGUueT1hP2EueTpNYXRoLnJhbmRvbSgpKmkuY2FudmFzLmgsaS5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcChlKSl9fSxpLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nPWZ1bmN0aW9uKGUpe3ZhciBhPWkudG1wLnNvdXJjZV9zdmcsdD0vIyhbMC05QS1GXXszLDZ9KS9naSxzPWEucmVwbGFjZSh0LGZ1bmN0aW9uKGEsdCxpLHMpe2lmKGUuY29sb3IucmdiKXZhciBuPVwicmdiYShcIitlLmNvbG9yLnJnYi5yK1wiLFwiK2UuY29sb3IucmdiLmcrXCIsXCIrZS5jb2xvci5yZ2IuYitcIixcIitlLm9wYWNpdHkrXCIpXCI7ZWxzZSB2YXIgbj1cImhzbGEoXCIrZS5jb2xvci5oc2wuaCtcIixcIitlLmNvbG9yLmhzbC5zK1wiJSxcIitlLmNvbG9yLmhzbC5sK1wiJSxcIitlLm9wYWNpdHkrXCIpXCI7cmV0dXJuIG59KSxuPW5ldyBCbG9iKFtzXSx7dHlwZTpcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwifSkscj13aW5kb3cuVVJMfHx3aW5kb3cud2Via2l0VVJMfHx3aW5kb3csYz1yLmNyZWF0ZU9iamVjdFVSTChuKSxvPW5ldyBJbWFnZTtvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtlLmltZy5vYmo9byxlLmltZy5sb2FkZWQ9ITAsci5yZXZva2VPYmplY3RVUkwoYyksaS50bXAuY291bnRfc3ZnKyt9KSxvLnNyYz1jfSxpLmZuLnZlbmRvcnMuZGVzdHJveXBKUz1mdW5jdGlvbigpe2NhbmNlbEFuaW1hdGlvbkZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSksdC5yZW1vdmUoKSxwSlNEb209bnVsbH0saS5mbi52ZW5kb3JzLmRyYXdTaGFwZT1mdW5jdGlvbihlLGEsdCxpLHMsbil7dmFyIHI9cypuLGM9cy9uLG89MTgwKihjLTIpL2MsbD1NYXRoLlBJLU1hdGguUEkqby8xODA7ZS5zYXZlKCksZS5iZWdpblBhdGgoKSxlLnRyYW5zbGF0ZShhLHQpLGUubW92ZVRvKDAsMCk7Zm9yKHZhciB2PTA7cj52O3YrKyllLmxpbmVUbyhpLDApLGUudHJhbnNsYXRlKGksMCksZS5yb3RhdGUobCk7ZS5maWxsKCksZS5yZXN0b3JlKCl9LGkuZm4udmVuZG9ycy5leHBvcnRJbWc9ZnVuY3Rpb24oKXt3aW5kb3cub3BlbihpLmNhbnZhcy5lbC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksXCJfYmxhbmtcIil9LGkuZm4udmVuZG9ycy5sb2FkSW1nPWZ1bmN0aW9uKGUpe2lmKGkudG1wLmltZ19lcnJvcj12b2lkIDAsXCJcIiE9aS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKWlmKFwic3ZnXCI9PWUpe3ZhciBhPW5ldyBYTUxIdHRwUmVxdWVzdDthLm9wZW4oXCJHRVRcIixpLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMpLGEub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKGUpezQ9PWEucmVhZHlTdGF0ZSYmKDIwMD09YS5zdGF0dXM/KGkudG1wLnNvdXJjZV9zdmc9ZS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlLGkuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKSk6KGNvbnNvbGUubG9nKFwiRXJyb3IgcEpTIC0gSW1hZ2Ugbm90IGZvdW5kXCIpLGkudG1wLmltZ19lcnJvcj0hMCkpfSxhLnNlbmQoKX1lbHNle3ZhciB0PW5ldyBJbWFnZTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtpLnRtcC5pbWdfb2JqPXQsaS5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpfSksdC5zcmM9aS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjfWVsc2UgY29uc29sZS5sb2coXCJFcnJvciBwSlMgLSBObyBpbWFnZS5zcmNcIiksaS50bXAuaW1nX2Vycm9yPSEwfSxpLmZuLnZlbmRvcnMuZHJhdz1mdW5jdGlvbigpe1wiaW1hZ2VcIj09aS5wYXJ0aWNsZXMuc2hhcGUudHlwZT9cInN2Z1wiPT1pLnRtcC5pbWdfdHlwZT9pLnRtcC5jb3VudF9zdmc+PWkucGFydGljbGVzLm51bWJlci52YWx1ZT8oaS5mbi5wYXJ0aWNsZXNEcmF3KCksaS5wYXJ0aWNsZXMubW92ZS5lbmFibGU/aS5mbi5kcmF3QW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoaS5mbi52ZW5kb3JzLmRyYXcpOmNhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS5mbi5kcmF3QW5pbUZyYW1lKSk6aS50bXAuaW1nX2Vycm9yfHwoaS5mbi5kcmF3QW5pbUZyYW1lPXJlcXVlc3RBbmltRnJhbWUoaS5mbi52ZW5kb3JzLmRyYXcpKTp2b2lkIDAhPWkudG1wLmltZ19vYmo/KGkuZm4ucGFydGljbGVzRHJhdygpLGkucGFydGljbGVzLm1vdmUuZW5hYmxlP2kuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KTpjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSkpOmkudG1wLmltZ19lcnJvcnx8KGkuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KSk6KGkuZm4ucGFydGljbGVzRHJhdygpLGkucGFydGljbGVzLm1vdmUuZW5hYmxlP2kuZm4uZHJhd0FuaW1GcmFtZT1yZXF1ZXN0QW5pbUZyYW1lKGkuZm4udmVuZG9ycy5kcmF3KTpjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKGkuZm4uZHJhd0FuaW1GcmFtZSkpfSxpLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3PWZ1bmN0aW9uKCl7XCJpbWFnZVwiPT1pLnBhcnRpY2xlcy5zaGFwZS50eXBlP1wic3ZnXCI9PWkudG1wLmltZ190eXBlJiZ2b2lkIDA9PWkudG1wLnNvdXJjZV9zdmc/aS50bXAuY2hlY2tBbmltRnJhbWU9cmVxdWVzdEFuaW1GcmFtZShjaGVjayk6KGNhbmNlbFJlcXVlc3RBbmltRnJhbWUoaS50bXAuY2hlY2tBbmltRnJhbWUpLGkudG1wLmltZ19lcnJvcnx8KGkuZm4udmVuZG9ycy5pbml0KCksaS5mbi52ZW5kb3JzLmRyYXcoKSkpOihpLmZuLnZlbmRvcnMuaW5pdCgpLGkuZm4udmVuZG9ycy5kcmF3KCkpfSxpLmZuLnZlbmRvcnMuaW5pdD1mdW5jdGlvbigpe2kuZm4ucmV0aW5hSW5pdCgpLGkuZm4uY2FudmFzSW5pdCgpLGkuZm4uY2FudmFzU2l6ZSgpLGkuZm4uY2FudmFzUGFpbnQoKSxpLmZuLnBhcnRpY2xlc0NyZWF0ZSgpLGkuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpLGkucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lPWhleFRvUmdiKGkucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yKX0saS5mbi52ZW5kb3JzLnN0YXJ0PWZ1bmN0aW9uKCl7aXNJbkFycmF5KFwiaW1hZ2VcIixpLnBhcnRpY2xlcy5zaGFwZS50eXBlKT8oaS50bXAuaW1nX3R5cGU9aS5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihpLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoLTMpLGkuZm4udmVuZG9ycy5sb2FkSW1nKGkudG1wLmltZ190eXBlKSk6aS5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpfSxpLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzKCksaS5mbi52ZW5kb3JzLnN0YXJ0KCl9O09iamVjdC5kZWVwRXh0ZW5kPWZ1bmN0aW9uKGUsYSl7Zm9yKHZhciB0IGluIGEpYVt0XSYmYVt0XS5jb25zdHJ1Y3RvciYmYVt0XS5jb25zdHJ1Y3Rvcj09PU9iamVjdD8oZVt0XT1lW3RdfHx7fSxhcmd1bWVudHMuY2FsbGVlKGVbdF0sYVt0XSkpOmVbdF09YVt0XTtyZXR1cm4gZX0sd2luZG93LnJlcXVlc3RBbmltRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7d2luZG93LnNldFRpbWVvdXQoZSwxZTMvNjApfX0oKSx3aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGNsZWFyVGltZW91dH0oKSx3aW5kb3cucEpTRG9tPVtdLHdpbmRvdy5wYXJ0aWNsZXNKUz1mdW5jdGlvbihlLGEpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYoYT1lLGU9XCJwYXJ0aWNsZXMtanNcIiksZXx8KGU9XCJwYXJ0aWNsZXMtanNcIik7dmFyIHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSksaT1cInBhcnRpY2xlcy1qcy1jYW52YXMtZWxcIixzPXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKTtpZihzLmxlbmd0aClmb3IoO3MubGVuZ3RoPjA7KXQucmVtb3ZlQ2hpbGQoc1swXSk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtuLmNsYXNzTmFtZT1pLG4uc3R5bGUud2lkdGg9XCIxMDAlXCIsbi5zdHlsZS5oZWlnaHQ9XCIxMDAlXCI7dmFyIHI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkuYXBwZW5kQ2hpbGQobik7bnVsbCE9ciYmcEpTRG9tLnB1c2gobmV3IHBKUyhlLGEpKX0sd2luZG93LnBhcnRpY2xlc0pTLmxvYWQ9ZnVuY3Rpb24oZSxhLHQpe3ZhciBpPW5ldyBYTUxIdHRwUmVxdWVzdDtpLm9wZW4oXCJHRVRcIixhKSxpLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbihhKXtpZig0PT1pLnJlYWR5U3RhdGUpaWYoMjAwPT1pLnN0YXR1cyl7dmFyIHM9SlNPTi5wYXJzZShhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO3dpbmRvdy5wYXJ0aWNsZXNKUyhlLHMpLHQmJnQoKX1lbHNlIGNvbnNvbGUubG9nKFwiRXJyb3IgcEpTIC0gWE1MSHR0cFJlcXVlc3Qgc3RhdHVzOiBcIitpLnN0YXR1cyksY29uc29sZS5sb2coXCJFcnJvciBwSlMgLSBGaWxlIGNvbmZpZyBub3QgZm91bmRcIil9LGkuc2VuZCgpfTsiLCIvKipcbiAqIEBtb2R1bGVzIDogbm9kZV9tb2R1bGVz44OV44Kp44Or44OA44G+44Gn44Gu57W25a++44OR44K544Gu44Ko44Kk44Oq44Ki44K5XG4gKiB3ZWJwYWNrLmNvbmZpZy5qc+OBq+OBpuWumue+qeOBl+OBpuOBhOOCi1xuICovXG5cbi8vIGltcG9ydCAnQG1vZHVsZXMvc3ZneHVzZSc7IC8vU1ZH44K544OX44Op44Kk44OI44KSSUXjgafkvb/nlKjjgZnjgovjgZ/jgoHjga7jg6njgqTjg5bjg6njg6pcbi8vIGltcG9ydCAnLi9saWIvYl9icm93c2VyX3N3aXRjaGVyLmpzJzsgLy/jg5bjg6njgqbjgrbliKTlrprjga7jgZ/jgoHjg6njgqTjg5bjg6njg6pcblxuXG4vLyBpbXBvcnQgJy4vbGliL2Zhc3RjbGljay5qcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL215RmFzdENsaWNrLmpzJztcbmltcG9ydCAnLi9jb21tb24vbXlIZWFkZXIuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVRyYWluRml4LmpzJztcbmltcG9ydCAnLi9saWIvcGFydGljbGVzLm1pbi5qcyc7XG5pbXBvcnQgJy4vY29tbW9uL215TWlsa3lXYXkuanMnO1xuaW1wb3J0ICcuL2NvbW1vbi9teVN3aXBlci5qcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==