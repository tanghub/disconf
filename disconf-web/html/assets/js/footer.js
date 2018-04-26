(function ($) {

    // 登出
    $("#signout").on("click", function () {
        $.ajax({
            type: "GET",
            url: Context.api + "/api/account/signout"
        }).done(function (data) {
            if (data.success === "true") {
                VISITOR = {};
                getSession();
            }
        });
    });

})(jQuery);