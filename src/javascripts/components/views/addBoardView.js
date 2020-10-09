import form from '../../forms/addBoardsForm';

const addBoardView = () => {
  $('#app').html('<div id="board-form"></div>');
  form.addBoard();
};

export default { addBoardView };
