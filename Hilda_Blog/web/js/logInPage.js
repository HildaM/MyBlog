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


// 通过用户名异步查找
selectUserByName = function () {
    $.post({
        url: "/selectUser.do",
        data: {'userName': $("#userName").val()},
        // 向后端发送数据成功后。data：后端返回的数据
        success: function (data) {
            if (data.toString() === 'userName exist') {
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
        url: "/selectUser.do",
        data: {'password': $("#password").val()},
        success: function (data) {
            if (data.toString() === 'password exist') {
                $("#pwdInfo").css("color", "green");
            }
            else {
                $("#pwdInfo").css("color", "red");
            }
            $("#pwdInfo").html(data);
        }
    });
}


// 登录请求 starts
$("#from2").submit(function(){
    $.ajax({
        async: false,
        method: "POST",
        url:'/login.do',
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        data:$("#from2").serialize(),
        dataType: "text",
        success: function (data) {
            if (data.toString() === "success") {
                window.location.href = "/index.html";
                alert("登录成功！");
            }
            else if (data.toString() === "failure") {
                window.location.href = "/logInPage.html";
                alert("登录失败！");
            }
        }
    })
})
// 登录请求 ends


// 检查用户名是否存在
checkUserName = function () {
    $.post({
        url: "/selectUser.do",
        data: {'userName': $("#addUserName").val()},
        success: function (data) {
            if (data.toString() === 'userName exist') {
                $("#checkUserName").css("color", "red");
            }
            else {
                $("#checkUserName").css("color", "green");
            }
            $("#checkUserName").html(data);
        }
    });
}


// 检查邮箱是否存在
checkEmail = function () {
    $.post({
        url: "/selectUser.do",
        data: {"email": $("#addEmail").val()},
        success: function (data) {
            if (data.toString() === 'email exist') {
                $("#checkEmail").css("color", "red");
            }
            else {
                $("#checkEmail").css("color", "green");
            }
            $("#checkEmail").html(data);
        }
    });
}


// 注册用户 starts
$("#from1").submit(function (){
    $.post({
        url: "/addUser.do",
        method: "POST",
        async: false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        data: $("#from1").serialize(),
        dataType: "text",
        success: function (data) {
            if (data.toString() === "success") {
                alert("注册成功！");
            }
            else if (data.toString() === "failure") {
                alert("注册失败！");
            }
            window.location.reload();
        }
    });
})
// 注册用户 ends


