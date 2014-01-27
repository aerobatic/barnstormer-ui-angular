require([
  'angular',
  'jquery',
  'lodash',
  'asset!controllers/homePageCtrl.js'
], function(angular, jquery, _, homePageCtrl) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  // Load the template for the home page
  var assets = [
    "asset!views/home.jade",
    "asset!bootstrap",
    "bootstrap-js",
    "asset!stylesheets/home.styl"
  ];

  require(assets, function(view) {
    var body = jquery(document.getElementsByTagName('body')[0]);

    // Append the view to the body
    var angularDocument = angular.element(view);
    body.append(angularDocument);

    var homePageApp = angular.module('homePageApp', []);
    angular.module('homePageApp').controller('HomePageCtrl', homePageCtrl);

    angular.bootstrap(angularDocument, ['homePageApp']);
    return homePageApp;
  });
});