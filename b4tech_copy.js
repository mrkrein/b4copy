let d = new Date();
let ver = "1.0.1";
var text = "<!-- Данный сайт был написан: B4Tech P.S -->" + "<!-- INST: @body4_drift VK: body4_drift -->" + "<!-- Текущая дата, полученная с сервера " + d + "-->" + "<!-- Версия скрипта автообновления " + ver + "-->";

var body = document.getElementsByTagName('body');
if (body != null) {
    body = body[0];
    body.insertAdjacentHTML('beforebegin', text);
}

