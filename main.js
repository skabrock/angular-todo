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
      <div ng-repeat='(i, todo) in todos'>
        <label ng-style="{textDecoration: todo.checked ? 'line-through' : 'none'}">
          <input type="checkbox" ng-model="todos[i].checked">
          {{todo.title}}
        </label>
      </div>
      <hr>
      <input type="text" ng-model="todoText">
      <button ng-click="addTodo()">+ Add</button>
    `,
    link: function(scope, element, attrs) {
      scope.todos = toDoList;
      scope.addTodo = function() {
        var str = scope.todoText,
            list = scope.todos;
        if (str.length) {
          list.push({
            id: list.length ? list[list.length - 1].id + 1 : 0,
            title: str,
            checked: false
          })
          scope.todoText = '';
        }
      }
    }
  }
})
