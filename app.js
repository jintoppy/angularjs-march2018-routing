var myapp = angular.module('myapp', ['ui.router']);

myapp.config(['$stateProvider', 
    function($stateProvider){

        $stateProvider.state({
            name: 'home',
            url: '/home',
            template: '<div>Home page</div>'
        });

        $stateProvider.state({
            name: 'about',
            url: '/about',
            template: '<div>About page</div>'
        });

    }]);

