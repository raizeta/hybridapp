angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider, USER_ROLES,$ionicConfigProvider,$ionicConfigProvider) 
{
  $ionicConfigProvider.views.maxCache(0);
  $stateProvider
  .state('auth', 
  {
    url: '/',
    templateUrl: 'templates/mainlogin.html',
    abstract:true,
  })

  .state('auth.login', 
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
  })

  .state('auth.register', 
  {
    url: 'auth/register',
    views: 
    {
        'register-tab': 
        {
          templateUrl: 'templates/register.html',
        }
    }
  })

  .state('main', 
  {
    url: '/',
    abstract: true,
    templateUrl: 'templates/main.html',
  })

  .state('main.orders', 
  {
    url: 'main/orders',
    views: 
    {
        'orders-tab': 
        {
          templateUrl: 'templates/orders.html',
          controller: 'OrderCtrl'
        }
    }
  })

  .state('main.order', 
  {
    url: 'main/order/:id',
    views: 
    {
        'orders-tab': 
        {
          templateUrl: 'templates/ordersdetails.html',
          controller: 'OrdersDetailsCtrl'
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
  })
  .state('main.cart',
  {
    url: 'main/cart',
    views: 
    {
      'cart-tab':
      {
        templateUrl: 'templates/cart.html',
        controller: 'CartCtrl' 
      }  
    }
  })

  .state('main.profiles', 
  {
    url: 'main/profiles',
    views: 
    {
        'profiles-tab': 
        {
          templateUrl: 'templates/profiles.html',
          controller:'ProfilesCtrl'
        }
    }
  });
  
  // Thanks to Ben Noblet!
  $urlRouterProvider.otherwise(function ($injector, $location) 
  {
    var $state = $injector.get("$state");
    $state.go("auth.login");
  });
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');

});