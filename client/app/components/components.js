import angular from 'angular';
import Home from './home/home';
import Animal from './animal/animal';

let componentModule = angular.module('app.components', [
  Home,
  Animal
])

.name;

export default componentModule;
