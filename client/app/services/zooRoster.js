import _ from 'lodash';

export default class ZooRoster {
  constructor($http, $injector, $state) {
    'ngInject';

    this._$http = $http;
    let $httpBackend = $injector.get('$httpBackend');
    this._$httpBackend = $httpBackend;
    this._$state = $state;
    this._roster = [];

    this.setupResponse();
  }

  isEmpty() {
    return this._roster.length === 0;
  }

  fetch() {
    let _this = this;
    while(this._roster.length > 0) {
      this._roster.pop();
    }
    return this._$http.get('http://localhost/foo').then(
      (res) => {
        _.each(res.data, (z) => {
          _this._roster.push(z);
        })
        return res.data;
      },
        (err) => {}
      );
  }

  find(id) {
    return _.find(this._roster, { id: parseInt(id) });
  }

  setupResponse() {
    let data = [
      {
        "id":1,
        "name":"Moe",
        "species":"Lion",
        "sex":"m",
        "dob":"12/19/1998"
      },
      {
        "id":2,
        "name":"Lilly",
        "species":"Lion",
        "sex":"f",
        "dob":"2/21/2006"
      },
      {
        "id":3,
        "name":"Curly",
        "species":"Orangutan",
        "sex":"m",
        "dob":"11/4/2015"
      },
      {
        "id":4,
        "name":"Dexter",
        "species":"Mountain Lion",
        "sex":"m",
        "dob":"6/7/2016"
      },
      {
        "id":5,
        "name":"Leia",
        "species":"Hippo",
        "sex":"f",
        "dob":"4/10/2003"
      },
      {
        "id":6,
        "name":"Saul",
        "species":"Snake",
        "sex":"m",
        "dob":"4/4/1981"
      },
      {
        "id":7,
        "name":"Lois",
        "species":"Snake",
        "sex":"f",
        "dob":"3/3/1986"
      },
      {
        "id":8,
        "name":"Jillian",
        "species":"Jackel",
        "sex":"f",
        "dob":"7/20/1987"
      },
      {
        "id":9,
        "name":"Daniel",
        "species":"Kangoroo",
        "sex":"m",
        "dob":"9/28/2001"
      },
      {
        "id":10,
        "name":"Jasper",
        "species":"Moose",
        "sex":"m",
        "dob":"7/14/1989"
      },
      {
        "id":11,
        "name":"Thor",
        "species":"Hawk",
        "sex":"m",
        "dob":"12/2/1996"
      },
      {
        "id":88,
        "name":"Hulk",
        "species":"Hippo",
        "sex":"m",
        "dob":"12/19/1998"
      },
      {
        "id":90,
        "name":"Candace",
        "species":"Red Fox",
        "sex":"f",
        "dob":"03/22/2007"
      },
      {
        "id":736,
        "name":"George",
        "species":"Bald Eagle",
        "sex":"m",
        "dob":"1/19/1977"
      }
    ];

    this._$httpBackend
      .when('GET', 'http://localhost/foo')
      .respond(200, data);

  }
}