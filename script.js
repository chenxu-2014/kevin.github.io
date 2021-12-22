var app = angular.module('simpleList', ['ui.sortable']);

app.controller('sort', function($scope) {
  var items =[{name:'October is a great month... '}, 
              {name:'We have some interesting and fun things for you this term. '}, 
              {name:'This is a really busy term! Have a good time!'},
              {name:'Next month, we have ...'},
              {name:'And on December 3rd,we have a book sale...'},];
  $scope.list = items;
});
