(function (){
    angular.module('app')
        //主控制器
        .controller('appMainCtrl',['$scope',function ($scope){

        $scope.webTitle = '今日一刻';

        $scope.type = 'home';

        $scope.$on('pageChange',function (el,args){
            $scope.type = args.type;
        })
        
    }])
        //tabBar控制器
        .controller('tabBarCtrl',['$scope',function ($scope){

            $scope.changePage = function (type){
                $scope.type = type;
                $scope.$emit('pageChange',{
                    type:type
                })
            }

        }])
})()
