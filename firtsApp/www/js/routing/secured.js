angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider)
{
    $stateProvider.state('auth.login', 
    {
      url: 'auth/login',
      views: 
      {
          'login-tab': 
          {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl',
            parent: "main",
          }
      }
    });
    
    $stateProvider.state('auth.register', 
    {
      url: 'auth/register',
      views: 
      {
          'register-tab': 
          {
            templateUrl: 'templates/register.html',
          }
      }
    });

});