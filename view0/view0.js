var app = angular.module('myApp.view0', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view0', {
        url: '/view0',
        views: {
            '': {
                controller: 'View0Ctrl',
                templateUrl: 'view0/view0.html'
            },
            'body@view0': {
                //controller: 'view1bodyCtrl',
                templateUrl: 'view0/view0body.html'
            }
        }
    });
}]);


app.controller('View0Ctrl', ['$scope', 'shareDataService', function ($scope, shareDataService) {

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
