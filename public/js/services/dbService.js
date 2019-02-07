angular.module('bank')
    .factory('db',function($http){
        return {
            getAll : function(){
                return $http({
                    url : "/getAccounts",
                    method : "get"
                })
            },
            deleteAccount : function(id){
                return $http({
                    url : "/deleteAccount",
                    method : "post",
                    data : {id:id}
                })
            },
            getOne : function(id){
                return $http({
                    url : "/getOne",
                    method : "post",
                    data : {id:id}
                }) 
            },
            editAccount : function(account){
                return $http({
                    url : "/editAccount",
                    method : "post",
                    data : {account : account}
                }) 
            }
            
        }
    })