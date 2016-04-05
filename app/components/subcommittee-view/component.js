import Ember from 'ember';

export default Ember.Component.extend({

init() {
  var params = {
    id: this.get('committee')
  };
  console.log(params);
  this.sendAction('getCommitteeId', params);
  this._super();
  }
});
