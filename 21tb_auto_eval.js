// ==UserScript==
// @name         时代光华课程自动评分
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  时代光华课程自动满分并提交
// @author       zhengchuan
// @match        https://v4.21tb.com/els/html/studyCourse/studyCourse.enterCourse.do*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=21tb.com
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    $("body > article > div > div.cs-test-head.cs-evaluate-head > div > p.cs-eval-score > input:nth-child(9)").click();
    $("#courseEvaluateForm > div:nth-child(2) > ul > li:nth-child(1) > div.cs-test-option.cs-test-radio.cs-test-radio-last").click();
    $("#courseEvaluateForm > div:nth-child(2) > ul > li:nth-child(2) > div.cs-test-option.cs-test-radio.cs-test-radio-last").click();
    $("#courseEvaluateForm > div:nth-child(2) > ul > li:nth-child(3) > div.cs-test-option.cs-test-radio.cs-test-radio-last").click();
    $("#courseEvaluateForm > div:nth-child(2) > ul > li:nth-child(4) > div.cs-test-option.cs-test-radio.cs-test-radio-last").click();
    $("#courseEvaluateSubmit").click();
    $("#layui-layer1 > div.layui-layer-btn > a.layui-layer-btn1")[0].click();
})();
