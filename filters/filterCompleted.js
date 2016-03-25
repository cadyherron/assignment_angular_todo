todo.filter('filterCompleted', function($filter) {


  return function(items, completedStatus) {

    var tasksToShow = [];

    if (completedStatus == "Hide completed tasks") {
      tasksToShow = items;
    } else {
      items.forEach( function(item) {
        if (!item.completed) {
          tasksToShow.push(item);
        }
      })
    }
    return tasksToShow;
  }


})