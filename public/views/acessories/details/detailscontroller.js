angular.module('app').controller('detailsController', function($scope, $stateParams, service){

// $scope.getProductById = function($stateParams.id){
  service.getProductById($stateParams.id).then(function(response){
  
    $scope.product = response.data[0]
  })
// }

// $scope.getProductById()

})
