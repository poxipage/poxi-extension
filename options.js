import {html} from "./optionsHtml.js";
document.body.innerHTML = html;

const inputRedirectUrl = document.querySelector("input");
inputRedirectUrl.value = localStorage.redirectUrl || "";

document.querySelector("form").addEventListener("submit", function () {
    localStorage.setItem("redirectUrl", inputRedirectUrl.value);
}, false);

