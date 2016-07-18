import AnimalModule from './animal'

describe('Animal', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(AnimalModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('Animal component should be visible when navigates to /animal/1', () => {
      $location.url('/animal/1');
      $rootScope.$digest();
      expect($state.current.component).to.eq('animal');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('animal', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

});
