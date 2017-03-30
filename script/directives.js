angular.module("Directives",[]).directive("yikeLoading",function () {
    return {
        restrict:"A",//属性ACME
        template:'<img ng-hide="loaded" class="loading" src="./public/images/loading.gif" alt="" />'
    }
});