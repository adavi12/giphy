app.service('GiphyService', function ($http) {
  var API = 'http://api.giphy.com/v1';

    this.addRandomGiphy = function(){
      return $http ({
        method:'GET',
        url: API + '/gifs/random',
        params : {
          api_key:'dc6zaTOxFJmzC',
          q:null
        }
      }).then(function(response){
        console.log('Got a response from the API', response.data.data.image_url);
        return response.data.data.image_url;
      }).catch(function(err){
        console.log('Error getting info from API', err);
      });
    };
  this.searchForGiphy = function(query){
     return $http ({
      method:'GET',
      url: API + '/gifs/search',
      params : {
        api_key:'dc6zaTOxFJmzC',
        q:query
      }
    }).then(function(response){
      console.log('Got a response from the API', response);
      return response.data.data;
    }).catch(function(err){
      console.log('Error getting info from API', err);
    });
  };
});
