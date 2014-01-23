define(['angular', 'lodash'], function (angular) {
  'use strict';

  return ['$scope', '$log', 'homePageData', function ($scope, $log, homePageData) {
    $log.info("HomePageCtrl loaded");
    // $log.info(JSON.stringify(homePageData));
    
    $scope.hotArtists = [[], [], [], []];

    // Randomly order the hot artists
    homePageData.hotArtists = _.shuffle(homePageData.hotArtists);

    // Break the artists up into 3 columns
    // Put the first artist into the second column since the logo occupies the top slot in the first column
    var column  = 1; 
    _.each(homePageData.hotArtists, function(artist) {
    	$scope.hotArtists[column].push(artist);
    	column = (column == 3) ? 0 : column + 1;
    });

    // $scope.pageData = homePageData;
  }];
});