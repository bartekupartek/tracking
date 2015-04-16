angular.module('trackingApp')
  .factory('taskService', ['$http', function($http) {

    o = {
      tasks: []
    };

    o.getAll = function() {
      return $http.get('/tasks.json').success(function(data) {
        angular.copy(data, o.tasks);
      });
    };

    o.create = function(task) {
      return $http.post('/tasks.json', task)
    };

    o.stop = function(id) {
      return $http.put('/tasks/'+id+'/stop.json');
    };

    return o;
  }]);
