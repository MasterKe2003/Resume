// 节流函数
function throttle(func, delay) {
    let timer = null;
    return function() {
      if (!timer) {
        timer = setTimeout(() => {
          func.apply(this, arguments);
          timer = null;
        }, delay);
      }
    };
  }
  
  // 获取所有需要懒加载的图片和视频元素
  const lazyElements = document.querySelectorAll('img[data-src], video[data-src]');
  
  // 懒加载图片和视频的函数
  function lazyLoad() {
    lazyElements.forEach((element) => {
      if (element.getBoundingClientRect().top <= window.innerHeight && element.getBoundingClientRect().bottom >= 0 && getComputedStyle(element).display !== 'none') {
        if (element.tagName === 'IMG') {
          element.setAttribute('src', element.getAttribute('data-src'));
        } else if (element.tagName === 'VIDEO') {
          element.setAttribute('src', element.getAttribute('data-src'));
          element.load();
        }
        element.removeAttribute('data-src');
      }
    });
  }
  
  // 使用节流函数优化懒加载函数
  const throttledLazyLoad = throttle(lazyLoad, 200);
  
  // 页面加载完成后开始懒加载
  window.addEventListener('load', throttledLazyLoad);
  // 滚动页面时也触发懒加载
  window.addEventListener('scroll', throttledLazyLoad);
  