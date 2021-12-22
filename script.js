var app = angular.module('simpleList', ['ui.sortable']);

app.controller('sort', function($scope) {
  var items = [{name:'Milk'}, {name:'Eggs'}, {name:'Fabric Softener'}];
  $scope.list = items;
});
