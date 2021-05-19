//controls the navigation of the whole angular js todoapp
var app = angular.module("todoapp", ["ngRoute"]);

//navigation area
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'indextemplate.html',
        controller: 'indexController'
    })
    .when('/login', {
        templateUrl: 'logintemplate.html',
        controller: 'loginController'
    })
    .when('/welcome', {
        templateUrl: 'welcometemplate.html', 
        controller: 'welcomeController'
    })
    .when('/admin', {
        templateUrl: 'admintemplate.html',
        controller: 'adminController'
    })
    .when('/dashboard', {
        templateUrl: 'dashboardtemplate.html',
        controller: 'dashboardController'
    })
    .otherwise({
        redirectTo: '/'
    })
});
//controller area 
//inserting into database
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
        $scope.loginpage = function(){
            $location.url("/login");
        }
    }
});
//verifying the user 
app.controller("loginController", function($scope, $http, $location){
    $scope.Login = function(){
        $http.post("login.php", {
            'Name': $scope.Name,
            'Email': $scope.Email,
            'Password': $scope.Password
        }).then(function(data){
            alert("login successfull");
            $location.url("/welcome");
        });
    }
});
//welcome page controller
app.controller("welcomeController", function($scope, $location){
    $scope.heading = "Welcome Home"
});
//verifying the admin
app.controller("adminController", function($scope, $http, $location){
    $scope.adminLogin = function(){
        $http.post("admin.php", {
            'Name': $scope.Name,
            'Email': $scope.Email,
            'Password': $scope.Password
        }).then(function(data){
            alert("login successfull");
            $location.url("/dashboard");
        });
    }
});
