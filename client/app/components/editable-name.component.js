import controller from './editable-name.controller';
import template from './editable-name.html';

let editableNameComponent = {
  template,
  controller,
  bindings: {
    fieldValue: '<',
    fieldType: '@?',
    onUpdate: '&'
  }
}

export default editableNameComponent;