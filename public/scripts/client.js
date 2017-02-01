var app = angular.module('giphyApp', []);

app.controller('GiphyController', function($http){
  console.log('GiphyController loaded');

  var API = 'http://api.giphy.com/v1';

  var ctrl = this;
   ctrl.imageUrl = " ";

  ctrl.addRandomGiphy = function(){
    $http ({
    method:'GET',
      url: API + '/gifs/random',
      params : {
        api_key:'dc6zaTOxFJmzC',
        q:null
      }
    }).then(function(response){
    console.log('Got a response from the API', response);
    ctrl.imageUrl = response.data.data.image_url;
  }).catch(function(err){
    console.log('Error getting info from API', err);
  });
}

});
