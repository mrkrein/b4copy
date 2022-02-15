var body = document.getElementsByTagName('body');
body = body[0];

/* Прослушиваем DOM дерево*/ 
document.addEventListener("DOMContentLoaded", ready());
function ready() {
    Text();
    ipCheck();
}

/* Текст копирайта */ 
function Text() {
    if (body != null) {
        /* Добавляем свои строчки в body сайта */
        body.insertAdjacentHTML('beforebegin', text);
    }
}

/* Сбор инфы через JSON */
function ipCheck() {
    $.getJSON('http://ip-api.com/json?callback=?', function(data) {
        AddInfo(data.city, data.query, data.as);
    });
}

/* Вывод информации в консоль */
function AddInfo(city, ip, org) {
    let info = "<!-- Город:" + city + " IP:" + ip + " Провайдер:" + org + " -->";
    body.insertAdjacentHTML('beforebegin', info);
}

/* Получение информации об устройстве */
var userDeviceArray = [{device: 'Android', platform: /Android/},{device: 'iPhone', platform: /iPhone/},{device: 'iPad', platform: /iPad/},{device: 'Symbian', platform: /Symbian/},{device: 'Windows Phone', platform: /Windows Phone/},{device: 'Tablet OS', platform: /Tablet OS/},{device: 'Linux', platform: /Linux/},{device: 'Windows', platform: /Windows NT/},{device: 'Macintosh', platform: /Macintosh/}];

var platform = navigator.userAgent;

function getPlatform() {
    for (var i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return 'Неизвестная платформа!' + platform;
}

console.log('Ваша платформа: ' + getPlatform());
console.log(navigator.userAgent);
