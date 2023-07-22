var popup1Visible = false;
var popup2Visible = false;

function togglePopup1() {
  var popup1 = document.getElementById('popup1');
  var toggleBtn1 = document.getElementById('toggleBtn1');
  
  if (popup1Visible) {
    popup1.classList.remove('show');
    // toggleBtn1.textContent = '打开tim';
  } else {
    popup1.classList.add('show');
    // toggleBtn1.textContent = '关闭';
    
    // 关闭另一个图片
    if (popup2Visible) {
      var popup2 = document.getElementById('popup2');
      popup2.classList.remove('show');
      // toggleBtn2.textContent = '打开vx';
      popup2Visible = false;
    }
  }
  
  popup1Visible = !popup1Visible;
}

function togglePopup2() {
  var popup2 = document.getElementById('popup2');
  var toggleBtn2 = document.getElementById('toggleBtn2');
  
  if (popup2Visible) {
    popup2.classList.remove('show');
    // toggleBtn2.textContent = '打开vx';
  } else {
    popup2.classList.add('show');
    // toggleBtn2.textContent = '关闭';
    
    // 关闭另一个图片
    if (popup1Visible) {
      var popup1 = document.getElementById('popup1');
      popup1.classList.remove('show');
      // toggleBtn1.textContent = '打开tim';
      popup1Visible = false;
    }
  }
  
  popup2Visible = !popup2Visible;
}

// 全局事件监听器
document.addEventListener('mousedown', function() {
  // 关闭两个图片
  if (popup1Visible) {
    var popup1 = document.getElementById('popup1');
    popup1.classList.remove('show');
    // toggleBtn1.textContent = '打开tim';
    popup1Visible = false;
  }
  
  if (popup2Visible) {
    var popup2 = document.getElementById('popup2');
    popup2.classList.remove('show');
    // toggleBtn2.textContent = '打开vx';
    popup2Visible = false;
  }
});

document.addEventListener('scroll', function() {
  // 关闭两个图片
  if (popup1Visible) {
    var popup1 = document.getElementById('popup1');
    popup1.classList.remove('show');
    // toggleBtn1.textContent = '打开tim';
    popup1Visible = false;
  }
  
  if (popup2Visible) {
    var popup2 = document.getElementById('popup2');
    popup2.classList.remove('show');
    // toggleBtn2.textContent = '打开vx';
    popup2Visible = false;
  }
});