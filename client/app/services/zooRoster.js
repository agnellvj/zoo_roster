export default class ZooRoster {
  constructor($http, $state) {
    'ngInject';

    this._$http = $http;
    this._$state = $state;

  }

  fetch() {
    this._$httpBackEnd().then(
      (res) => {
        this.current = res.data.user;
        deferred.resolve(true);
      },
      (err) => {
        this._JWT.destroy();
        deferred.resolve(false);
      }
    );
  }

}