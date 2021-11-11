const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const firstForm = document.getElementById("from1");
const secondForm = document.getElementById("from2");
const container = document.querySelector(".container");

signinBtn.addEventListener("click", ()=>{
    container.classList.remove("right-panel-active");
})

signupBtn.addEventListener('click',()=>{
    container.classList.add("right-panel-active");
})

firstForm.addEventListener('submit', (e) => e.preventDefault());
// secondForm.addEventListener('submit', (e) => e.preventDefault());


// 鼠标图标跟随
var pointer = document.querySelector('.pointer');
document.addEventListener('mousemove', function(e) {
    // 1. 只要我们鼠标移动 1px 就会触发该事件
    // 2. 获取坐标
    var x = e.pageX;
    var y = e.pageY;
    pointer.style.left = x + 'px';
    pointer.style.top = y + 'px';
})

// 登录请求 starts


//ajax提交信息
$("#from2").submit(function(){
    parent.layer.close(index); //再执行关闭
    $.ajax({
        async: false,
        type: "POST",
        url:'${pageContext.request.contextPath}/login',
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        data:$("#from2").serialize(),
        dataType: "text",
        success: function () {
        },
        error: function () {
        }
    })
})

// 登录请求 ends


