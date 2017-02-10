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

app.controller('FavoritesController', function (GiphyService) {
  console.log('FavoritesController is loaded');
  var favCtrl =this;
  favCtrl.getGiphyResult = function(){
    console.log('Got giphy back to display');

    GiphyService.getFavoriteGiphy().then(function (response) {
      console.log('working?');
      favCtrl.giphyArray = response.data;
      console.log(favCtrl.giphyArray.length);
    });

  };
  favCtrl.getGiphyResult();
});

app.controller('GiphyController', function(GiphyService){
  console.log('GiphyController loaded');

  var ctrl = this;
  // ctrl.imageUrl = "";
  ctrl.favGiphy = [];
  ctrl.favCount = 0;
  // ctrl.favComment = "";

  //
  ctrl.addRandomGiphy= function(){
    // console.log('Good');
    GiphyService.addRandomGiphy().then(function(imageUrl){
      ctrl.imageUrl = imageUrl;
    });
  };
  ctrl.searchForGiphy = function(searchQuery){
    console.log('Got a search query from the input field of html file', searchQuery);
    //the callback function starts after.then so that imageUrlArray represent the data wanted,whereas the first part is a regular function
    GiphyService.searchForGiphy(searchQuery).then(function (imageUrlArray) {
      ctrl.imageUrl =  imageUrlArray;
    });
  };
  ctrl.saveAsFavoriteGiphy = function(){
    ctrl.gifObject = {
      imageUrl :ctrl.imageUrl,
      comment: ctrl.favComment
    };
    console.log(ctrl.gifObject);
    GiphyService.saveAsFavoriteGiphy(ctrl.gifObject).then(function () {
      console.log('saved object?');
    });
  };
});
