var myApp = angular.module('myApp',[]);
myApp.controller('MainController', ['$scope', function($scope){
    $scope.message = "Hello! I am in controller."
}]);