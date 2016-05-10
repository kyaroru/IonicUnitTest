(function () {
  'use strict';

  angular
    .module('home.ctrl',[])
    .controller('HomeCtrl', ['$rootScope','$scope','$ionicPlatform','$stateParams',function ($rootScope,$scope,$ionicPlatform,$stateParams) {
      //variables
      var self = this;
      self.name = $stateParams.name;

      //function declaration...


  }]);

})();
