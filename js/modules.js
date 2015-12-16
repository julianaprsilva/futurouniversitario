angular.module('FuturoUniversitario',  ['ngRoute', 'ngMessages']);

angular.module('FuturoUniversitario').config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
/*angular.module('NotesApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/lembrete', {
        templateUrl: 'templates/lembrete.html',
        controller: 'LembreteController'
      }).
      when('/tarefa', {
        templateUrl: 'templates/tarefa.html',
        controller: 'LembreteController'
      }).
      otherwise({
        redirectTo: '/',
        templateUrl: 'templates/lista.html',
        controller: 'LembreteController'
      });
  }]);*/