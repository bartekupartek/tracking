angular.module('trackingApp')
  .controller('HomeCtrl', ['$scope', 'taskService', 'tasksPromise', function($scope, taskService, tasksPromise) {

    $scope.tasks = tasksPromise.data.tasks;

    $scope.task = tasksPromise.data.countingTask || {
      name: '',
      isCounting: false
    }

    var play = function() {
      $scope.task.isCounting = true;

      taskService.create({
        name: $scope.task.name
      }).then(function(res) {
        $scope.task = res.data;
      });
    }

    var stop = function() {
      taskService.stop($scope.task.id).then(function(response) {
        $scope.tasks.unshift(response.data);
      });

      $scope.task = {
        name: '',
        isCounting: false
      }
    };

    $scope.toggleTimer = function() {
      if ($scope.task.isCounting) {
        stop();
      } else {
        play();
      }
    };
  }]);
