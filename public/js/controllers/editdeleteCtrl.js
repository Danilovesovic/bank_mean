angular.module('bank')
    .controller('editdeleteCtrl',function ($scope,db,$routeParams,$location) {
        
        db.getOne($routeParams.id).then(function(res){
            $scope.account = res.data[0];
        })
        $scope.editAccount = function(){
            db.editAccount($scope.account).then(function(res){
                $location.path('/');
            })
        }
    })