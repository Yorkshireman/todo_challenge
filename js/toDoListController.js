toDoList.controller("toDoListController", function($scope) {

  $scope.tasks = [];

  $scope.addTask = function() {
    $scope.tasks.push($scope.task);
  };
  
  $scope.deleteTask = function(task) {
    var index = $scope.tasks.indexOf(task);
    
    if (index > -1) {
      $scope.tasks.splice(index, 1);
    }
  };

});