angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider)
{
    $stateProvider.state('main.profiles', 
    {
      url: '/profiles',
      abstract:true,
      views: 
      {
          'profiles-tab': 
          {
            templateUrl: 'templates/profiles.html',
            controller:'ProfilesCtrl'
          }
      }
    });
    $stateProvider.state('main.profiles.activity', 
    {
          url: "/activity",
          views: {
              'profile-activity': {
                  templateUrl: "templates/profile-activity.html",
                  controller:'ActivityCtrl'
              }
          }
    });
    $stateProvider.state('main.profiles.trophy', 
    {
          url: "/trophy",
          views: {
              'profile-trophy': {
                  templateUrl: "templates/profile-trophy.html",
                  controller:'TrophyCtrl'
              }
          }
    });
    $stateProvider.state('main.profiles.banking', 
    {
          url: "/banking",
          views: {
              'profile-banking': {
                  templateUrl: "templates/profile-banking.html",
                  controller:'BankingCtrl'
              }
          }
    });
    $stateProvider.state('main.profiles.security', 
    {
          url: "/security",
          views: {
              'profile-security': {
                  templateUrl: "templates/profile-security.html",
                  controller:'SecurityCtrl'
              }
          }
    });
});