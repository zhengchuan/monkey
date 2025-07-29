// ==UserScript==
// @name         永祥去水印
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  去掉通威、永祥内部系统去水印，阅读更丝滑，已实现FBC、ERP、金山
// @author       ZhengChuan
// @match        http://fbc.tongwei.com/*
// @match        https://yxerp.tongwei.com/*
// @match        https://tongwei.kdocs.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tongwei.com
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
    let currentUrl = document.URL;
    if(currentUrl.startsWith("http://fbc.tongwei.com/")){
        setTimeout(function(){
            let water = document.getElementById("1.23452384164.123412415");
            if(!!water){
                water.style.display='none';
            }
        },2500)
    }
    if(currentUrl.startsWith("https://yxerp.tongwei.com/")){
         setTimeout(function(){
            let waters = document.getElementsByClassName("T8JcTdAi");
            if(waters.length>0){
                waters[0].style.display='none';
            }
        },2500)
    }
    if(currentUrl.startsWith("https://tongwei.kdocs.cn/")){
        setTimeout(function(){
            let water = document.querySelector("#root > div.outline.pc.read-only.sidebar-visible > div.container-wrap > div.uikit-wo-watermark-plugin.uikit-watermark-container");
            if(!!water){
                alert("asdf");
                water.remove();
            }
        },2500)
    }
})();
