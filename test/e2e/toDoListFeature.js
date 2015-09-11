describe('toDoList', function() {

  var taskBox = findElement(By.css('#task_input_box'));
  var taskList = findElement(By.css('#task_list'));
  var submitTaskButton = findElement(By.css('#task_submit'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo List');
  });

  it('displays created tasks', function() {
    taskBox.sendKeys("First Task");
    submitTaskButton.click();

    expect(taskList.getText()).toEqual('First Task');
  });
});