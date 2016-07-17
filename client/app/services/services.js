import angular from 'angular';

let servicesModule = angular.module('app.services', []);

import ZooRosterService from './zooRoster';
servicesModule.service('ZooRoster', ZooRosterService);

export default servicesModule;