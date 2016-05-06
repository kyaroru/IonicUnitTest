describe('Test Cases for MainCtrl', function() {
    var scope,controller;

    // TODO: Load the App Module
    beforeEach(module('app'));

    // TODO: Instantiate the Controller and Mocks
    beforeEach(inject(function($controller,$rootScope) {
      scope = $rootScope.$new();
      controller = $controller("MainCtrl as mc", { $scope: scope });
    }));

    describe('- Initialization', function() {
      it('should have a scope variable', function() {
          expect(scope).toBeDefined();
      });

      it('should assign username and password', function(){
        expect(scope.mc.username).toEqual("user");
        expect(scope.mc.password).toEqual("1234");
      });
    });

    describe('- Method doLogin()', function() {


      // it('should call doLogin() method', function(){
      //   scope.mc.doLogin();
      //   expect(scope.mc.doLogin).toHaveBeenCalledWith("user","1234");
      // });
    });


});
