define(['angular', 'lodash'], function (angular) {
  'use strict';

  return ['$scope', '$log', '$window', function ($scope, $log, $window) {
    $log.info("ArtistDetailCtrl loaded");
    
    $scope.artist = $window.__artist__;
  }];
});