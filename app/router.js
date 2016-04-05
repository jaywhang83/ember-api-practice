import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee', {path: '/committee/:committee_id'});
  this.route('bills');
  this.route('bill-detail', {path: '/bill-detail/:bill_id'});
});

export default Router;
