
var app = angular.module('myApp.view2', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
     $stateProvider.state('view2', {
      url: '/view2',
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });

}]);



app.controller('View2Ctrl', ['$scope', 'shareDataService', 'amountDataService', '$rootScope', function ($scope, shareDataService, amountDataService, $rootScope) {

    $scope.myName = shareDataService.getList().name;
    $scope.showAccountNo = shareDataService.getList().accountNo;
    $scope.submitAmount = function () {

        amountDataService.addList({
            accountNo: $scope.showAccountNo,
            name: $scope.myName,
            date: $scope.date,
            amount: $scope.amount
        });
    }
}]);


app.service('amountDataService', function () {
    //alert("Hello Service");
    var myList = {};
    var addList = function (newObj) {
        myList = newObj;
    }
    var getList = function () {
        return myList;
    }
    return {
        addList: addList,
        getList: getList
    };
});

/*

app.directive('myDirective', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         },
            template: '<div>{{ myVal }}</div>',
            templateUrl: 'mytemplate.html',
            controller: controllerFunction, //Embed a custom controller in the directive
            link: function ($scope, element, attrs) { } //DOM manipulation
    }
});

*/

/*
$rootScope.$broadcast('AMOUNT', $scope.amount);
        
$rootScope.$on('AMOUNT', function (event, response) {
    alert(response);
    $scope.totalBalance = response;
});
*/
