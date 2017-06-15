angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

.state('boosted',{
  url:'/boosted',
  templateUrl:'./views/boosted/boosted.html',
  controller:'boostedController'
})

.state('board',{
  url:'/board',
  templateUrl:'./views/board/board.html',
  controller:'boardController',
})

.state('acessories',{
  url:'/acessories',
  templateUrl:'./views/acessories/acessories.html',
  controller:'acessoriesController',
})
.state('details',{
  url:'/details/:id',
  templateUrl:'./views/acessories/details/details.html',
  controller:'detailsController',
})

$urlRouterProvider.otherwise('/boosted');

});
