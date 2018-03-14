var myapp = angular.module('myapp');

myapp.component('aboutComponent', {
    templateUrl: 'components/about.component.html',
    bindings: {
        title: '<'
    }
});
