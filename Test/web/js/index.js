// index 页动态效果加载 starts

window.addEventListener('load', function() {
    // 先停留一段时间，再运行
    setTimeout(function() {
        // Box动态效果
        var whiteBox = document.querySelector('.whiteBox');
        movingUp(whiteBox, 150, function() {
            whiteBox.style.opacity = 1;
        });

        // 字体移动
        var title = document.querySelector('.title');
        movingDown(title, 220, function() {
            title.style.opacity = 1;
        })

        // 按钮渐变出现
        var btn = document.querySelector('.logInBtn');
        var count = 0;
        while (count < 1) {
            count += 0.01;
            btn.style.opacity = count / 1.5;
        }
    }, 800);

})

// 移动函数
// 向上移动
function movingUp(obj, target, callback) {
    // 清除定时器
    clearInterval(obj.timer);

    // 透明度变化计时器
    var num = 0;

    obj.timer = setInterval(function() {
        // step 平滑变化
        var step = (obj.offsetTop - target) / 25;   // 步长
        num++;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        var newPos = obj.offsetTop - step;
        obj.style.top = newPos + 'px';
        obj.style.opacity = num / 100;
    }, 12)

}
// 向下移动
function movingDown(obj, target, callback) {
    // 清除定时器
    clearInterval(obj.timer);

    // 透明度变化计时器
    var num = 0;

    obj.timer = setInterval(function() {
        var step = (target - obj.offsetTop) / 25;
        num++;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
                return;
            }
        }

        var newPos = obj.offsetTop + step;
        obj.style.top = newPos + 'px';
        obj.style.opacity = num / 55;  
    }, 15)

}

// index 页动态效果加载 ends


// Ajax 交互 starts

function ATEST(){
    /* post 方法封装了 ajax 方法*/
    $.post({
      /* 请求的路径 */
      url:"/ajax",
      /* 携带的数据 */
      /* 这里将 username 的值命名为 name 发送，后端接收的是 name */
      data:{'name':$("#username").val()},
      /* 成功后执行回调函数 */
      success:function (data,status){
        alert(data);
        alert(status);
      }
    });
  }

// Ajax 交互 ends