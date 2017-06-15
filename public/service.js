angular.module('app').service('service',function($http){
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

})
