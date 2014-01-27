require([
  'angular',
  'jquery',
  'lodash',
  'asset!controllers/artistDetailCtrl.js'
], function(angular, jquery, _, artistDetailCtrl) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  console.log("ArtistDetailApp loading");

  // Load the template for the home page
  var assets = [
    "asset!views/artist.jade",
    "asset!bootstrap",
    "bootstrap-js",
    "asset!stylesheets/home.styl"
  ];

  require(assets, function(view) {
    var body = jquery(document.getElementsByTagName('body')[0]);

    // Append the view to the body
    var angularDocument = angular.element(view);
    body.append(angularDocument);

    var artistDetailApp = angular.module('artistDetailApp', []);
    angular.module('artistDetailApp').controller('ArtistDetailCtrl', artistDetailCtrl);
    
    angular.bootstrap(angularDocument, ['artistDetailApp']);
    return artistDetailApp;
  });
});