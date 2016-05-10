(function () {
  'use strict';

  angular
    .module('home.ctrl',[])
    .controller('HomeCtrl', ['$rootScope','$scope','$ionicModal','$stateParams','HomeService',function ($rootScope,$scope,$ionicModal,$stateParams,HomeService) {
      //variables
      var self = this;
      self.name = $stateParams.name;
      self.items = HomeService.getAll();

      //function declaration...
      self.showAddItemModal = showAddItemModal;
      self.openModal = openModal;
      self.closeModal = closeModal;
      self.addItem = addItem;
      self.deleteItem = deleteItem;

      //Initialization
      $ionicModal.fromTemplateUrl('js/home/add-item.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        self.modal = modal;
      });

      function showAddItemModal(){
        self.openModal();
      }

      function openModal(){
        self.modal.show();
      }

      function closeModal(){
        self.modal.hide();
      }

      function addItem(title,content){
        HomeService.add(title,content);
        self.closeModal();
      }

      function deleteItem(item){
        HomeService.delete(item);
      }

  }]);

})();
