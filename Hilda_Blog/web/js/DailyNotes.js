window.addEventListener('load', function() {
    var roll_contents = document.querySelector('.roll_contents');
    var ul = roll_contents.querySelector('.rightContents');
    var ol = roll_contents.querySelector('.leftContents');
    var li_content = ul.querySelector('li');

    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = document.createElement('li');
        // 记录当前索引的索引号，通过自定义属性获取
        li.setAttribute('index', i);
        // 将li插入到ol（目录）中
        ol.appendChild(li);

        // 往 li 里面加东西
        // 加上序号
        var p = document.createElement('p');
        li.appendChild(p);
        var P = li.querySelector('p');
        P.className = 'p-out';
        P.innerHTML = i + 1;

        // 给添加的li绑定事件
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            // 点击相应的目录，跳转到相应的内容
            var contentHeight = li_content.offsetHeight;
            var index = this.getAttribute('index');
            Move_Down(ul, -index * contentHeight);
        })

        // 鼠标放置到 dot 上，触发样式改变
        li.addEventListener('mouseover', function() {
            this.childNodes[0].className = 'p-over';
        })
        // 鼠标退出 dot 后，回复原状
        li.addEventListener('mouseout', function() {
            this.childNodes[0].className = 'p-out';
        })
    }

})
