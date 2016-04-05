import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?&per_page=50&apikey=af04aed517ba42cb853d49f5f01d8c03';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log("bills", responseJSON.results);
      return responseJSON.results;

    });
  }
});
