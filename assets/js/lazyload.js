// 获取所有具有 data-src 属性的图片元素
const lazyImages = document.querySelectorAll('img[data-src]');

// 遍历每个图片元素
lazyImages.forEach((img) => {
  // 当图片进入可视区域时
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 将 data-src 属性的值赋给 src 属性，触发图片加载
        img.src = img.dataset.src;
        // 停止观察该图片
        observer.unobserve(img);
      }
    });
  });

  // 开始观察图片
  observer.observe(img);
});