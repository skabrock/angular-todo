var app = angular.module('app', []);

app.directive('toDo', function() {
  var toDoList = [
    {
      id: 0,
      title: 'Make a todo app on angularjs',
      checked: true
    }, {
      id: 1,
      title: 'Send it to Taya',
      checked: true
    }, {
      id: 2,
      title: 'Taya likes it?',
      checked: false
    }
  ];
  var editingTodo = null;

  return {
    restrict: 'E',
    template: `
      <div ng-repeat='(i, todo) in todos'>
        <label>
          <input type="checkbox" ng-model="todo.checked">
          <span class="todo" ng-hide="editingTodo === todo.id" ng-style="{textDecoration: todo.checked ? 'line-through' : 'none'}">{{todo.title}}</span>
          <input class="todo" ng-show="editingTodo === todo.id" type="text" ng-model="todos[i].title" ng-blur="editTodo()" ng-keyup="$event.keyCode == 13 && editTodo()" />
        </label>
        <button title="edit" class="button {{editingTodo === todo.id ? 'fa-check' : 'fa-edit'}}" ng-click="editTodo(i)"></button>
        <button title="remove" class="button fa-close" ng-click="removeTodo(i)"></button>
      </div>
      <div ng-show="!todos.length">Empty todo list</div>
      <hr>
      <input type="text" ng-model="todoText" ng-keyup="$event.keyCode == 13 && addTodo()">
      <button title="add" class="button fa-plus" ng-click="addTodo()"> Add</button>
    `,
    link: function(scope, element, attrs) {
      scope.todos = toDoList;
      scope.editingTodo = editingTodo;
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
      scope.removeTodo = function(i) {
        scope.todos.splice(i, 1);
      }
      scope.editTodo = function(i) {
        scope.editingTodo =  scope.editingTodo !== i ? i : null;
      }
    }
  }
})
