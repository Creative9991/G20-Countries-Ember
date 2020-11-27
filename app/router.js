import EmberRouter from '@ember/routing/router';
import config from 'ember-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('add-gist', { path: '/add-gist'});
  this.route('nav');
  this.route('home', { path : '/home'});
  this.route('list-of-countries');
  this.route('list-of-venues');
  this.route('not-found', { path: '/*path' });
});
