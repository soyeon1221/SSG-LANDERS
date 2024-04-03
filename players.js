/* PLAYERS */
// 각 상자의 요소를 가져옵니다.
var boxes = document.querySelectorAll('.box');

// 각 상자에 대한 이벤트를 동적으로 추가합니다.
for (var i = 0; i < boxes.length; i++) {
  // 각 상자에 호버 이벤트를 추가합니다.
  boxes[i].addEventListener('mouseover', function() {
    // 호버된 상자의 너비를 500px로 설정합니다.
    this.style.width = '500px';
    // 호버된 상자를 제외한 다른 상자들의 너비를 100px로 설정합니다.
    for (var j = 0; j < boxes.length; j++) {
      if (boxes[j] !== this) {
        boxes[j].style.width = '100px';
      }
    }
  });
}