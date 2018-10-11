window.onload = function() {
     
    var drag = document.getElementById('drag');
      
    drag.onmousedown = function(event) {
         
        var diffX = event.clientX - drag.offsetLeft;  
        var diffY = event.clientY - drag.offsetTop; //获取鼠标在目标元素左键按下时的位置

        document.onmousemove = function(event) {

            var left=event.clientX-diffX;
            var top=event.clientY-diffY;

            drag.style.left = left + 'px';
            drag.style.top = top + 'px'; //改变盒子的定位
        };

        document.onmouseup = function(event) {
            this.onmousemove = null;
            this.onmouseup = null;
        };
    };
};
