toDoList.factory('Tasks', function(){
  var tasks = [];

  return {
    get: function() {
      return tasks;
    },

    add: function(task) {
      // console.log(task);
      tasks.push(task);
      console.log(tasks);
    },

    delete: function(task) {
      var index = tasks.indexOf(task);
    
      if (index > -1) {
        tasks.splice(index, 1);
      }    
    }
  };
});

toDoList.controller("toDoListController", ['Tasks', '$scope', function(Tasks, $scope) {
  $scope.tasks = Tasks.get();

  $scope.addTask = Tasks.add;
  
  $scope.deleteTask = Tasks.delete;
}]);