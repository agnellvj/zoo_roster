class AnimalController {
  constructor($stateParams) {
   'ngInject';

    this.name = 'Animal';
    console.log("state:", $stateParams.id);
  }
}

export default AnimalController;
