import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=af04aed517ba42cb853d49f5f01d8c03&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      // console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
