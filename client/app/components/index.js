import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import ZooRosterList from './zoo-roster-list.component';
componentsModule.component('zooRosterList', ZooRosterList);

export default componentsModule;