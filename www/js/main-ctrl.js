(function () {
  'use strict';

  angular
    .module('main.ctrl',[])
    .controller('MainCtrl', ['$rootScope','$scope','$ionicPlatform','$state',function ($rootScope,$scope,$ionicPlatform,$state) {
      //variables
      var self = this;
      self.username = "user";
      self.password = "1234";
      $scope.user = "noob";
      //function declaration
      self.doLogin = doLogin;

      function doLogin(){
        console.log("Login for " + self.username + " " + self.password);
        $state.go('home',{
          name:self.username
        });
      }
  }]);

})();
