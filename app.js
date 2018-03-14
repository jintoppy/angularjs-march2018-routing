var myapp = angular.module('myapp', ['ui.router']);

myapp.controller('MyCtrl', ['AppService', function(AppService){
    AppService.getProducts();

}]);

myapp.constant('AppConstant', {
    productsUrl: 'products.json'
});

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
            name: 'home.category',
            url: '/category',
            template: '<h2>This is category section</h2>'
        });

        $stateProvider.state({
            name: 'home.product',
            url: '/products',
            template: '<h2>This is product section</h2>'
        });


        $stateProvider.state({
            name: 'about',
            url: '/aboutpage/{index}',
            component: 'aboutComponent',
            resolve: {
                title: ['$transition$', function($transition$){
                    var indexVal = $transition$.params().index;
                    if(indexVal == '1'){
                        return 'Title of 1';
                    }
                    return 'Hello';
                }]
            }
        });

    }]);