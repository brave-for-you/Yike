//应用主模块
var Yike = angular.module("Yike", ["ngRoute", "Ctrls", "Directives"]);

//配置路由
Yike.config(["$routeProvider", function($routeProvider) {
    //根据地址的变化配置路由
    $routeProvider.when("/today", { //今日一刻
        templateUrl: "./views/today.html",
        controller: "TodayCtrl"
    }).when("/older", { //往期内容
        templateUrl: "./views/older.html",
        controller: "OlderCtrl"
    }).when("/author", {//作者
        templateUrl: "./views/author.html",
        controller: "AuthorCtrl"
    }).when("/content", {//内容点击
        templateUrl: "./views/content.html",
        controller: "contentCtrl"
    }).when("/authorcon", {//作者详细
        templateUrl: "./views/authorcon.html",
        controller: "authorconCtrl"
    }).otherwise({ //默认指定的
        redirectTo: "/today"
    })
}]);

//在根作用域下添加一个方法,这个方法可以被任一个控制器访问到
Yike.run(["$rootScope", function($rootScope) {
    //设置变量名用于控制类名
    $rootScope.callapsed = false;
    $rootScope.loaded = false;
    //事件回调,用于处理导航交互
    $rootScope.toggle = function() {
        //切换类名
        $rootScope.collapsed = !$rootScope.collapsed;
        //控制每个具体的链接动画
        //获取所有的链接
        var navs = document.querySelectorAll(".navs dd");
        if ($rootScope.collapsed) {
            //左右移动自身的100%,给每个分别注册过渡
            for (var i = navs.length - 1; i >= 0; i--) {
                navs[i].style.transform = "translate(0)";
                navs[i].style.transitionDuration = 0.20 * (i + 1) + "s";
                navs[i].style.transitionDelay = "0.3s";
            }
        } else {
            //移动回去
            for (var i = 0; i < navs.length; i++) {
                // j = 4    5 - 4 = 1
                // j = 3    5 - 3 = 2
                // j = 2    5 - 2 = 3
                // j = 1    5 - 1 = 4
                // j = 0;   5 - 0 = 5
                navs[i].style.transform = "translate(-100%)";
                navs[i].style.transitionDuration = 0.20 * (navs.length - i) + "s";
                navs[i].style.transitionDelay = ""; //延迟要制空上面的
            }
        }
    }
    $rootScope.con = function() {
        $rootScope.id=this.post.id;
        location.href="#!/content";
    }
    $rootScope.aucon = function() {
        $rootScope.id=parseInt(this.author.id);
        location.href="#!/authorcon";
    }
}])