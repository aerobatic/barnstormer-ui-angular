define(['angular'], function (angular) {
  'use strict';

  return ['$scope', '$log', 'homePageData', function ($scope, $log, homePageData) {
    $log.info("HomePageCtrl loaded");
    $log.info(JSON.stringify(homePageData));
    $scope.name = "My Name is Angular!";
  }];
});