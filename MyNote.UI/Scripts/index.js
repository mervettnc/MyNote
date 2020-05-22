var apiUrl = "https://localhost:44361/";

function isLoggedIn() {

}

function loginData() {

}

function success(message) {
    $(".tab-pane.active .message")
        .removeClass("alert-danger")
        .addClass("alert-success")
        .text(message)
        .show();
}

function error(modelState) {
    if (modelState) {
    var errors = [];
        for (var prop in modelState) {
            for (var i = 0; i < modelState[prop].length; i++) {
                errors.push(modelState[prop][i]);
            }
        }

    var ul = $("<ul>");
    for (var i = 0; i < errors.length; i++) {
        ul.append($("<li>").text(errors[i]));
        }
        $(".tab-pane.active .message")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .html(ul)
            .show();
    }
}

function errorMessage(message) {
    if (message) {
        $(".tab-pane.active .message")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .text(message)
            .show();
    }
}

function resetLoginForms() {
    $(".message").hide();
    $("#login form").each(function () {
        this.reset();
    });
}

$("#signupform").submit(function (event) {
    event.preventDefault();
    var formdata = $(this).serialize();

    $.post(apiUrl + "api/Account/Register", formdata, function (data) {
        resetLoginForms();
        success("Your account has been successfully created.").show();
    }).fail(function (xhr) {
        $(".success").hide();
        error(xhr.responseJSON.ModelState);
    });
});


$(document).ajaxStart(function () {
    $("#loading").removeClass("d-none");
});
$(document).ajaxStop(function () {
    $("#loading").addClass("d-none");
});
$('#login a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    // e.target // newly activated tab
    // e.relatedTarget // previous active tab
    resetLoginForms();

});

$("#signinform").submit(function (event) {
    event.preventDefault();
    var formdata = $(this).serialize();

    $.post(apiUrl + "Token", formdata, function (data) {

        var datastr = JSON.stringify(data);
        if ($("#signinrememberme").prop("checked")) {
            sessionStorage.removeItem("login");
            localStorage["login"] = datastr;
        } else {
            localStorage.removeItem("login");
            sessionStorage["login"] = datastr;
        }

        resetLoginForms();
        success("You have been logged in successfully.Now, you are beign redirected..");
    }).fail(function (xhr) {
        errorMessage(xhr.responseJSON.error_description);
    });
});

https://getbootstrap.com/docs/4.0/components/navs/#via-javascript
$(".navbar-login a").click(function () {
    var href = $(this).attr("href");
    $('#pills-tab a[href="' + href + '"]').tab('show') // Select tab by name

});

