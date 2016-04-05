import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?bill_id='+params.bill_id+'&fields=summary,committees,official_title,introduced_on,sponsor,urls&apikey=af04aed517ba42cb853d49f5f01d8c03';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log("bill-detail", responseJSON);
      return responseJSON.results;

    });
  }
});
