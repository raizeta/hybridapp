angular.module('starter')
.controller('ShopCtrl', function($window,$rootScope,$scope, $state, $http, $ionicPopup,$ionicLoading, AuthService,ProductService,focus) 
{
  
  $ionicLoading.show
  ({
      template: 'Loading...'
  });
  if($window.localStorage.getItem('product-order'))
  {
      var productorders       = JSON.parse($window.localStorage.getItem('product-order'));
      $scope.menu_items       = productorders;

      var jumlahitem                          = JSON.parse($window.localStorage.getItem('jumlah-item'));
      $rootScope.jumlahitemdikeranjang        = jumlahitem;
      $ionicLoading.hide();
  }
  else
  {
      ProductService.GetProducts()
      .then (function (response)
      {
        $scope.menu_items = response;
        $ionicLoading.hide();
      },
      function (error)
      {

      }); 
  }
  

  $scope.addtocart = function(barangumum)
  {
      focus('focusQty');
      $scope.data = {};
      var myPopup = $ionicPopup.show
      ({
          template: '<input type="number" min="1" ng-model="data.wifi " reg-ex-input reg-ex="^[0-9]+$" focus-on="focusQty">',
          title: barangumum.NM_PRODUCT,
          subTitle: 'Quantity/Pcs',
          scope: $scope,
          buttons: 
          [
            { 
              text: 'Cancel',
              type: 'button-assertive', 
            },
            {
              text: '<b>Add</b>',
              type: 'button-positive',
              onTap: function(e) 
              {
                if (!$scope.data.wifi) 
                {
                  e.preventDefault();
                } 
                else 
                {
                  return $scope.data.wifi;
                }
              }
            }
          ]
      });
      myPopup.then(function(res) 
      {
          if(res)
          {
              var products = _.findWhere($scope.menu_items, barangumum);
              if(!(products.quantity))
              {
                $rootScope.jumlahitemdikeranjang += 1;
              }
              products.quantity = res;

              var productorder = JSON.stringify($scope.menu_items);
              $window.localStorage.setItem('product-order', productorder);

              var jumlahitem = JSON.stringify($rootScope.jumlahitemdikeranjang);
              $window.localStorage.setItem('jumlah-item', jumlahitem);
          }
      });
  }

})

.controller('CartCtrl', function($window,$rootScope,$scope, $state, $http, $ionicPopup, $location,$ionicLoading, AuthService,ProductService,OrderService,OrderDetailService) 
{
  if($window.localStorage.getItem('product-order'))
  {
      var productorders       = JSON.parse($window.localStorage.getItem('product-order'));
      $scope.menu_items       = productorders;

      var jumlahitem                          = JSON.parse($window.localStorage.getItem('jumlah-item'));
      $rootScope.jumlahitemdikeranjang        = jumlahitem;

      $scope.cartberisi = true;
  }
  else
  {
      $scope.cartberisi = false;
  }

  $scope.placeanorder = function(data)
  {
      var confirmPopup = $ionicPopup.confirm
      ({
          title: 'Check Out',
          template: 'Are You Sure To Place And Order?',
          cancelText:'Cancel',
          cancelType:'button-assertive',
      });

      confirmPopup.then(function(res) 
      {
          $ionicLoading.show
          ({
              template: 'Loading...'
          });

          if(res) 
          {
              var detail = {};
              var total = $rootScope.sum($scope.menu_items, 'quantity');
              var rand  = (Math.ceil(Math.random() * 9999));
              detail.NO_RESIORDER   = 'MES.' + $rootScope.hanyatanggalharini + rand;
              detail.TGL_ORDER      = $rootScope.tanggalwaktuharini;
              detail.CUST_KD        = 'CUST.MES.001';
              detail.CUST_NM        = 'CUST RAIZETA';
              detail.KD_EVENT       = 'MES.001';
              detail.NM_EVENT       = 'MAXI-EVENT-SMS';
              detail.TOTAL_ORDER    = total * 8000;
              detail.STATUS_ORDER   = 1;
              detail.CREATE_AT      = $rootScope.tanggalwaktuharini;
              detail.CREATE_BY      = 1;
              detail.UPDATE_AT      = $rootScope.tanggalwaktuharini;
              detail.UPDATE_BY      = 1;

              OrderService.CreateOrder(detail,$scope.menu_items)
              .then (function(response)
              {
                  $window.localStorage.removeItem('product-order');
                  $window.localStorage.removeItem('jumlah-item');
                  $rootScope.jumlahitemdikeranjang = 0;
                  $state.go('main.orders',{},{location:'replace'});
                  
              },
              function (error)
              {
                console.log(error);
                $ionicLoading.hide();

              });
          } 
          else 
          {
            console.log('You are not sure');
            $ionicLoading.hide();
          }
      });
  }
  
});