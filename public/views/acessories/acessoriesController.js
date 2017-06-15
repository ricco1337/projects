angular.module('app').controller('acessoriesController', function($scope, service){
$scope.getProducts = function(){
  service.getProducts().then(function(response){
    // console.log('controller then fn ran')
    // console.log(response)
    $scope.products = response.data
    // console.log($scope.products);
  })
}

$scope.getProducts()

});
