//图片懒加载
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

//切换播放源
// 定义视频链接数组
var videoSources = [
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211468&authkey=!AEQOmnOymmemN90",
    "Bilibili": "//player.bilibili.com/player.html?aid=986926821&bvid=BV1rt4y1u7pC&cid=873141436&page=1",
    "YouTube": "https://www.youtube.com/embed/E2LNnRT59bU"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211466&authkey=!AIr-CGMq8MV0Wkg",
    "Bilibili": "//player.bilibili.com/player.html?aid=274489260&bvid=BV1sF411o7w3&cid=1226076798&page=1",
    "YouTube": "https://www.youtube.com/embed/O4Ky68gP_7o"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211459&authkey=!ALRARQx3C4kgOno",
    "Bilibili": "//player.bilibili.com/player.html?aid=731925238&bvid=BV1XD4y1t7gH&cid=873147593&page=1",
    "YouTube": "https://www.youtube.com/embed/s5eJlRJ5BMw"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211465&authkey=!ANpl55oOQ7osKEg",
    "Bilibili": "//player.bilibili.com/player.html?aid=274464181&bvid=BV1ZF411f7sd&cid=1226082078&page=1",
    "YouTube": "https://www.youtube.com/embed/3SpOoJ_uMrY"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211463&authkey=!ACbWboAG19jCbK8",
    "Bilibili": "//player.bilibili.com/player.html?aid=901974928&bvid=BV1vP4y1S7kx&cid=873138064&page=1",
    "YouTube": "https://www.youtube.com/embed/wJXmzvK-OK4"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211469&authkey=!AL8A47HM5X0D41E",
    "Bilibili": "//player.bilibili.com/player.html?aid=404390051&bvid=BV1PV411V7Pr&cid=1226088142&page=1",
    "YouTube": "https://www.youtube.com/embed/hxpTP9O4qMo"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211464&authkey=!AKaCbWC3fB0_tqs",
    "Bilibili": "//player.bilibili.com/player.html?aid=431926910&bvid=BV1FG411j72X&cid=873126647&page=1",
    "YouTube": "https://www.youtube.com/embed/hxpTP9O4qMo"
  },
  // 添加更多视频链接...
];


// 根据选择的播放源切换视频链接
function changeVideoSource() {
  var select = document.getElementById("source-select");
  selectedSource = select.value;

  var iframes = document.getElementsByClassName("video-iframe");
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    var index = iframe.dataset.index;
    iframe.src = videoSources[index][selectedSource];
  }
}

// 页面加载完成后执行切换播放源操作
window.onload = changeVideoSource;