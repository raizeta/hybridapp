angular.module('starter')
.controller('RangkingCtrl', function($scope, $state, $http, $ionicPopup, AuthService,$interval,$timeout) 
{
  
  var groupslama = [
                    {name:"Konco Sejati",gambar:'profile-bg.jpg',spent:50000000,qty:5000,order:50},
                    {name:"Rekan Sejati",gambar:'logo.png',spent:40000000,qty:4000,order:40}, 
                    {name:"Mitra Sejati",gambar:'arya.jpg',spent:30000000,qty:3000,order:30},
                    {name:"Teman Sejati",gambar:'daenerys.jpg',spent:20000000,qty:2000,order:20},
                    {name:"Sahabat Sejati",gambar:'tyrion.jpg',spent:10000000,qty:1000,order:10}
                  ];

  var groupsbaru = [
                    {name:"Konco Sejati",gambar:'profile-bg.jpg',spent:50000000,qty:5000,order:50},
                    {name:"Rekan Sejati",gambar:'logo.png',spent:40000000,qty:4000,order:40},
                    {name:"Teman Sejati",gambar:'daenerys.jpg',spent:35000000,qty:3500,order:35},
                    {name:"Mitra Sejati",gambar:'arya.jpg',spent:30000000,qty:3000,order:30},
                    {name:"Sahabat Sejati",gambar:'tyrion.jpg',spent:10000000,qty:1000,order:10}
                  ];

  $scope.groups = _.sortBy(groupslama, 'qty' ).reverse();
  angular.forEach(groupsbaru,function(value,key)
  {
      var indexobjectinidiarrayyanglama = _.findIndex(groupslama,{name:value.name});
      console.log(key + ' ' + indexobjectinidiarrayyanglama)

  });
  // $timeout(function()
  // {
  //   var arraysplice = $scope.groups.splice(0, 1);
  // },5000);
  // $timeout(function()
  // {
  //   $scope.groups.splice(0,0,groupsbaru[0])
  // },5000);

  
});