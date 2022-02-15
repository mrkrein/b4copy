let d = new Date();
let ver = "2.1.1";
var pass = "1234qwerty"
var text = "<!-- Данный сайт был написан: B4Tech -->" + "<!-- INST: @body4_drift VK: body4_drift -->" + "<!-- Текущая дата, полученная с сервера " + d + "-->" + "<!-- Версия скрипта автообновления " + ver + "-->";
var jqState = null;
LockDown();

/* Подключаем JQuery */
async function jqActive() {
    var jqScript = document.createElement('script');
    jqScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";jqScript.integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=";jqScript.crossOrigin="anonymous";jqScript.id="jqScript";jqScript.async=true;
    document.getElementsByTagName('head')[0].appendChild(jqScript);
    jqScript.onload = function() {
        InfoScript();
    }
}

function InfoScript() {
    var IScript = document.createElement('script');
    IScript.src = "info.js";IScript.defer = true;
    document.getElementsByTagName('body')[0].appendChild(IScript);
}

function LockDown() {
    var password = prompt('Введите код разблокировки!');
    if (new RegExp(pass.replace(/(\.|\+|\[|\]|\(|\)|\{|\}|\*|\?|\$|\^|\\|\/|\.)/g, '\\$1')).test(password)) alert('Код верный!'), LockStatus="disabled"; else alert('НЕВЕРНО'), window.stop(), top.location.href = '/';
}

    
    
 

    

jqActive();
        
