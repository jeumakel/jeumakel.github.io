var el = document.getElementById('imageSection'),
  blockCount = 25,
  i = 0,
  sizeX = 150,
  sizeY = 150,
  imgEl;
for (i = 0; i < blockCount; i++) {
  imgWrapper = document.createElement('div');
  imgWrapper.setAttribute('class', 'imgWrapper');
  imgEl = document.createElement('img');
  imgEl.style.width = (sizeX + (Math.random() - 0.5) * 100) + 'px';
  imgEl.style.height = (sizeY + (Math.random() - 0.5) * 100) + 'px';
  imgWrapper.appendChild(imgEl);
  el.appendChild(imgWrapper);
}
