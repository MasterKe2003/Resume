const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
window = dom.window;
document = window.document;

async function pushMessage() {
	var name = document.getElementById('name');
	var vx = document.getElementById('vx');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	let m = `姓名:${name}\n微信:${vx}\nemail:${email}\n消息:${message}`;
	const url = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=51469656-1ebb-4acf-904d-6ca85e7224f1';
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			msgtype: 'text',
			text: {
				content: m
			}
		})
	};
	const response = await fetch(url, options);
	const data = await response.json();
	return data.errmsg === 'ok';
}
