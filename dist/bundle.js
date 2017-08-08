angular.module('app', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
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

}]);

angular.module('app').service('service',["$http", function($http){
  this.getProducts = function(){
    return $http({
      method:'GET',
      url:'/api/products'
    })
    .then(function(response){
      return response;
    })

}
this.getProductById = function(id){
  // console.log('service fired');
  // console.log(id);
  return $http({
    method:'GET',
    url:'/api/product/' + id
  })
  .then(function(response){
    // console.log('service then fn fired');
    // console.log(response);
    return response;
  })
}

}])

angular.module('app').controller('boardController', ["$scope", function($scope){

}]);

angular.module('app').controller('acessoriesController', ["$scope", "service", function($scope, service){
$scope.getProducts = function(){
  service.getProducts().then(function(response){
    // console.log('controller then fn ran')
    // console.log(response)
    $scope.products = response.data
    // console.log($scope.products);
  })
}

$scope.getProducts()

}]);

angular.module('app').controller('boostedController', ["$scope", function($scope){





}]);

angular.module('app').controller('detailsController', ["$scope", "$stateParams", "service", function($scope, $stateParams, service){

// $scope.getProductById = function($stateParams.id){
  service.getProductById($stateParams.id).then(function(response){
  
    $scope.product = response.data[0]
  })
// }

// $scope.getProductById()

}])
