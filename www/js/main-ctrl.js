(function () {
  'use strict';

  angular
    .module('main.ctrl',[])
    .controller('MainCtrl', ['$rootScope','$scope','$ionicPopup','$state',function ($rootScope,$scope,$ionicPopup,$state) {
      //variables
      var self = this;
      self.username = "user";
      self.password = "1234";

      //function declaration
      self.doLogin = doLogin;
      self.showPopup = showPopup;

      function doLogin(){
      //  console.log("Login for " + self.username + " " + self.password);
        if(self.username=='user' && self.password=='1234') {
          $state.go('home',{
            name:self.username
          });
        }
        else {
          self.showPopup("Error","Username or password is invalid");
        }
      }

      function showPopup(title,content) {
         var alertPopup = $ionicPopup.alert({
           title: title,
           template: '<div>'+content+'</div>'
         });
      }
  }]);

})();
