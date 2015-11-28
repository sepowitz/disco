angular.module('DiscoGrid').controller('ExploreController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	var explore = this;
			explore.searchArtist = function(artist){
				$http.get('/explore/' + artist ).success(function(data){
					explore.data = data;
					console.log(explore.data)
				})
			}
}]);