todo.directive('itemRow', function(){
  return {
    templateUrl: "directives/item_row.html",
    restrict: "A",
    // things our directive can use:
    scope: {
        item: "=",
        deleteTodo: "&",
        toggleCheck: '&'
    }
  };
})