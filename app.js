var todo = angular.module('todo', []);


todo.controller("TodoCtrl", ['$scope', '$window', function($scope, $window) {

  $scope.items = [
        {text: "Play video games",
          dueDate: new Date(),
          completed: false}, 
        {text: "Sleep",
          dueDate: new Date(),
          completed: false}, 
        {text: "Write a blog post",
          dueDate: new Date(),
          completed: false} ];


  $scope.createAlert = function() {
    $window.alert("You clicked the click!")
  };

  $scope.createTodo = function() {
    var newToDo = {};
    newToDo.text = $scope.text;
    newToDo.dueDate = $scope.dueDate;
    newToDo.completed = false;
    $scope.items.push(newToDo);
    $scope.text = '';
    $scope.dueDate = '';
  };

  $scope.deleteTodo = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.toggleCheck = function(item) {
    item.completed = !item.completed;
  };

  $scope.clearCompleted = function() {
    var i = $scope.items.length - 1;
    while (i >= 0) {
      var item = $scope.items[i];
      if (item.completed) {
        $scope.deleteTodo(item);
      };
      i--;
    };
  };
}])