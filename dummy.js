

const redirectUrl = localStorage.getItem("redirectUrl");
import {html as html2} from "./optionsHtml.js";
let html = html2;
if(redirectUrl){
document.title="‎"
	html =
	`<iframe style="width:100%; height:100%;" src=${redirectUrl} frameBorder="0"></iframe> `
	document.body.innerHTML = html;
}
else{
document.title="Poxi extension settings"
	import("./options.js")
}