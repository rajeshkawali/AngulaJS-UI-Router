var app = angular.module('myApp.view4', ['ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view4', {
        url: '/view4',
        templateUrl: 'view4/view4.html',
        controller: 'View4Ctrl',
        params: {
            myParam: null
        }
    });

}]);


app.controller('View4Ctrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.userList = [
        {
            "accountNo": "12345",
            "name": "Nishit",
            "amount": "2500",
            "date": new Date('10/20/2009'),
            "transactionType": "1"
    },
        {
            "accountNo": "12134",
            "name": "Vivek",
            "amount": "800",
            "date": new Date('02/06/2018'),
            "transactionType": "2"
    },
        {
            "accountNo": "12234",
            "name": "Swati",
            "amount": "2000",
            "date": new Date('12/03/2016'),
            "transactionType": "2"
    },
        {
            "accountNo": "55834",
            "name": "Rajesh",
            "amount": "20800",
            "date": new Date('02/03/2003'),
            "transactionType": "1"
    },
        {
            "accountNo": "32374",
            "name": "Harsha",
            "amount": "320800",
            "date": new Date('01/20/2013'),
            "transactionType": "1"
    }
];

    if ($stateParams.myParam != undefined) {

        $scope.userList.push({
            accountNo: $stateParams.myParam.accountNo,
            name: $stateParams.myParam.name,
            amount: $stateParams.myParam.amount,
            date: $stateParams.myParam.date,
            transactionType: $stateParams.myParam.transactionType
        });

    }

    $scope.transactionT = [
        {
            transactionType: "1",
            type: "Credit"
                    },
        {
            transactionType: "2",
            type: "Debit"
                    }
    ];

     }]);
/*
    
 angular.forEach(userList, function (value, key) {
        if ($scope.selectTT == "1" && value.transactionType == "1") {
            //console.log(value.transactionType);
            alert($scope.selectTT + " - " + $scope.userList.transactionType);
            $scope.userList = function (user) {
                $scope.accountNo = user.accountNo;
                $scope.name = user.name;
                $scope.amount = user.amount;
                $scope.date = user.date;
                $scope.transactionType = user.transactionType;
            }
        } else {
            alert($scope.selectTT + " - " + $scope.userList.transactionType);
            $scope.userList = function (user) {
                $scope.accountNo = user.accountNo;
                $scope.name = user.name;
                $scope.amount = user.amount;
                $scope.date = user.date;
                $scope.transactionType = user.transactionType;
            }
        }
    });
    
*/
