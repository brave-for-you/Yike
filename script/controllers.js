angular.module("Ctrls", [])
    //定义导航菜单控制器
    .controller("NavsCtrl", ["$scope", function($scope) {
        //将数据从视图中抽离,方便维护
        $scope.navs = [
            { text: '今日一刻', icon: 'icon-home', link: '#!/today' },
            { text: '往期内容', icon: 'icon-file-empty', link: '#!/older' },
            { text: '热门作者', icon: 'icon-pencil', link: '#!/author' },
            { text: '栏目浏览', icon: 'icon-menu', link: '#!/category' },
            { text: '设置', icon: 'icon-cog', link: '#!/settings' }
        ];
    }])
    //今日一刻控制器
    .controller("TodayCtrl", ["$scope", "$http", "$rootScope", "$filter", function($scope, $http, $rootScope, $filter) {
        $rootScope.loaded = false;
        $rootScope.title = "今日一刻";
        $rootScope.key = 0;

        //获取当前时间,前后端都能做
        var today = $filter("date")(new Date, "yyyy-MM-dd");

        $http({
            url: "./api/today.php",
            params: { today: today } //前端获取时间传过去
        }).then(function(res) {
            console.log(res);
            $scope.posts = res.data.posts;
            $scope.date = res.data.date;

            $rootScope.loaded = true;
        });
    }])
    //往期内容控制器
    .controller('OlderCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
        $rootScope.loaded = false;
        $rootScope.title = "往期内容";
        $rootScope.key = 1; //控制选中菜单颜色

        //查看几天前的内容,使用后端做更好
        var day = -2;

        $http({
            url: "./api/older.php",
            params: { day: day } //前端获取时间传过去
        }).then(function(res) {
            console.log(res);
            $scope.posts = res.data.posts;
            $scope.date = res.data.date;

            $rootScope.loaded = true;
        });
    }])