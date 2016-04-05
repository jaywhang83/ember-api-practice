import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.bioguide_id);
    var url = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id='+ params.bioguide_id+'&apikey=af04aed517ba42cb853d49f5f01d8c03';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      // console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
