describe('toDoList', function() {

  var taskBox = element(by.css('#task_input_box'));
  var taskList = element(by.css('#task_list'));
  var submitTaskButton = element(by.css('#task_submit'));

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