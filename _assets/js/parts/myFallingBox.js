const fallingCount = 7;
const fallingFragment = document.createDocumentFragment(); //fragment作成

// falling-box
for (i = 0; i < fallingCount; i++) {
  let sector = document.createElement('div');
  sector.className = "sector";
  fallingFragment.appendChild(sector);

  let rotateBack = document.createElement('div');
  rotateBack.className = "rotate";
  sector.appendChild(rotateBack);

  let fallingLayer = document.createElement('div');
  fallingLayer.className = "falling";
  rotateBack.appendChild(fallingLayer);

  let lineHitbox = document.createElement('div');
  lineHitbox.className = "line-box";
  fallingLayer.appendChild(lineHitbox);

  let line = document.createElement('div');
  line.className = "line-box__line c-ball c-glass--yellow";
  lineHitbox.appendChild(line);
}
const fallingParent = document.getElementById('js-sector');
fallingParent.appendChild(fallingFragment);