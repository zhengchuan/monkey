// ==UserScript==
// @name         永祥去水印
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  去掉通威FBC、永祥ERP水印，阅读更丝滑
// @author       ZhengChuan
// @match        http://fbc.tongwei.com/*
// @match        https://yxerp.tongwei.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tongwei.com
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/528730/%E9%80%9A%E5%A8%81FBC%E5%8E%BB%E6%B0%B4%E5%8D%B0.user.js
// @updateURL https://update.greasyfork.org/scripts/528730/%E9%80%9A%E5%A8%81FBC%E5%8E%BB%E6%B0%B4%E5%8D%B0.meta.js
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
})();
