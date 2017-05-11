;(function (angular) {
    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        //主分页路由配置
            .state('app', {
                url: '/app',
                views: {
                    home: {
                        template: '<h1>首页</h1>',
                    },
                    column: {
                        template: '<h1>专栏</h1>'
                    },
                    author: {
                        template: '<h1>作者</h1>'
                    },
                    my: {
                        template: '<h1>我的</h1>'
                    },
                }
            })
            //首页分页子路由(列表)配置
            .state('app.index', {})
            //首页分页子路由(详细)配置
            .state('app.detail', {})
        $urlRouterProvider.otherwise('/app');
    }])
})(angular);