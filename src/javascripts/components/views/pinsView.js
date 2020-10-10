import pinData from '../../helpers/data/pinData';
import pinMaker from '../cards/pinCard';

const pinView = () => {
  $('#app').html('');
  pinData.getPins().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(pinMaker.pinMaker(item));
      });
    } else {
      $('#app').html('<h1 class="no-pins"> NO PINS!</h1>');
    }
  });
};

export default { pinView };
