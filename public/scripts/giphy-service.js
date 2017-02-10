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
        q:query,
        limit:'1'
      }
    }).then(function(response){
      console.log('Got a response from the API', response);
      return response.data.data[0].images.original.url;
    }).catch(function(err){
      console.log('Error getting info from API', err);
    });
  };
  this.saveAsFavoriteGiphy = function(favGiphy){
    console.log('favGiphy:', favGiphy);
    return $http({
      method: 'POST',
      url: '/fav',
      data: favGiphy
    }).then(function(response){
      console.log('Added favorite', response);
      return response;
    }).catch(function(err){
      console.log('Error getting info', err);
    });
  };
  this.getFavoriteGiphy =function(){
    return $http({
      method: 'GET',
      url: '/fav'
    }).then(function(response){
      console.log('Get response:', response);
      return response;
      
    }).catch(function(err){
      console.log('Error getting info', err);
    });
  };
});
