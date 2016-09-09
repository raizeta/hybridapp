angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider)
{
  $stateProvider
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
  });
  
});