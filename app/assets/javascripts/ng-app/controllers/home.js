angular.module('trackingApp')
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.tasks = ['feed the cat', 'buy beer', 'go to cinema'];
  }]);
