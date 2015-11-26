angular.module('DiscoGrid').config( function($routeProvider, $locationProvider) {
	$routeProvider.
	when('explore/:artist', {
		templateUrl: '/app/components/artist.html',
		controller: 'ArtistController'
	}).
	otherwise({	
		redirectTo: '/explore'
	});

	$locationProvider.html5Mode(true);
});
