var myapp = angular.module('myapp');

myapp.component('homeComponent', {
    templateUrl: 'components/home.component.html',
    bindings: {
        products: '<'
    }
});
