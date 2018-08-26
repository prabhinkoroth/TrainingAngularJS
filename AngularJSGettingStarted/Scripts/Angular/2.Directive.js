/// <reference path="angular.min.js" />
var angularHomeModule = angular.module("AngularHomeModule", []);
angularHomeModule.controller("MainController", function ($scope, $http) {
    $scope.formData = {};
    $scope.showResult = true;
    $scope.testData = function () {
        $scope.showResult = !$scope.showResult;
        console.log($scope.formData);
    }
    $scope.Users = [
        { name: "prabhin", address: "kolkata" },
        { name: "prabhin2", address: "kolkata" },
    {name:"prabhin3" ,address:"kolkata"}
    ]
});