// 透明盒子移动
window.addEventListener('load', function() {
    // 停留一段时间，再运行
    this.setInterval(function() {
        // 透明盒子动态效果
        var transBox_1 = document.querySelector('.transBox_1');
        movingUp(transBox_1, 550, function() {
            transBox_1.style.opacity = 1;
        })

        // var transBox_2 = document.querySelector('.transBox_2');
        // movingDown(transBox_2, 10, function() {
        //     transBox_2.style.opacity = 1;
        // })

    }, 800)
})

// 向上移动函数
function movingUp(obj, target, callback) {
    // 清空定时器
    clearInterval(obj.timer);

    // 透明度变化计时器
    var num = 0;

    obj.timer = setInterval(function() {
        var step = (obj.offsetTop - target) / 25;
        num++;
        step = step > 　0 ? Math.ceil(step) : Math.floor(step);

        var newPos = obj.offsetTop - step;
        obj.style.top = newPos + 　'px';
        obj.style.opacity = num / 100;

        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
    }, 15)
}

// 向下移动函数
// function movingDown(obj, target, callback) {
//     // 清空定时器
//     clearInterval(obj.timer);

//     // 透明度变化计时器
//     var num = 0;

//     obj.timer = setInterval(function() {
//         var step = (target - obj.offsetTop) / 25;
//         num++;
//         step = step > 　0 ? Math.ceil(step) : Math.floor(step);

//         var newPos = obj.offsetTop + step;
//         obj.style.top = newPos + 　'px';
//         obj.style.opacity = num / 100;

//         if (obj.offsetTop == target) {
//             clearInterval(obj.timer);
//             if (callback) {
//                 callback();
//             }
//         }
//     }, 15)
// }