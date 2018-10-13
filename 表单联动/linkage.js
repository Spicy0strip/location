window.onload = function () {
    var cityList = [
        [

        ],
        [
            "西安市",
            "咸阳市",
            "宝鸡市",
            "汉中市",
            "榆林市",
            "延安市",
            "韩城市",
            "铜川市",
            "渭南市",
            "安康市",
            "商洛市"
        ],
        [
            "成都市",
            "自贡市",
            "攀枝花市",
            "泸州市",
            "德阳市",
            "绵阳市",
            "广元市",
            "遂宁市",
            "内江市",
            "乐山市"
        ],
        [
            "郑州市",
            "开封市",
            "洛阳市",
            "南阳市",
            "漯河市",
            "许昌市",
            "三门峡市",
            "周口市",
            "新乡市",
            "安阳市",
            "信阳市"
        ],
        [
            "太原市",
            "大同市",
            "阳泉市",
            "长治市",
            "晋城市",
            "晋中市",
            "运城市",
            "忻州市",
            "吕梁市",
            "古交市"
        ],
        [
            "哈尔冰市",
            "齐齐哈尔市",
            "鹤岗市",
            "双鸭山市",
            "鸡西市",
            "大庆市",
            "牡丹江市",
            "佳木斯市",
            "黑河市",
            "七台河市"
        ]
    ];


    var xianList = [
        [
            "蓝田县",
            "周至县",
            "户县"
        ],
        [
            "三原县",
            "泾阳县",
            "乾县",
            "礼泉县",
            "永寿县",
            "彬县",
            "长武县"
        ],
        [
            "凤翔县",
            "岐山县",
            "扶风县",
            "眉县",
            "陇县",
            "千阳县",
            "麟游县"
        ],
        [
            "南郑县",
            "城固县",
            "洋县",
            "西乡县",
            "勉县",
            "宁强县",
            "虐阳县",
            "镇巴县"
        ],
    ];

    var shengg = document.getElementById("sheng");
    var cityy = document.getElementById("city");
    var xiann = document.getElementById("xian");

    function shengForm() {

        var str = '';
        var arr = cityList[shengg.selectedIndex];

        for (var i = 0; i < arr.length; i++){
            str += "<option>" + arr[i] + "<\/option>";
        }
        cityy.innerHTML = str;


        var arr1 = xianList[cityy.selectedIndex];
        var str1 = "";

        for (var i = 0; i < arr1.length; i++) {
            str1 += "<option>" + arr1[i] + "<\/option>";
        }



        xiann.innerHTML = str1;
    }

    shengg.onclick = function (event) {
        shengForm();

    };

    function cityForm() {
        var str = '';
        var arr = xianList[cityy.selectedIndex];
        for (var i = 0; i < arr.length; i++) {
            str += "<option>" + arr[i] + "<\/option>";
        }

        xiann.innerHTML = str;
    }

    cityy.onclick = function (event) {
        cityForm();
    }

};