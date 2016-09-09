angular.module('starter')
// .config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,authProvider, $httpProvider,jwtInterceptorProvider) 
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider)
{
  // authProvider.init({
  //     domain: 'raizeta.auth0.com',
  //     clientID: 'tI8AC9Ykd1dSBKoKGETQeP8vAx86OQal',
  //     callbackURL: location.href,
  //     loginState: 'auth.login'
  //   });

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
    url: '/main',
    abstract: true,
    templateUrl: 'templates/main.html',
    // data: {
    //     requiresLogin: true
    //   }
  })

  .state('main.orders', 
  {
    url: '/orders',
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
    url: '/order/:id',
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
    url: '/rangking',
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
    url: '/shop',
    views: 
    {
        'shop-tab': 
        {
          templateUrl: 'templates/shop.html',
          controller: 'ShopCtrl'
        }
    }
  })
  .state('main.cart',
  {
    url: '/cart',
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
  })
  .state('main.profiles.activity', {
        url: "/activity",
        views: {
            'profile-activity': {
                templateUrl: "templates/profile-activity.html",
                controller:'ActivityCtrl'
            }
        }
    })
    .state('main.profiles.trophy', {
        url: "/trophy",
        views: {
            'profile-trophy': {
                templateUrl: "templates/profile-trophy.html"
            }
        }
    })
    .state('main.profiles.banking', {
        url: "/banking",
        views: {
            'profile-banking': {
                templateUrl: "templates/profile-banking.html"
            }
        }
    })
    .state('main.profiles.security', {
        url: "/security",
        views: {
            'profile-security': {
                templateUrl: "templates/profile-security.html"
            }
        }
    })
    .state('main.profiles.page5', {
        url: "/page5",
        views: {
            'profile-page5': {
                templateUrl: "templates/profile2.html"
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