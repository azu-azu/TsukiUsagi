const playingCount = 7;
const playingFragment = document.createDocumentFragment(); //fragment作成

for (i = 0; i < playingCount; i++) {
  let sector = document.createElement('div');
  sector.className = "sector2";
  playingFragment.appendChild(sector);

  let rotateBack = document.createElement('div');
  rotateBack.className = "rotate2";
  sector.appendChild(rotateBack);

  let fallingLayer = document.createElement('div');
  fallingLayer.className = "falling2";
  rotateBack.appendChild(fallingLayer);

  let lineHitbox = document.createElement('div');
  lineHitbox.className = "line-box2";
  fallingLayer.appendChild(lineHitbox);

  let line = document.createElement('div');
  line.className = "line-box__line2 c-ball c-glass--white";
  lineHitbox.appendChild(line);
}
const playingParent = document.getElementById('js-sector-play');
playingParent.appendChild(playingFragment);
