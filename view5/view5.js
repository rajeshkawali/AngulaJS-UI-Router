
var app = angular.module('myApp.view5', ['ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view5', {
        url: '/view5',
        templateUrl: 'view5/view5.html',
        controller: 'View5Ctrl'
    });

}]);

app.controller('View5Ctrl', ['$scope', '$http','userListService', function ($scope, $http,userListService) {

/*
    $http.get("jsondata.json").then(function (response) {
        $scope.myData = response.data.records;
    });
*/

    $scope.myData = {};
    var promise = userListService.getTeams();
    promise.then(function (data) {
        $scope.myData = data;
    });
    
    $scope.myRecords = {};
    var promise1 = userListService.getRecords();
    promise1.then(function (data) {
        $scope.myRecords = data;
    });


}]);