angular.module('DiscoGrid').controller('ArtistController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	this.name = $routeParams.artist
}]);