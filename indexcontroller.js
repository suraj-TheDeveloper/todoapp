var app = angular.module("todoapp", []);
app.controller("indexController", function($scope, $http, $location){
    $scope.register = function(){
        $http.post("index.php", {
            'Name': $scope.Name,
            'Email': $scope.Email,
            'Password': $scope.Password
        })
    }
});