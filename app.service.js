var myapp = angular.module('myapp');

myapp.service('AppService', ['$http','AppConstant', 
 function($http, AppConstant){
    var a = 10;
    this.getProducts = function(){
        var promise = $http.get(AppConstant.productsUrl);
        return promise.then(function(response){
                             return response.data;  
                      });
                    
    };

}]);