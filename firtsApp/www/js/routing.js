angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider, USER_ROLES,$ionicConfigProvider,$ionicConfigProvider) 
{
  $ionicConfigProvider.views.maxCache(0);
  $stateProvider
  .state('login', 
  {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  
  .state('main', 
  {
    url: '/',
    abstract: true,
    templateUrl: 'templates/main.html'
  })

  .state('main.dash', 
  {
    url: 'main/dash',
    views: 
    {
        'dash-tab': 
        {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashCtrl'
        }
    }
  })

  .state('main.ranking', 
  {
    url: 'main/rangking',
    views: 
    {
        'rangking-tab': 
        {
          templateUrl: 'templates/rangking.html',
          controller: 'RangkingCtrl'
        }
    }
  })

  .state('main.profile', 
  {
    url: 'main/profile',
    views: 
    {
        'profile-tab': 
        {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
    }
  })

  .state('main.shop',
  {
    url: 'main/shop',
    views: 
    {
        'shop-tab': 
        {
          templateUrl: 'templates/shop.html',
          controller: 'ShopCtrl'
        }
    },
    data: 
    {
      authorizedRoles: [USER_ROLES.admin]
    }
  });
  
  // Thanks to Ben Noblet!
  $urlRouterProvider.otherwise(function ($injector, $location) 
  {
    var $state = $injector.get("$state");
    $state.go("main.dash");
  });
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
});