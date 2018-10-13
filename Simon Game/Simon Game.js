var redAudio = new Audio(
    "https://www.freecodecamp.cn/images/simonSound1.mp3"
);
var blueAudio = new Audio(
    "https://www.freecodecamp.cn/images/simonSound2.mp3"
);
var greenAudio = new Audio(
    "https://www.freecodecamp.cn/images/simonSound3.mp3"
);
var yellowAudio = new Audio(
    "https://www.freecodecamp.cn/images/simonSound4.mp3"
);


var buu = document.getElementById("bu"); //游戏开关按钮
var buuu = document.getElementById("buu"); //按钮的变化
var courr = document.getElementById("cour"); //屏幕的显示
var buuuu = document.getElementById("buuu"); //strict模式
var dii = document.getElementById("di"); //strict模式上面的红点
var start = document.getElementById("st"); //start游戏开始

var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");

var startt  = "on"; //真正开始游戏的显示


var buuuStr = "off"; //判断按钮的关与否
var strict = "no"; //是否在严格模式下



buu.onclick = function (event) {
    if (buuuStr === "off") {
        buuu.style.left = "25px";
        buuuStr = "on";
        courr.style.color = "red";
        courr.innerText = "--";
    }
    else {
        buuu.style.left = "0";
        buuuStr = "off";
        courr.innerText = "00";
        courr.style.color = "black";
    }
};

buuuu.onclick = function (event) {
    if (strict == "no") {
        strict = "yes";
        dii.style.backgroundColor = "rgb(252, 1, 2)";
    }

    else {
        strict = 'no';
        dii.style.backgroundColor = "rgb(51, 51, 51)";
    }
};

start.onclick = function (event) {
    startt = "yes";
    courr.style.animation = "myself1 1s linear";
};

courr.addEventListener("webkitAnimationEnd", function () {

    courr.innerHTML = "01";
    gameStart(strict);

});



var index = []; //存储颜色快顺序的数组
var _continue = 1; //用来判断是否继续
var flag = 0; //game.index数组的标识
var cou = 0; //存储关卡回合数
var colors = ["red", "blue", "green", "yellow"]; //颜色快数组


//产生随机的颜色
var randomColor = function () {
    var len = colors.length; //获取颜色快数组长度
    var randomNun = Math.floor(Math.random() * len);
    var col = colors[randomNun]; //存储产生的随机颜色
    index.push(col);
    return col;
};


//颜色快对应发出声音
function colorSound(colId) {
    switch (colId) {
        case "red":{
            redAudio.play();
            break;
        }
        case "blue":{
            blueAudio.play();
            break;
        }
        case "green":{
            greenAudio.play();
            break;
        }
        case "yellow":{
            yellowAudio.play();
            break;
        }
    }
}

function removeUpColor() {
    $("#red").removeClass("red-show");
    $("#blue").removeClass("blue-show");
    $("#green").removeClass("green-show");
    $("#yellow").removeClass("yellow-show");
}

//突出颜色快
function gameColorUp(col) {
    switch (col) {
        case "red":{
            redAudio.play();
            $("#red").addClass("red-show");
            break;
        }
        case "blue":{
            blueAudio.play();
            $("#blue").addClass("blue-show");
            break;
        }
        case "green":{
            greenAudio.play();
            $("#green").addClass("green-show");
            break;
        }
        case "yellow":{
            yellowAudio.play();
            $("#yellow").addClass("yellow-show");
            break;
        }
    }
    window.setTimeout(function () {
        removeUpColor();
    },500);
}


//显示颜色块顺序
function colorListShow(isContinue) {
    flag = 0; //index标识设为从0开始
    if (isContinue)  { //判断是否继续生成随机颜色
        randomColor(); //产生新的随机颜色
    }
    var i = 0;
    var interval = setInterval(function () { //设置定时器

        var col = index[i]; //col存储index数组的第i个颜色
        gameColorUp(col);  //让对应颜色突出
        i++;
        if (i >= index.length) { //i的长度大于Index的长度
            clearInterval(interval); //终止定时器
        }
    }, 700)
}


function checkColorList(strict) {
    var ctn = _continue;
    flag = 0;
    $(".color-piece").click(function () { //类名为color-piece的元素点击事件
        var id = $(this).attr("id"); //吧所点击的那个id 属性赋值给 刚声明的id值
        colorSound(id);

        if(id != index[flag]) { //判断id与index数组的第flag个值相不相等

            console.log(strict);
            if (strict == "yes") { //判断是否为strict模式
                courr.innerHTML = "!!";

                cou = 0; //该值赋为0，重新开始
                flag = 0; //重新从0开始检查
                ctn = 1; //允许生成随机颜色
                index = []; //圆index数组清空
                cou++;
                var str = "0" + cou;
                setTimeout(function () {
                    courr.innerHTML = str;
                    colorListShow(ctn);
                }, 500);
            }
            else {
                flag = 0;
                ctn = 0; //不允许生成新的随机颜色
                courr.innerHTML = "!!";

                setTimeout(function () {
                    var str = "0" + cou;
                    courr.innerHTML = str; //再次显示回合数
                    colorListShow(ctn); //重新显示颜色块的顺序
                }, 500);
            }
        }

        else {
            flag ++; //累加
            if (flag >= index.length) { //否则就继续
                if (flag == 21) { //等于20，则赢
                    courr.innerHTML = "win!";
                }
                else {
                    cou++;  // 回合数加1
                    var str = "0" + cou;
                    courr.innerHTML = str;
                    ctn = 1; //允许产生随机颜色
                    colorListShow(ctn); //显示颜色快顺序
                }
            }
        }
    })
}


function gameStart(strict) {
    cou++; //回合数加1
    var str = "0" + cou;
    courr.innerHTML = str;
    colorListShow(_continue); //显示颜色快数组
    checkColorList(strict); //检查颜色快顺序

}

if (startt == "yes") {
    $("#start").click(function () {
        cou = 0;
        var str = "0" + ++cou;
        index = [];
        courr.innerHTML = str;
        colorListShow(_continue);
    })
}
