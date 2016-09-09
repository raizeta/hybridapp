angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider)
{
    $stateProvider.state('main.ranking', 
    {
        url: '/rangking',
        views: 
        {
            'rangking-tab': 
            {
              templateUrl: 'templates/rangking.html',
              controller: 'RangkingCtrl'
            }
        }
    });
});