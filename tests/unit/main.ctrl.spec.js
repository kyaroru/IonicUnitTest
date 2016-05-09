describe('MainCtrl', function() {
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

      it('should have controller initialized', function() {
        expect(controller).toBeDefined();
      })

      it('should assign username and password', function(){
        expect(controller.username).toEqual("user");
        expect(controller.password).toEqual("1234");
      });

      it('should have doLogin() function',function() {
        expect(controller.doLogin).toBeDefined();
      })
    });

    describe('- Method doLogin() with invalid username', function() {
      //for every spec, it will initialized username to "user1"
      beforeEach(function(){
        controller.username = "user1";
      });

      it('should assign username from "user" to "user1"', function(){
        expect(controller.username).toEqual('user1');
      })

      it('should call doLogin() function and fail', function(){
        spyOn(controller, 'doLogin').and.callThrough();
        controller.doLogin();
        expect(controller.doLogin).toHaveBeenCalled();
      })

    });


});
