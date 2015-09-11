describe("toDoListController", function() {
	beforeEach(module("toDoList"));

		var ctrl;

		beforeEach(inject(function($controller) {
			ctrl = $controller("toDoListController");
		}));

	it("starts with an empty entry field and results list", function() {
		expect(ctrl.entry).toBeUndefined();
		expect(ctrl.list).toBeUndefined();
	});

});