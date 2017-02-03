var app = angular.module('giphyApp', []);

app.controller('GiphyController', function($http, GiphyService){
  console.log('GiphyController loaded');

  var ctrl = this;
  ctrl.imageUrl = "";
  ctrl.search =[];

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
      ctrl.search = imageUrlArray;
    });
  };
});
