describe('toDoList', function() {

  var taskBox = element(by.model('task'));
  var taskList = element(by.css('#task_list'));
  var addTaskButton = element(by.css('#task_submit'));
  var deleteTaskButton = element(by.css('#task_delete'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo List');
  });

  it('displays created tasks', function() {
    taskBox.sendKeys("First Task");
    addTaskButton.click();

    expect(taskList.getText()).toContain('First Task');
  });

  it('can delete a task', function() {
    taskBox.sendKeys("First Task");
    addTaskButton.click();
    deleteTaskButton.click();

    expect(taskList.getText()).not.toContain('First Task');
  });
});