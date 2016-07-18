import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import zooRosterList from '../zoo-roster-list.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
.component('zooRosterList', zooRosterList)

.name;

export default homeModule;
