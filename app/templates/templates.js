angular.module('templateStore.template',['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/templates', {
        templateUrl: 'templates/templates.html',
        controller: 'TemplatesCtrl'
      })
  }])
