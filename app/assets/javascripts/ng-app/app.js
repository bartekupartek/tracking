angular
  .module('trackingApp', [
    'ngAnimate',
    'ui.router',
    'templates'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      });

    // default fallback route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 mode for SEO
    $locationProvider.html5Mode(true);

  }]);
