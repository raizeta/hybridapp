
angular.module('starter', ['ionic','ionic-material','ngCordova','auth0','angular-storage','angular-jwt'])
// angular.module('starter', ['ionic','ionic-material','ngCordova'])
.run(function($ionicPlatform,$rootScope,$state,$window,$location,$filter,auth,auth,store,jwtHelper) 
{
    auth.hookEvents();
    $ionicPlatform.ready(function() 
    {
      if(window.cordova && window.cordova.plugins.Keyboard) 
      {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) 
      {
            StatusBar.styleDefault();
      }
    });


    $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) 
    {
         var token = store.get('token');
         if (token) 
         {
              if (!jwtHelper.isTokenExpired(token)) 
              {
                if (!auth.isAuthenticated) 
                {
                  auth.authenticate(store.get('profile'), token);
                }
              }
        }
        else 
        {
          // Otherwise, redirect to the home route
          $location.path('/login');
        }
    });

    var globalurl = {};
    globalurl.linkurl   = "http://api.lukisongroup.com/eventmaxi";
    globalurl.tokenurl  = "?access-token=azLSTAYr7Y7TLsEAML-LsVq9cAXLyAWa";
    $rootScope.linkurl = globalurl;

    if($window.localStorage.getItem('jumlah-item'))
    {
        var jumlahitem                          = JSON.parse($window.localStorage.getItem('jumlah-item'));
        $rootScope.jumlahitemdikeranjang        = jumlahitem;
    }
    else
    {
        $rootScope.jumlahitemdikeranjang = 0;
    }
    $rootScope.seriliazeobject = function(objecttoserialize)
    {
        var result={};
        function serializeObj(obj) 
        {
          var result = [];
          for (var property in obj) result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
          return result.join("&");
        }
        
        var serialized = serializeObj(objecttoserialize); 
        var config = 
        {
            headers : 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8;'   
            }
        };
        result.serialized   = serialized;
        result.config       = config;

        return result;
    }

    $rootScope.tanggalwaktuharini = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
    $rootScope.hanyatanggalharini = $filter('date')(new Date(),'yyyy.MM.dd');

    $rootScope.sum = function(items, prop)
    {
        return items.reduce( function(a, b)
        {
            if(b[prop] == undefined)
            {
                return a + 0;
            }
            else
            {
                return a + b[prop];
            }
        }, 0);
    };

    
})



.filter('capitalize', function() 
{
    return function(input) 
    {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
