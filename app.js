var myapp = angular.module('myapp', ['ui.router']);

myapp.controller('MyCtrl', ['AppService', function(AppService){
    AppService.getProducts();

}]);

myapp.config(['$stateProvider', 
    function($stateProvider){

        $stateProvider.state({
            name: 'home',
            url: '/homepage',
            component: 'homeComponent',
            resolve: {
                products: ['AppService', function(AppService){
                    return AppService.getProducts();
                }]
            }
        });




        
        $stateProvider.state({
            name: 'about',
            url: '/aboutpage',
            component: 'aboutComponent',
            resolve: {
                title: function(){
                    return 'Hello';
                }
            }
        });

    }]);