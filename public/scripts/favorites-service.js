// angular.module("giphyApp").service("FavoritesService", [
//   "$http",
//   function($http) {
//     console.log("FavoritesService loaded");
//
//     this.favCount = 0;
//
// this.saveAsFavoriteGiphy = function(favGiphy){
//   console.log('favGiphy:', favGiphy);
//   return $http({
//     method: 'POST',
//     data: favGiphy
//   }).then(function(response){
//     console.log('Added favorite');
//     return response.data;
//   }).catch(function(err){
//     console.log('Error getting info', err);
//   });
// };
// this.getFavorite =function(){
//   return $http({
//     method: 'GET',
//     url: '/fav'
//   }).then(function(response){
//     console.log('Get response:', response);
//     return response;
//
//   }).catch(function(err){
//     console.log('Error getting info', err);
//   });
// };
// }]);
