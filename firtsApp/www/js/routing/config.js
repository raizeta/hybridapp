angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,authProvider, $httpProvider,jwtInterceptorProvider) 
// .config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider)
{
  	$ionicConfigProvider.views.maxCache(0);
  	$urlRouterProvider.otherwise(function ($injector, $location) 
  	{
    	var $state = $injector.get("$state");
    	$state.go("auth.login");
  	});
  	$ionicConfigProvider.tabs.position('bottom');
  	$ionicConfigProvider.navBar.alignTitle('center');

    //THIS SETTING FOR Auth0 Login
	  authProvider.init({
        domain: 'raizeta.auth0.com',
        clientID: 'tI8AC9Ykd1dSBKoKGETQeP8vAx86OQal',
        callbackURL: location.href,
        loginState: 'auth.login'
      });

  	$stateProvider.state('auth', 
  	{
  		url: '/',
  		templateUrl: 'templates/mainlogin.html',
  		abstract:true,
  	});
  	$stateProvider.state('main', 
  	{
    	url: '/main',
    	abstract: true,
    	templateUrl: 'templates/mainroot.html',
    	data: {
    	    requiresLogin: true
    	  }
  	});

});