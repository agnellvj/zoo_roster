import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import rowItem from '../row-item.component';

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
.component('rowItem', rowItem)

.name;

export default homeModule;
