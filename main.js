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
          <input type="checkbox" ng-model="smth" ng-change="toggleTodo(todo.id)">
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
        console.log('add task', );
        var str = scope.todoText,
            list = scope.todos;
        if (str.length) {
          list.push({
            id: list.length ? list[list.length - 1].id + 1 : 0,
            title: str,
            checked: false
          })
          str = '';
        }
      }
      scope.toggleTodo = function(id) {
        console.log(id);
      }
    }
  }
})
