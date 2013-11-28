require([
  'angular',
  'configSettings',
  'controllers/homePageCtrl'
], function(angular, configSettings, homePageCtrl) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  console.log("HomePageApp loading");

  // Load the template for the home page
  require(["text!views/homePage.html"], function(view) {
    var body = angular.element(document.getElementsByTagName(('body'))[0]);

    // Append the view to the body
    var angularDocument = angular.element(view);
    body.append(angularDocument);

    var homePageApp = angular.module('homePageApp', []);
    angular.module('homePageApp').controller('HomePageCtrl', homePageCtrl);
    
    angular.bootstrap(angularDocument, ['homePageApp']);
    return homePageApp;
  });
});