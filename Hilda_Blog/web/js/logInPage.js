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
    // pointer.style.left = x + 'px';
    // pointer.style.top = y + 'px';
})

// 登录请求 starts


//ajax 提交登录信息
$("#from2").submit(function(){
    $.ajax({
        async: false,
        method: "POST",
        url:'/login',
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        data:$("#from2").serialize(),
        dataType: "text",
        success: function () {

        },
        error: function () {
            alert("登录失败！");
        }
    })
})

// 通过用户名异步查找
selectUserByName = function () {
    $.post({
        url: "/selectUserByNameOrPassword",
        data: {'userName': $("#userName").val()},
        // 向后端发送数据成功后。data：后端返回的数据
        success: function (data) {
            if (data.toString() === '正确√') {
                $("#userNameInfo").css("color", "green");
            }
            else {
                $("#userNameInfo").css("color", "red");
            }
            $("#userNameInfo").html(data);
        }
    });
}

// 通过密码异步查找
selectUserByPassword = function () {
    $.post({
        url: "/selectUserByNameOrPassword",
        data: {'password': $("#password").val()},
        success: function (data) {
            if (data.toString() === '正确√') {
                $("#pwdInfo").css("color", "green");
            }
            else {
                $("#pwdInfo").css("color", "red");
            }
            $("#pwdInfo").html(data);
        }
    });
}

// 登录请求 ends


