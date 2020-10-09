import forms from '../../forms/addPinsForm';

const addPinsView = () => {
  $('#app').html('<div id="pin-form"></div>');
  forms.addPin();
};

export default { addPinsView };
