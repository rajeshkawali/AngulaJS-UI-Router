(function () {
    
    var app = angular.module('myApp.view5service', ['ui.router']);

    app.service("userListService", function ($http, $q) {

        var deferred = $q.defer();

        $http.get("jsondata.json").then(function (response) {
            deferred.resolve(response.data.records);
        }).catch(function (response) {
            deferred.reject(response);
        });

        this.getTeams = function () {
            return deferred.promise;
        };
        
        var def = $q.defer();
        $http.get("records.json").then(function (response) {
            def.resolve(response.data.records);
        }).catch(function (response) {
            def.reject(response);
        });

        this.getRecords = function () {
            return def.promise;
        };
    });

    //console.log("---IIFE---");
})();