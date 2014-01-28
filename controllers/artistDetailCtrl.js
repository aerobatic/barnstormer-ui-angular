define(['angular', 'lodash'], function (angular) {
  'use strict';

  return ['$scope', '$log', '$window', '$sce', function ($scope, $log, $window, $sce) {
    $log.info("ArtistDetailCtrl loaded");

    $scope.artist = $window.__artist__;

    $scope.artist.bio = $sce.trustAsHtml($scope.artist.bio);

    $scope.albums = [[], [], []];

    // Divide the albums up into 3 columns
    var column = 0;
    _.each($scope.artist.albums, function(album, i) {
      $scope.albums[column].push(album);
      column = (column == 2) ? 0 : column + 1;
    });
  }];
});
