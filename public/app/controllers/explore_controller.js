angular.module('DiscoGrid').controller('ExploreController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	var explore = this;
			explore.error = false;
			explore.errorMessage = "Whoops, looks like there was an issue. Give it another spin."
			explore.searchCountry = function(country){
				$http.get('/explore/' + country ).success(function(data){
					explore.data = data;
					console.log(explore.data)
					if(explore.data.name) {
						explore.error = false;
						for(var i = 0; i < explore.data.biographies.length; i++){
						if(explore.data.biographies[i].truncated !== true){
							explore.bio = explore.data.biographies[i];
							console.log(explore.bio)
						}
					}
				} else {
					explore.error = true;
				}

				})
			}
}]); 