angular.module('bank')
    .controller('accountsCtrl',function ($scope,db) {
        $scope.accounts = [];
        db.getAll().then(res => {
            $scope.accounts = res.data;
        })
        $scope.deleteAccount = id =>{
            db.deleteAccount(id).then(res =>{
                db.getAll().then(res => {
                    $scope.accounts = res.data;
                })
            })
        }
    })