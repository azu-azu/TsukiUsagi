// ** particles.jsを使う **
const myParticleID = "js-milky-way-particle";
const particle_shape = "star"; //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
const numOfStars = 400; //星の数
const colorOfStars = '#ffff55'; //星の色
const opacityOfStars = 0.4; //星の透明度
const sizeOfStars = 3; //星の大きさ
const move_direction = "right"; //流れの向き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
const move_speed = 1;  //シェイプの動くスピード

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
      "value": colorOfStars,
    },
    "shape": {
      "type": particle_shape,
      "stroke": { //外線
        "width": 0,
        "color": "#fff"
      },
      // "polygon": { //typeをpolygonにしたときの設定
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
        "enable": true, //シェイプの透明度をアニメーションさせる
        "speed": 1,
        "opacity_min": 0.2, //透明度の最小値
        "sync": false //全てのシェイプを同時にアニメーションさせる
      }
    },
    "size": {
      "value": sizeOfStars,
      "random": true, //シェイプの大きさをランダムにする
      "anim": { //シェイプの大きさをアニメーションさせる
        "enable": true,
        "speed": 1,
        "size_min": 0.2, //大きさの最小値
        "sync": false //全てのシェイプを同時にアニメーションさせる
      }
    },
    "line_linked": {
      "enable": false,// 星と星を線で結ぶ
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
      "out_mode": "out", //エリア外に出たシェイプの動き(out、bounceより選択)
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
      "bubble": { //シェイプが膨らむ
        "distance": 400,
        "size": 5,
        "duration": 0.3, //膨らむシェイプの持続時間(onclick時のみ)
        "opacity": 1,
        "speed": 3 //膨らむシェイプの速度(onclick時のみ)
      },
      // "repulse": { //シェイプがカーソルから逃げる
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
});
// requestAnimationFrame(update);






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