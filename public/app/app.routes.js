app.config( function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/intro', {
		templateUrl: '/app/components/intro.html',
		controller: 'IntroController'
		}).
	when('/explore', {
		templateUrl: '/app/components/explore.html',
		controller: 'ExploreController'
	}).
	when('/explore/:artist', {
		templateUrl: '/app/components/artist.html',
		controller: 'ExploreController'
	}).
	otherwise({	
		redirectTo: '/'	
	});

	$locationProvider.html5Mode(true);
});
