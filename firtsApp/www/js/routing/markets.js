angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider)
{
    $stateProvider.state('main.shop',
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
    $stateProvider.state('main.cart',
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
    });
});