import services from '../../services/services';
import components from '../../components/index';

class HomeController {
  constructor(ZooRoster) {
   'ngInject';

    this.name = 'home';
    let _this = this;

    ZooRoster.fetch().then((res) => {
      _this.roster = res;
    });
  }
}

export default HomeController;
