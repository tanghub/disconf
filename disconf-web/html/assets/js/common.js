// 初始入口
(function () {
    window.VISITOR = {};
    window.Context =  {
        web:"/config",
        api:"/config-api"
    };
})();

//
// 头部显示初始化
//
function headShowInit() {
    if (VISITOR.id) {
        $(".login-no").hide();
        $(".login-yes").show();
        $("#username").show();
        $("#username").html(VISITOR.name);
    } else {
        $(".login-no").show();
        $(".login-yes").hide();
        $("#username").hide();
    }
}

//
// 登录其它的控制
//
function loginActions() {
    if (VISITOR.id) {
        $("#brand_url").attr("href", Context.web + "/main.html");
    } else {
        $("#brand_url").attr("href", Context.web);
    }
}

//
// 获取Session信息
//
function getSession() {
    $.ajax({
        type: "GET",
        url: Context.api + "/api/account/session",
        timeout: 3000 // 3s timeout
    }).done(function (data) {
        if (data.success === "true") {
            window.VISITOR = data.result.visitor;
            headShowInit();
        } else {
            window.location.href = Context.web + "/login.html";
        }
    }).fail(function (xmlHttpRequest, textStatus) {
        window.location.href = Context.web + "/login.html";
    });
}

// 获取是否登录并且进行跳转
function getSession2Redirect() {
    $.ajax({
        type: "GET",
        url: Context.api + "/api/account/session"
    }).done(function (data) {
        if (data.success === "true") {
            window.location.href = Context.web + "/main.html";
        } else {
        }
    });
    loginActions();
}
