// ==UserScript==
// @name         时代光华课程自动学习
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  时代光华课程自动学习，每10分钟自动刷新页面（延迟30秒，预留网站计算时延），课程完成后自动点击下一步
// @author       zhengchuan
// @match        https://v4.21tb.com/els/html/courseStudyItem/courseStudyItem.learn.do*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=21tb.com
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // 完成进度
    let sr = document.getElementById("rms-studyRate").textContent;
    // 间隔次数计数
    let count = 0;
    // 定时任务间隔
    let offset = 10000;
    // 进入页面先执行一次，
    setInterval(function(){
        auto();
    },offset);

    // 自动操作
    function auto(){
        // 学习进度100%时自动点击下一步
        if(sr == '100'){
            $("#goNextStep").click();
            return;
        }
        // 630秒自动刷新页面
        count++;
        if(count*offset/1000 > 630){
            location.reload();
        }
    }
})();
