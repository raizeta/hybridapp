
angular.module('starter')
 
.controller('AppCtrl', function($rootScope,$scope, $state, $ionicPopup, AuthService) 
{
    $scope.setCurrentUsername = function(name) 
    {
        $scope.username = name;
    };
    $scope.logout = function() 
    {
        $state.go('login');
    };
})

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService,auth,store) 
{
    // $scope.data = {};
    // $scope.login = function(data) 
    // {
    //   AuthService.login(data.username, data.password)
    //   .then(function(authenticated) 
    //   {
    //     $state.go('main.ranking', {}, {reload: true});
    //     $scope.setCurrentUsername(data.username);
    //   }, 
    //   function(err) 
    //   {
    //     var alertPopup = $ionicPopup.alert({
    //       title: 'Login failed!',
    //       template: 'Please check your credentials!'
    //     });
    //   });
    // };
    $scope.loginWithGoogle = function ()
    {
        auth.signin(
        {
            popup: true,
            connection: 'google-oauth2',
            scope: 'openid name email' //Details: https:///scopes
        }, 
        function(profile, token, accessToken, state, refreshToken) 
        {
            store.set('profile', profile);
            store.set('token', token);
            store.set('refreshToken', refreshToken);
            $state.go('main.ranking');
        }, 
        function(error) 
        {
            var alertPopup = $ionicPopup.alert
            ({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });    
    }

    $scope.loginWithFacebook = function ()
    {
        auth.signin(
        {
            popup: true,
            connection: 'facebook',
            scope: 'openid name email' //Details: https:///scopes
        }, 
        function(profile, token, accessToken, state, refreshToken) 
        {
            store.set('profile', profile);
            store.set('token', token);
            store.set('refreshToken', refreshToken);
            $state.go('main.ranking');
        }, 
        function(error) 
        {
            var alertPopup = $ionicPopup.alert
            ({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });    
    }
    
});