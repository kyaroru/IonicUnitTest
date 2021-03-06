// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ionic',
  'main.ctrl',
  'home.ctrl',
  'home.service'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'js/main/main.html',
      controller: 'MainCtrl as mc'
    })

    .state('home', {
      url: '/home',
      params: {
          name: null
      },
      templateUrl: 'js/home/home.html',
      controller: 'HomeCtrl as hc'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
