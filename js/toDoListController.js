toDoList.controller("toDoListController", [function() {
  var self = this;

  self.tasks = [];

  self.addTask = function() {
    self.tasks.push(self.task);
    console.log(self.tasks);
  };

}]);