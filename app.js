var app=angular.module('myApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('index',{
    url: '/index.html'
  })
    .state('display', {
       url: 'display/:key',
      views: {
    '': {
      templateUrl: 'display.html',
      controller: 'dispController'

    }}
    })
});
app.controller("dispController",["$scope","$http","$stateParams", function($scope,$http,$stateParams){
	
	$http.get('data.json').success(function(data){ 
		var c=$stateParams.key;
		$scope.did=(data[c].name);
		$scope.did1=(data[c].description);
		$scope.ur=data[c].url;
		
	});

}])