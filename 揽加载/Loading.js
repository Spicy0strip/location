var imgg = document.getElementsByTagName("img");

function lazy(imgg) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    var winHeight = window.innerHeight;

    for (var i = 0; i < imgg.length; i++) {
        if(imgg[i].offsetTop < scrollTop + winHeight) {
            imgg[i].src = imgg[i].getAttribute('data-src');
        }
    }
}



lazy(imgg);
window.onscroll = function () {
    throttle(lazy(imgg), 10000);
};

//函数去抖
function debounce(method, delay) {  //空闲时间大于或等于delay,method才会执行
    var last = null;
    return function () {
        var content= this;
        var args = arguments;
        clearTimeout(last);
        last = setTimeout(function () {
            method.apply(content, args);
        },delay);
    }
};

//函数节流
function throttle(method, delay) { //method执行频率限定在 次/delay

    var last = 0;
    return function () {
        var curr = +new Date(); //返回毫秒数，相当于.valueOf(); .getTime()也是得到毫秒数
        if (curr - last > delay) {
            method.apply(this, arguments);
            last = curr;
        }
    }

};