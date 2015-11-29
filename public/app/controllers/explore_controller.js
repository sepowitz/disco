angular.module('DiscoGrid').controller('ExploreController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	var explore = this;
			explore.playlist = [];
			explore.searchCountry = function(country){
				$http.get('/explore/' + country ).success(function(data){
					explore.data = data;
					console.log(explore.data)
				})
			}
}]);