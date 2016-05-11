describe('HomeCtrl', function() {
    var scope,controller,stateParams;

    // TODO: Load the App Module
    beforeEach(function(){
      module('app');
    });

    // TODO: Instantiate the Controller and Mocks
    beforeEach(inject(function($controller,$rootScope) {
      scope = $rootScope.$new();
      stateParams = { name : 'user' }; //mock the stateParams value
      controller = $controller("HomeCtrl as hc", { $scope: scope, $stateParams: stateParams });

    }));

    describe('- Initialization', function() {
      it('should have a scope variable', function() {
        expect(scope).toBeDefined();
      });

      it('should have controller initialized', function() {
        expect(controller).toBeDefined();
      });

      it('should have name value in stateParams', function(){
        expect(stateParams.name).toEqual('user');
      });

      it('should assign name with stateParams.name', function(){
        expect(controller.name).toEqual(stateParams.name);
      });

    });

});
