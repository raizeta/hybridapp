angular.module('starter')

.controller('ProfilesCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) 
{
    // Set Header
    // $scope.$parent.showHeader();
    // $scope.$parent.clearFabs();
    // $scope.isExpanded = false;
    // $scope.$parent.setExpanded(false);
    // $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $scope.groups = [];
    for (var i=0; i<5; i++) 
    {
      $scope.groups[i] = 
      {
        name: i,
        items: []
      };

      for (var j=0; j<3; j++) 
      {
        $scope.groups[i].items.push('Pembelian-' + (j + 1) + ' = ' + j);
      }
    }
})


.controller('ActivityCtrl', function($window,$rootScope,$scope, $state, $http, $ionicPopup, $location, AuthService,ProductService,OrderService,OrderDetailService) 
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
              });

          } 
          else 
          {
            console.log('You are not sure');
          }
      });
  }
  
})

.controller('TrophyCtrl', function($window,$rootScope,$scope, $state, $http, $ionicPopup, $location, AuthService,ProductService,OrderService,OrderDetailService) 
{
  $scope.images = [];
 
    $scope.loadImages = function() 
    {
        for(var i = 0; i < 12; i++) 
        {
            var j = i + 1;
            if(j % 6 == 0)
            {
              $scope.images.push({id: i, src: "img/trophy/welcome.png"});
            }
            if(j % 6 == 1)
            {
              $scope.images.push({id: i, src: "img/trophy/100pv.png"});
            }
            if(j % 6 == 2)
            {
              $scope.images.push({id: i, src: "img/trophy/200pv.png"});
            }
            if(j % 6 == 3)
            {
              $scope.images.push({id: i, src: "img/trophy/300pv.png"});
            }
            if(j % 6 == 4)
            {
              $scope.images.push({id: i, src: "img/trophy/400pv.png"});
            }
            if(j % 6 == 5)
            {
              $scope.images.push({id: i, src: "img/trophy/500pv.png"});
            }
        }
    }
  
})

.controller('BankingCtrl', function($window,$rootScope,$scope, $state, $http, $ionicPopup, $location, AuthService,ProductService,OrderService,OrderDetailService) 
{
  $scope.images = [];
 
    $scope.loadImages = function() 
    {
        for(var i = 0; i < 12; i++) 
        {
            var j = i + 1;
            if(j % 6 == 0)
            {
              $scope.images.push({id: i, src: "img/trophy/welcome.png"});
            }
            if(j % 6 == 1)
            {
              $scope.images.push({id: i, src: "img/money/money1.jpg"});
            }
            if(j % 6 == 2)
            {
              $scope.images.push({id: i, src: "img/money/money2.jpg"});
            }
            if(j % 6 == 3)
            {
              $scope.images.push({id: i, src: "img/money/money3.jpg"});
            }
            if(j % 6 == 4)
            {
              $scope.images.push({id: i, src: "img/money/money4.jpg"});
            }
            if(j % 6 == 5)
            {
              $scope.images.push({id: i, src: "img/money/money5.jpg"});
            }
        }
    }
  
})

.controller('SecurityCtrl', function($window,$rootScope,$scope, $state, $http, $ionicPopup, $location,store) 
{
  $scope.accountprofile = store.get('profile');
  console.log($scope.accountprofile);
  
});