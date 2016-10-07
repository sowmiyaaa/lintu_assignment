var app=angular.module('firstApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('index',{
    url: '/index.html'
  })
    .state('details', {
       url: 'details/:car',
      views: {
    '': {
      templateUrl: 'details.html',
      controller: 'carController'

    }}
    })
});
app.controller("carController",["$scope","$http","$stateParams", function($scope,$http,$stateParams){
	
	$http.get('data.json').success(function(data){ 
		var obj=$stateParams.car;
		$scope.car_name=(data[obj].name);
		$scope.car_description=(data[obj].description);
		$scope.car_image=data[obj].url;
		
	});

}])