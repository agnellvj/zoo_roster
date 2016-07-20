class EditableNameController {
  constructor() {
   'ngInject';

   this.editMode = false;

  }

  handleModeChange() {
    if (this.editMode) {
      this.onUpdate({value: this.fieldValue});
    }
    this.editMode = !this.editMode;
  };

  $onInit() {
    // Set a default fieldType
    if (!this.fieldType) {
      this.fieldType = 'text';
    }
  };
}

export default EditableNameController;
