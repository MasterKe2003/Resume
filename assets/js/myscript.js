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
    "Bilibili": "//player.bilibili.com/player.html?aid=700155316&bvid=BV1Dm4y1e71y&cid=1174795058&page=1",
    "YouTube": "https://www.youtube.com/embed/E2LNnRT59bU"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211466&authkey=!AIr-CGMq8MV0Wkg",
    "Bilibili": "",
    "YouTube": "https://www.youtube.com/embed/O4Ky68gP_7o"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211459&authkey=!ALRARQx3C4kgOno",
    "Bilibili": "",
    "YouTube": "https://www.youtube.com/embed/s5eJlRJ5BMw"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211465&authkey=!ANpl55oOQ7osKEg",
    "Bilibili": "",
    "YouTube": "https://www.youtube.com/embed/3SpOoJ_uMrY"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211463&authkey=!ACbWboAG19jCbK8",
    "Bilibili": "",
    "YouTube": "https://www.youtube.com/embed/wJXmzvK-OK4"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211469&authkey=!AL8A47HM5X0D41E",
    "Bilibili": "",
    "YouTube": "https://www.youtube.com/embed/hxpTP9O4qMo"
  },
  {
    "OneDrive": "https://onedrive.live.com/embed?resid=74FD228768620A91%211464&authkey=!AKaCbWC3fB0_tqs",
    "Bilibili": "",
    "YouTube": "https://www.youtube.com/embed/hxpTP9O4qMo"
  },
  // 添加更多视频链接...
];

// 默认选择的播放源
var selectedSource = "OneDrive";

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