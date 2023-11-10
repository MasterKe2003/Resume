async function pushMessage(event) {
	event.preventDefault();

	var name = document.getElementById('name').value;
	var vx = document.getElementById('vx').value;
	var message = document.getElementById('message').value;
	let m = 	`姓名:${name}\n微信:${vx}\n消息:${message}`
	// 发送
	fetch("https://api.day.app/push", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json; charset=utf-8"
		},
		body: JSON.stringify({
		  body: m,
		  isArchive:"1",
		  level:"timeSensitive",
		  title: "简历消息",
		  device_key: "gQ7d2q2VJFe6kA9R7ZWK48"
		})
	  })
		.then(response => {
			alert("发送成功啦，等我联系你哦") 
		})
		.catch(error => {
			alert("发送失败了，网页又出bug啦,劳烦拨打我的电话哦")
		});
	  
}
