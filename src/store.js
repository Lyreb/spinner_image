import michelin from './assets/michelin.png';
import skate from './assets/skate.png';
import surf from './assets/surf.png';
import volcom from './assets/volcom.png';
import SpinnerManager from './model/SpinnerManager';

const STORE = {
  spinnerManager: new SpinnerManager(),
};

STORE.spinnerManager.addSpinner({
  name: 'michelin', picture: michelin, x: 100, y: 200,
}).addSpinner({
  name: 'skate', picture: skate, x: 100, y: 200,
}).addSpinner({
  name: 'surf', picture: surf, x: 100, y: 200,
}).addSpinner({
  name: 'volcom', picture: volcom, x: 100, y: 200,
});

export default STORE;