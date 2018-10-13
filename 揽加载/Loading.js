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
    lazy(imgg);
};