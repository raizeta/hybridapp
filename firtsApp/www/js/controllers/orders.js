angular.module('starter')
 .controller('OrderCtrl', function($window,$rootScope,$scope, $state, $http, $interval, $ionicPopup,  $ionicLoading, AuthService,OrderService) 
{
    $scope.doRefresh = function() 
    {
      $ionicLoading.show
      ({
          template: 'Loading...'
      });
      OrderService.GetOrders()
      .then (function (response)
      {
        $scope.$broadcast('scroll.refreshComplete');
        $scope.orders = response;
        $scope.totalorders = $rootScope.sum($scope.orders, 'TOTAL_ORDER');
        $ionicLoading.hide();
      },
      function (error)
      {

      });
    };
    $scope.doRefresh();
})
 .controller('OrdersDetailsCtrl', function($window,$rootScope,$scope, $state, $http, $interval, $ionicPopup, AuthService,OrderDetailService,$stateParams) 
{
    var IDORDERS = $stateParams.id;
    OrderDetailService.GetOrderDetailsByIdOrders(IDORDERS)
    .then (function(response)
    {
        $scope.ordersdetails = response;
    },
    function (error)
    {

    })
});