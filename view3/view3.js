var app = angular.module('myApp.view3', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view3', {
        url: '/view3',
        
        views: {
            '': {
                controller: 'View3Ctrl',
                templateUrl: 'view3/view3.html'
            },
            'body@view3': {
                //controller: 'view3bodyCtrl',
                templateUrl: 'view3/view3body.html'
            },
            'footer@view3': {
                //controller: 'view3footerCtrl',
                templateUrl: 'view3/view3footer.html'
            }
        }
    });
    
}]);

app.directive('passData', function() {
    return {
        restrict: 'E',
        scope: { obj: '=' },
        template: '<div><h2>Hello, {{obj.prop}}!</h2></div>'
    };
});

app.directive('myDialog', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'view3/view3dialog.html',
        link: function (scope) {
            scope.name = 'Jeff';
        }
    };
});

app.controller('View3Ctrl', ['$scope', '$rootScope', 'amountDataService','$state', function ($scope, $rootScope, amountDataService,$state) {

    $scope.accountNo = amountDataService.getList().accountNo;
    $scope.name = amountDataService.getList().name;
    $scope.amount = amountDataService.getList().amount;
    $scope.date = amountDataService.getList().date;
    $scope.selectCard = "";
    
    $scope.obj = { prop: $scope.name };
   
    $scope.selectCardType = function () {
      
        $state.go('view4', {myParam: {
          accountNo: $scope.accountNo,
          name: $scope.name,
          amount: $scope.amount,
          date: $scope.date,
          transactionType: $scope.selectCard
        }});
    }
    
}]);
