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

.filter('genderize', () => {
  return (gender) => {
    let genderHash = { 'm' : 'Male', 'f': 'Female' };
    return genderHash[gender];
  }
})

.component('animal', animalComponent)

.name;

export default animalModule;
