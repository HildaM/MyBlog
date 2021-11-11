// 动画函数封装
// 向下移动
function Move_Down(obj, target, callback) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function() {
        // step平滑的变化
        var step = (target - obj.offsetTop) / 10;
        step = step > 0? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.top = obj.offsetTop + step + 'px';
    }, 15)
}