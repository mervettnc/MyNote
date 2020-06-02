// AngularJs Version

var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "pages/app.html" })
        .when("/login", { templateUrl: "pages/login.html" });
        
});

app.controller("myCtrl", function ($scope) {
    $scope.checkAuth = function () {
        var tokenJson = localStorage["token"] | sessionStorage["token"];

        if (!tokenJson) {
            //login/register view'ini göster
            console.log("giriş yapılmamış");
            return;
        }

        //token geçerli mi?
        //app'i göster
    };
    //uygulamaya start veren metot
    $scope.checkAuth();
});

//JQuery Dom Ready
$(function () {
    $(".navbar-login a").click(function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        // https://getbootstrap.com/docs/4.0/components/navs/#via-javascript
        $('#pills-tab a[href="' + href + '"]').tab('show'); // Select tab by name
    });

    $('body').on('click', '#pills-tab a', function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
});


