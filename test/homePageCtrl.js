// http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html#testing-controllers
define(['angular', 'angularMocks', 'asset!controllers/homePageCtrl'], function (angular, mocks, homePageCtrl) {

	describe("homePageCtrl", function() {
		var scope, ctrl;
		beforeEach(function() {
		  // mocks.module('homePageApp');
		  var mockPageData = {
		  	hotArtists: []
		  };

		  mocks.inject(function($rootScope, $controller) {
	      scope = $rootScope.$new();
	      ctrl = $controller(homePageCtrl, { $scope: scope, homePageData: mockPageData});
		  });
		});

		it('should have a properly working HomePageCtrl', function() {
	    // var searchTestAtr = 'cars';
	    // var response = $httpBackend.expectJSONP(
	    //   'https://gdata.youtube.com/feeds/api/videos?q=' + searchTestAtr + '&v=2&alt=json&callback=JSON_CALLBACK');
	    // response.respond(null);

	    // var scope = $rootScope.$new();
	    // var ctrl = $controller('HomePageCtrl', {
	    //   $scope : scope
	    // });

	    expect(scope.pageData).not.to.be.null;
	    expect(scope.pageData.hotArtists).not.to.be.null;
	    expect(scope.pageData.hotArtists.length).to.eql(0);
	  });
	});
});