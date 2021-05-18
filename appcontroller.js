//controls the navigation of the whole angular js todoapp
var app = angular.module("todoapp", ["ngRoute"]);

//navigation area
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'indextemplate.html'
    })
    .when('/login', {
        templateUrl: 'logintemplate.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});
//controller area inserting into database
app.controller("indexController", function($scope, $http, $location){
    $scope.register = function(){
        $http.post("insert.php", {
            'Name': $scope.Name,
            'Email': $scope.Email,
            'Phone': $scope.Phone,
            'Password': $scope.Password, 
            'ConfirmPassword': $scope.ConfirmPassword
        }).then(function(data){
            alert("Data inserted Successfully");
            $location.url("/login");
        });
    }
});
