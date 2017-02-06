var app = angular.module('giphyApp',['ngRoute']);



  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl:'views/pages/home.html',
      controller:'GiphyController as giphy'
    }).when('/favorites', {
      templateUrl: 'views/pages/favorites.html',
      controller: 'FavoritesController as favoritesCtrl'
    });

      $locationProvider.html5Mode(true);
    });

    app.controller('FavoritesController', function () {
      console.log('FavoritesController is loaded');
    });

    app.controller('GiphyController', function(GiphyService){
      console.log('GiphyController loaded');

  var ctrl = this;
  ctrl.imageUrl = "";
  ctrl.favGiphy = [];
  ctrl.favCount = 0;
  ctrl.favComment = "";
//
  ctrl.addRandomGiphy= function(){
    // console.log('Good');
    GiphyService.addRandomGiphy().then(function(imageUrl){
      ctrl.imageUrl = imageUrl;
    });
    // console.log("image:", ctrl.imageUrl);
  };
  ctrl.searchForGiphy = function(searchQuery){
    console.log('Got a search query from the input field of html file', searchQuery);
    //the callback function starts after.then so that imageUrlArray represent the data wanted,whereas the first part is a regular function
    GiphyService.searchForGiphy(searchQuery).then(function (imageUrlArray) {
      ctrl.imageUrl =  imageUrlArray;
    });
  };


  ctrl.addFavoriteGiphy = function(){
    console.log('Favorite');
    console.log(ctrl.imageUrl);
    console.log(ctrl.favComment);
    GiphyService.addFavoriteGiphy().then(function(){
    console.log('ok');
    ctrl.favCount = ctrl.favGiphy.length;

    // ctrl.imageUrl
    //
    // ctrl.favComment
  });
  };
  });
// });
