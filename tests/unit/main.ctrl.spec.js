describe('MainCtrl', function() {
    var scope,controller,state;

    // TODO: Load the App Module
    beforeEach(function(){
      module('app');
    });

    // TODO: Instantiate the Controller and Mocks
    beforeEach(inject(function($controller,$rootScope,$state) {
      scope = $rootScope.$new();
      controller = $controller("MainCtrl as mc", { $scope: scope });
      state = $state;
    }));

    describe('- Initialization', function() {
      it('should have a scope variable', function() {
        expect(scope).toBeDefined();
      });

      it('should have controller initialized', function() {
        expect(controller).toBeDefined();
      });

      it('should assign username and password', function(){
        expect(controller.username).toEqual("user");
        expect(controller.password).toEqual("1234");
      });

      it('should have doLogin() function',function() {
        expect(controller.doLogin).toBeDefined();
      });
    });

    describe('- login with valid username & password', function() {
      beforeEach(inject(function(){
        spyOn(controller, 'doLogin').and.callThrough();
        spyOn(state, 'go')
        controller.doLogin();
      }));

      it('should call doLogin() function', function(){
        expect(controller.doLogin).toHaveBeenCalled();
      });

      it('should change state to home',function(){
        expect(state.go).toHaveBeenCalledWith('home', { name: 'user' });
      });
    });

    describe('- login with invalid username', function() {
      //for every spec, it will initialized username to "user1"
      beforeEach(function(){
        controller.username = "user1";
        spyOn(controller, 'doLogin').and.callThrough();
        spyOn(controller, 'showPopup').and.callThrough();
        controller.doLogin();
      });

      it('should assign username from "user" to "user1"', function(){
        expect(controller.username).toEqual('user1');
      });

      it('should call doLogin() function', function(){
        expect(controller.doLogin).toHaveBeenCalled();
      });

      it('should call showPopup() function',function(){
        expect(controller.showPopup).toHaveBeenCalledWith("Error","Username or password is invalid");
      });

    });

    describe('- login with invalid password', function() {
      //for every spec, it will initialized password to "123"
      beforeEach(function(){
        controller.password = "123";
        spyOn(controller, 'doLogin').and.callThrough();
        spyOn(controller, 'showPopup').and.callThrough();
        controller.doLogin();
      });

      it('should assign password from "1234" to "123"', function(){
        expect(controller.password).toEqual('123');
      });

      it('should call doLogin() function', function(){
        expect(controller.doLogin).toHaveBeenCalled();
      });

      it('should call showPopup() function',function(){
        expect(controller.showPopup).toHaveBeenCalledWith("Error","Username or password is invalid");
      });
    });

});
