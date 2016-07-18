class AnimalController {
  constructor($stateParams, ZooRoster) {
   'ngInject';

    this.name = 'Animal';
    if(ZooRoster.isEmpty()) {
      ZooRoster.fetch().then((res) =>
      {
        this.animal = ZooRoster.find($stateParams.id);
      })
    } else {
      this.animal = ZooRoster.find($stateParams.id)
    }
  }
}

export default AnimalController;
