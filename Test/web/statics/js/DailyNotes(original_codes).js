// 等页面全部加载完全后再加载 JS
window.addEventListener('load', function() {
    var up_arrow = document.querySelector('.up_arrow');
    var down_arrow = document.querySelector('.down_arrow');
    var roll_contents = document.querySelector('.roll_contents');
    var rightContents = document.querySelector('.rightContents');
    // 2.鼠标经过，就显示隐藏的箭头
    roll_contents.addEventListener('mouseenter', function() {
        up_arrow.style.display = 'block';
        down_arrow.style.display = 'block';
    })
    // 鼠标离开就隐藏
    roll_contents.addEventListener('mouseleave', function() {
        up_arrow.style.display = 'none';
        down_arrow.style.display = 'none';
    })

    // 3.动态生成小圆圈（小圆圈和li的个数一致）
    var ul = roll_contents.querySelector('ul');
    var ol = roll_contents.querySelector('.leftContents');
    var contents_li = roll_contents.querySelector('li');
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = document.createElement('li');

        // 记录当前小圆圈的索引号，通过自定义属性获取
        li.setAttribute('index', i);

        // 将li插入到ol里
        ol.appendChild(li);

        // 4.排他思想（点击当前小圆圈就为此添加current类，其余的就移除）
            // 可以直接在生成小圆圈的同时绑定事件
        li.addEventListener('click', function() {
            // 干掉所有人
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己
            this.className = 'current';

            // 5.点击小圆圈，移动图片，移动的是ul
            // ul的移动距离 = 小圆圈索引号 x “图片”的宽度
            var contentHeight = contents_li.offsetHeight;
            // 当点击某个li
            var index = this.getAttribute('index');
            
            Move_Down(ul, -index * contentHeight);
        })
    }
    // 把ol第一个li设置为 current
    ol.children[0].className = 'current';

    // 6. 克隆相同结构的li
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

})

