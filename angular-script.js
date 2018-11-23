var app = angular.module('myApp', [
  'ui.router',
  'myApp.view0',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view5service'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('view0');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);
