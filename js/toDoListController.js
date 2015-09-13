toDoList.controller("toDoListController", function($scope) {

  $scope.tasks = [];

  $scope.addTask = function() {
    $scope.tasks.push($scope.task);
  };

});