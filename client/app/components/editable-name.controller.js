class EditableNameController {
  constructor(ZooRoster) {
   'ngInject';

   this._ZooRoster = ZooRoster;
   this.editMode = false;
  }

  handleModeChange() {
    let _this = this;

    if (this.editMode) {
      _this.onUpdate({name: this.fieldValue, id: this.fieldId});
    }
    this.editMode = !this.editMode;
  };

  onUpdate(animal) {
    this._ZooRoster.update(animal);
  }

  $onInit() {
    // Set a default fieldType
    if (!this.fieldType) {
      this.fieldType = 'text';
    }
  };
}

export default EditableNameController;
