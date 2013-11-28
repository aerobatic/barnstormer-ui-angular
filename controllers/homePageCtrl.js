define(['angular'], function (angular) {
  'use strict';

  return ['$scope', function ($scope) {
    console.log("HomePageCtrl loaded");
    $scope.name = "My Name is Angular!";
  }];
});