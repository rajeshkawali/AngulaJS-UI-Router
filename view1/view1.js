var app = angular.module('myApp.view1', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view1', {
        url: '/view1',
        controller: 'View1Ctrl',
        templateUrl: 'view1/view1.html'
    });
}]);


app.controller('View1Ctrl', ['$scope', 'shareDataService', function ($scope, shareDataService) {

    $scope.accountNo = "";
    $scope.name = "";
    $scope.submitAccountNo = function () {
        //alert($scope.accountNo);
        shareDataService.addList({
            name: $scope.name,
            accountNo: $scope.accountNo
        });
        //$scope.accountNumbers.push($scope.accountNo);
    }
}]);

/*

app.directive('number', function() {
  var NUMBER_REGEXP = /^(\d+)$/;
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.number = function(modelValue, viewValue) {
        return NUMBER_REGEXP.test(viewValue);
      };
    }
  };
});
*/

app.service('shareDataService', function () {
    //alert("Hello Service");
    var myList = {};
    var addList = function (newObj) {
        //myList.push({accountNo:newObj});
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
