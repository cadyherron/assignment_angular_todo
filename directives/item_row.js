todo.directive('itemRow', function(){
  return {
    templateUrl: "directives/item_row.html",
    restrict: "A",
    scope: {
        item: "="
    }
  };
})