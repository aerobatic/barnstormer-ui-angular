require([
  'angular',
  'jquery',
  'lodash',
  'asset!controllers/homePageCtrl.js'
], function(angular, jquery, _, homePageCtrl) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  console.log("HomePageApp loading");

  // Load the template for the home page
  var assets = [
    "asset!views/home.jade",
    "asset!bootstrap",
    "bootstrap-js",
    "asset!libs/holder",
    "asset!stylesheets/home.styl"
  ];

  require(assets, function(view) {
    var body = jquery(document.getElementsByTagName('body')[0]);

    // Load the artists from the DOM
    var homePageData = {
      hotArtists: _.map(body.find("ul[data-hot-artists] > li a"), function(el) {
        el = $(el);
        return {
          id: el.data("id"),
          href: el.attr("href"),
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