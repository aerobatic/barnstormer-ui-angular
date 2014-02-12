// http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html#testing-controllers
define(['angular', 'angularMocks', 'lodash', 'asset!controllers/homePageCtrl'], function (angular, mocks, _, homePageCtrl) {

	describe("homePageCtrl", function() {
		var scope, ctrl, windowMock;
		beforeEach(function() {
			windowMock = {
				__config__: {
					aerobaticAppOwner: 'test',
					aerobaticAppRepo: 'test'
				}
			};
		});

		it('should have a properly working HomePageCtrl', function() {
			windowMock.__topArtists__= [];

	    mocks.inject(function($rootScope, $controller) {
	      scope = $rootScope.$new();
	      ctrl = $controller(homePageCtrl, { $scope: scope, $window: windowMock});
		  });

	    assert.isDefined(scope.topArtists);
	    assert.equal(scope.topArtists.length, 4);
	  });

	  it('should seperate hotArtists into 4 seperate columns', function() {
	  	windowMock.__topArtists__ = _.map(_.range(10), function(i) {
	  		return {
	  			name: 'Artist ' + i
	  		};
	  	});

			mocks.inject(function($rootScope, $controller) {
	      scope = $rootScope.$new();
	      ctrl = $controller(homePageCtrl, { $scope: scope, $window: windowMock });
		  });

		  assert.equal(2, scope.topArtists[0].length);
		  assert.equal(3, scope.topArtists[1].length);
		  assert.equal(3, scope.topArtists[2].length);
		  assert.equal(2, scope.topArtists[3].length);
	  })
	});
});
