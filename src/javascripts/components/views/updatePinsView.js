import boardData from '../../helpers/data/boardData';
import form from '../../forms/updatePinsForm';

const updatePinsView = (uid) => {
  $('#app').html('<div class="forms" id="update-pins-form"></div>');
  boardData.getSingleBoard(uid).then((response) => {
    form.updateBoardForm(response);
  });
};

export default { updatePinsView };
