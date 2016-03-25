todo.factory('todoService', function() {
  var obj = {};
  var _items = [
        {text: "Play video games",
          dueDate: new Date(),
          completed: false}, 
        {text: "Sleep",
          dueDate: new Date(),
          completed: false}, 
        {text: "Write a blog post",
          dueDate: new Date(),
          completed: false} ];

  obj.allItems = function(){
    return _items;
  };

  obj.createTodo = function(text, dueDate) {
    var newToDo = {};
    newToDo.text = text;
    newToDo.dueDate = dueDate;
    newToDo.completed = false;
    _items.push(newToDo);
  };

  obj.deleteTodo = function(item) {
    _items.splice(_items.indexOf(item), 1);
  };

  obj.toggleCheck = function(item) {
    item.completed = !item.completed;
  };

  obj.clearCompleted = function() {
    var i = _items.length - 1;
    while (i >= 0) {
      var item = _items[i];
      if (item.completed) {
        obj.deleteTodo(item);
      };
      i--;
    };
  };

  obj.completedStatus = "Hide completed tasks";

  obj.toggleCompleted = function() {
    if (obj.completedStatus == "Show completed tasks") {
      obj.completedStatus = "Hide completed tasks"
    } else {
      obj.completedStatus = "Show completed tasks"
    }
  };

  obj.taskOrder = '';

  obj.dropdownOrder = function(taskOrder) {
    switch (taskOrder) {
      case ('none'):
        obj.taskOrder = '';
        break;
      case ('completedTop'):
        obj.taskOrder = '-completed';
        break;
      case ('completedBottom'):
        obj.taskOrder = '+completed';
        break;
      case('duedateAsc'):
        obj.taskOrder = '+dueDate';
        break;
      case('duedateDesc'):
        obj.taskOrder = '-dueDate';
        break;
    };
    return obj.taskOrder;
  };

  return obj;
})