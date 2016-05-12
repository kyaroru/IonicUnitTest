(function () {
  'use strict';

  angular
    .module('home.ctrl',[])
    .controller('HomeCtrl', ['$rootScope','$scope','$ionicModal','$ionicPopup','$stateParams','HomeService',function ($rootScope,$scope,$ionicModal,$ionicPopup,$stateParams,HomeService) {
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
      self.showPopup = showPopup;

      //Initialization
      $ionicModal.fromTemplateUrl('js/home/add-item.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        self.modal = modal;
      });

      function showAddItemModal(){
        self.title = "";
        self.content = "";
        self.openModal();
      }

      function openModal(){
        self.modal.show();
      }

      function closeModal(){
        self.modal.hide();
      }

      function addItem(title,content){
        if(isEmptyOrUndefined(title) || isEmptyOrUndefined(content)) {
          self.showPopup("Error","The title & content cannot be empty");
        }
        else {
          HomeService.add(title,content);
          self.closeModal();
        }

      }

      function deleteItem(item){
        HomeService.delete(item);
      }

      function showPopup(title,content) {
         var alertPopup = $ionicPopup.alert({
           title: title,
           template: '<div>'+content+'</div>'
         });
      }

      function isEmptyOrUndefined(text) {
        return !angular.isDefined(text) || text=="";
      }
  }]);

})();
