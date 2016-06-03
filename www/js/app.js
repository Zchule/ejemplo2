// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var APP = angular.module('starter', [
  'ionic', 
  'ngCordova',
  'starter.controllers',
   'starter.services'
   ]);
 var CTRLS = angular.module('starter.controllers', []);
 var SERVICES = angular.module('starter.services', []);

APP.run(function($ionicPlatform) {
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

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.cliente', {
    url: '/cliente',
    views: {
      'tab-cliente': {
        templateUrl: 'templates/tab-cliente.html',
        //controller: 'ClienteCtrl'
      }
    }
 
  })


  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/tab-cliente.html'
  })

  .state('app.registro', {
    url: '/registro',
    views: {
      'menuContent': {
        templateUrl: 'templates/registro.html',
        //controller: 'RegistroCtrl'
      }
    }
  })
  
  .state('app.pedido', {
      url: '/pedido',
      views: {
        'menuContent': {
          templateUrl: 'templates/pedido.html'
        }
      }
    })
  .state('app.novedades', {
      url: '/novedades',
      views: {
        'menuContent': {
          templateUrl: 'templates/novedades.html'
        }
      }
    })

  .state('tab.productos', {
      url: '/productos',
      views: {
        'tab-productos': {
          templateUrl: 'templates/tab-productos.html',
          controller: 'ProductosCtrl'
        }
      }
    })
    .state('tab.producto-detail', {
      url: '/productos/:productoId',
      views: {
        'tab-productos': {
          templateUrl: 'templates/producto-detail.html',
          controller: 'ProductoDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
