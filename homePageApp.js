require([
  'angular',
  'jquery',
  'lodash',
  'configSettings',
  'controllers/homePageCtrl'
], function(angular, jquery, _, configSettings, homePageCtrl) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  console.log("HomePageApp loading");

  // Load the template for the home page
  var assets = [
    "text!views/homePage.html",
    "css!//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"
  ];

  require(assets, function(view) {
    var body = jquery(document.getElementsByTagName('body')[0]);

    // Load the artists from the DOM
    var homePageData = {
      hotArtists: _.map(body.find("ul[data-hot-artists] > li a"), function(el) {
        el = $(el);
        return {
          id: el.data("id"),
          name: el.text()
        }
      })
    };

    // Append the view to the body
    var angularDocument = angular.element(view);
    body.append(angularDocument);

    var homePageApp = angular.module('homePageApp', []);

    // Define a homePageData service to inject the homePageData into the controller
    homePageApp.factory('homePageData', [function() {
      return homePageData;
    }]);

    angular.module('homePageApp').controller('HomePageCtrl', homePageCtrl);
    
    angular.bootstrap(angularDocument, ['homePageApp']);
    return homePageApp;
  });
});