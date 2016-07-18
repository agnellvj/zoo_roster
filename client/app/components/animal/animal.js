import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animalComponent from './animal.component';
import moment from 'moment';

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

.filter('agerize', () => {
  return (dob) => {
    let date_of_birth = moment(dob, 'MM-DD-YYYY');
    return (moment().format("YYYY") - date_of_birth.format("YYYY"));
  }
})

.component('animal', animalComponent)

.name;

export default animalModule;
