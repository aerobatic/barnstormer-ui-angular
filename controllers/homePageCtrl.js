define(['angular', 'lodash'], function (angular) {
  'use strict';

  return ['$scope', '$log', '$window', function ($scope, $log, $window) {
    $log.info("HomePageCtrl loaded");

    $scope.appRepo = $window.__config__.aerobaticAppOwner + "/" + $window.__config__.aerobaticAppRepo;

    $scope.topArtists = [[], [], [], []];

    // Randomly order the hot artists
    var topArtists = _.shuffle($window.__topArtists__);

    // Break the artists up into 3 columns
    // Put the first artist into the second column since the logo occupies the top slot in the first column
    var column  = 1;
    _.each(topArtists, function(artist) {
    	$scope.topArtists[column].push(artist);
    	column = (column == 3) ? 0 : column + 1;
    });
  }];
});
