angular.module('bank',[
    'ngRoute'
])
.config(function($locationProvider,$routeProvider){
    $locationProvider.hashPrefix("");
    $routeProvider

    .when('/',{
        templateUrl : "pages/accounts.html",
        controller : "accountsCtrl"
    })
    .when('/add',{
        templateUrl : "pages/addAccount.html",
        controller : "addAccountCtrl"
    })
    .when('/editdelete/:id',{
        templateUrl : "pages/editdelete.html",
        controller : "editdeleteCtrl"
    })
})