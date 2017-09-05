var app = angular.module('app', []);

app.directive('toDo', function() {
  var toDoList = [
    {
      id: 0,
      title: 'Make a todo app on angularjs',
      checked: false
    }
  ];

  return {
    restrict: 'E',
    template: `
      <div ng-repeat='todo in todos'>
        <label>
          <input type="checkbox" >
          {{todo.title}}
        </label>
      </div>
      <hr>
      <input type="text">
      <button>+ Add</button>
    `,
    link: function(scope, element, attrs) {
      scope.todos = toDoList;
    }
  }
})
