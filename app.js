var todo = angular.module('todo', []);


todo.controller("TodoCtrl", ['$scope', '$window', function($scope, $window) {

  $scope.item = { text: "Get groceries from the store",
                  dueDate: new Date(),
                  completed: false };

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


  $scope.createTodo = function() {
    $window.alert("You clicked the click!")
  }

  }])