var app = angular.module('giphyApp', []);

app.controller('GiphyController', function($http, GiphyService){
  console.log('GiphyController loaded');

  var ctrl = this;
  ctrl.imageUrl = "";
  ctrl.searchQuery = " ";
  ctrl.search =[];

ctrl.addRandomGiphy= function(){
  console.log('Good');
  ctrl.imageUrl = GiphyService.addRandomGiphy();
  console.log("image:", ctrl.imageUrl);
};
  ctrl.searchForGiphy = function(response){
    console.log('Got a response from the API', response);
    GiphyService.searchForGiphy(response).then(function (imageUrl) {
      toggleGiphy(giphy);
      ctrl.currentGiphy.imageUrl = imageUrl;
    });
  };
});
