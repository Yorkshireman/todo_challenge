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

  it('before editing a task, the edit task box is hidden', function() {
    expect(editTaskForm.isDisplayed()).toBe(false);
  });

  describe('when editing a task', function() {
    it('edit task form is visible', function() {
      editTaskButton.click();
      expect(editTaskForm.isDisplayed()).toBe(true);
    });
  });

  // it('when editing a task, the edit task box is pre-populated', function() {
  //   editTaskButton.click();
  //   expect(element(by.css('#edit-task-text-box')).getText()).toContain('First Task');
  // });

    it('the task is properly updated', function() {
      editTaskButton.click();
      editTaskBox.clear();
      editTaskBox.sendKeys("Edited Task");
      updateTaskButton.click();
      expect(taskList.getText()).toContain("Edited Task");
      expect(taskList.getText()).not.toContain("First Task");
    });

    it('edit form disappears after clicking update', function() {
      editTaskButton.click();
      editTaskBox.clear();
      editTaskBox.sendKeys("Edited Task");
      updateTaskButton.click();
      expect(editTaskForm.isDisplayed()).toBe(false);
    }); 
});