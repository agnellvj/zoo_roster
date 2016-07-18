import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animalComponent from './animal.component';

let animalModule = angular.module('animal', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('animal', {
      url: '/animal/:id',
      component: 'animal'
    });
})

.component('animal', animalComponent)

.name;

export default animalModule;
