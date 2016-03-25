var todo = angular.module('todo', []);


todo.controller("TodoCtrl", ['$scope', 'todoService', function($scope, todoService) {

  $scope.items = todoService.allItems();

  $scope.createTodo = function() {
    todoService.createTodo($scope.text, $scope.dueDate);
    $scope.text = '';
    $scope.dueDate = '';
  };

  $scope.deleteTodo = function(item) {
    todoService.deleteTodo(item);
  };

  $scope.toggleCheck = function(item) {
    todoService.toggleCheck(item);
  };

  $scope.clearCompleted = function() {
    todoService.clearCompleted();
  };

  $scope.completedStatus = todoService.completedStatus;

  $scope.toggleCompleted = function() {
    todoService.toggleCompleted();
    $scope.completedStatus = todoService.completedStatus;
  };

  $scope.taskOrder = todoService.taskOrder;

  $scope.dropdownOrder = function() {
    console.log('app.js dropdownorder triggered');
    $scope.taskOrder = todoService.dropdownOrder($scope.taskOrder);
  }

}])