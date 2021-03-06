describe('toDoList', function() {

  var taskBox =           element(by.model('task'));
  var taskList =          element(by.css('#task_list'));

  var addTaskButton =     element(by.css('#task_submit'));

  var deleteTaskButton =  element(by.css('#task_delete'));

  var editTaskButton =    element(by.css('#task_edit'));
  var editTaskForm =      element(by.css('#edit-task-form'));
  var editTaskBox =       element(by.css('#edit-task-text-box'));
  var updateTaskButton =  element(by.css('#update-task-button'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
    taskBox.sendKeys("First Task");
    addTaskButton.click();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo List');
  });

  it('displays created tasks', function() {
    expect(taskList.getText()).toContain('First Task');
  });

  it('can delete a task', function() {
    deleteTaskButton.click();
    expect(taskList.getText()).not.toContain('First Task');
  });

  it('before editing a task, the edit task form is hidden', function() {
    expect(editTaskForm.isDisplayed()).toBe(false);
  });

  describe('when editing a task', function() {
    it('edit task form is visible', function() {
      editTaskButton.click();
      expect(editTaskForm.isDisplayed()).toBe(true);
    });
  });

  describe('after editing a task', function() {
    beforeEach(function() {
      editTaskButton.click();
      editTaskBox.clear();
      editTaskBox.sendKeys("Edited Task");
      updateTaskButton.click();
    });

    it('the task is properly updated', function() {
      expect(taskList.getText()).toContain("Edited Task");
      expect(taskList.getText()).not.toContain("First Task");
    });

    it('the edit form disappears', function() {
      expect(editTaskForm.isDisplayed()).toBe(false);
    });
  });
});