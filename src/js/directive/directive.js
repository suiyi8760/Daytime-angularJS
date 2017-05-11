;(function (angular){
    angular.module('app')
        //标题栏指令
        .directive('nav',function (){
        return{
            restrict:'EA',
            templateUrl:'../view/tpl/nav_tpl.html'
        }
    })
        //footer工具栏指令
        .directive('tabBar',function (){
            return{
                restrict:'EA',
                templateUrl:'../view/tpl/tabBar.html'
            }
        })

})(angular);