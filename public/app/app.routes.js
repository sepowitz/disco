app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/intro', {
		templateUrl: 'components/intro.html',
		controller: 'IntroController',
		resolve: {
			// 1s delay to load partial
			delay: function($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 1000);
				return delay.promise
			}
		}
	}).
	when('/explore', {
		templateUrl: 'components/explore.html',
		controller: 'ExploreController'
	}).
	when('/explore/:artist', {
		templateUrl: 'components/artist.html',
		controller: 'ExploreController'
	})
});