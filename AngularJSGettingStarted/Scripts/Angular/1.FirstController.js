/// <reference path="angular.min.js" />

var angularHomeModule = angular.module("AngularHomeModule", []);
angularHomeModule.controller("MainController", function ($scope,$http) {
    $scope.message = "Main controller message";
    $http.get("https://api.github.com/users/zpao").then(function (response) {
        console.log(response)
        $scope.user = response.data;
    });
});
