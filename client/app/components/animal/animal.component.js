import template from './animal.html';
import controller from './animal.controller';
import './animal.styl';

let animalComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default animalComponent;
