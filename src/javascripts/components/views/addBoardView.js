import addBoard from '../../forms/addBoardsForm';

const addBoardDom = () => {
  $('#app').html('');
  addBoard.addBoardsForm();
  $('.no-boards').html('');
};

export default { addBoardDom };
