var myapp = angular.module('myapp');

myapp.service('AppService', ['$http', function($http){
    var a = 10;
    this.getProducts = function(){
        var promise = $http.get('products.json');
        return promise.then(function(response){
                             return response.data;  
                      });
                    
    };

}]);